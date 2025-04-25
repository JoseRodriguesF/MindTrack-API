async function gerarDica() {
    try {
        // Faz a requisição para o endpoint de gerar dica
        const response = await fetch('http://localhost:3000/api/dica', {
            method: 'GET', // Ou 'POST', dependendo de como o endpoint foi configurado
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}` // Inclua o token JWT, se necessário
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar a dica: ' + response.statusText);
        }

        const data = await response.json();

        // Exibe a dica no console ou em algum elemento da página
        console.log('Dica gerada:', data.dica);
        document.getElementById('dica').innerText = data.dica;

    } catch (error) {
        console.error('Erro ao gerar dica:', error);
        document.getElementById('dica').innerText = 'Erro ao gerar dica. Tente novamente mais tarde.';
    }
}

// Chama a função ao carregar a página ou em algum evento
document.addEventListener('DOMContentLoaded', gerarDica);