import banco from '../config/database.js';
import jwt from 'jsonwebtoken';	

const secretJwt = process.env.SECRET_JWT; 

export async function register(req, res) {
    const { nome, email, senha, confirmarSenha } = req.body;

    if (senha !== confirmarSenha) {
        return res.status(400).send('As senhas não coincidem');
    }

    try {
        const { rows } = await banco.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        if (rows.length > 0) return res.status(400).send('Email já registrado');

        await banco.query('INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)', [nome, email, senha]);
        res.json({ success: true, redirectUrl: '/pages/login.html' });

    } catch (error) {
        res.status(500).send('Erro ao registrar o usuário');
    }
}

export async function login(req, res) {
    const { email, senha } = req.body;

    try {
        const { rows } = await banco.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        if (rows.length === 0) return res.status(400).json({ success: false, message: 'Email não encontrado' });

        const user = rows[0];
        if (senha !== user.senha) return res.status(400).json({ success: false, message: 'Senha incorreta' });

        const token = jwt.sign({ id: user.id, email: user.email }, secretJwt, { expiresIn: '1h' });

        res.json({ success: true, token, redirectUrl: '/pages/chat.html' });

    } catch (error) {
        res.status(500).json({ success: false, message: 'Erro ao buscar o usuário' });
    }
}