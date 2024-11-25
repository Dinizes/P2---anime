
function validateForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

   
    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false; // Impede o envio do formulário
    }

   
    alert("Mensagem enviada com sucesso!");
    document.getElementById("form-contato").reset(); // Limpa o formulário após envio
    return true; // Permite o envio do formulário
}

// Verificar o tema armazenado no LocalStorage ao carregar a página
window.onload = function() {
    const savedTheme = localStorage.getItem('theme'); // Obtém o tema salvo
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        // Se não houver tema salvo, define o tema claro como padrão
        document.body.classList.add('light-theme');
    }

    // Exibir ou ocultar o botão de alternância na página inicial (index.html)
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        // O botão de alternância está visível apenas na página inicial
        themeToggleButton.style.display = 'inline-block';
    }
}

// Função para alternar entre tema claro e escuro
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    
    // Remove o tema atual e adiciona o novo
    body.classList.remove(currentTheme);
    
    if (currentTheme === 'light-theme') {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme'); // Salva a escolha do tema
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme'); // Salva a escolha do tema
    }
}



