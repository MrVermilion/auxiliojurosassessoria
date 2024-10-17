// Função para salvar os dados no Local Storage
function saveClientData(client) {
    let clients = JSON.parse(localStorage.getItem('clients')) || []; // Recupera dados do localStorage
    clients.push(client); // Adiciona novo cliente ao array
    localStorage.setItem('clients', JSON.stringify(clients)); // Atualiza o localStorage
}

// Função para carregar e exibir os dados dos clientes
function loadClientData() {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const tbody = document.querySelector('#clientTable tbody');
    tbody.innerHTML = ''; // Limpa a tabela

    // Preenche a tabela com os clientes armazenados
    clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.nome}</td>
            <td>${client.nacionalidade}</td>
            <td>${client.estadoCivil}</td>
            <td>${client.profissao}</td>
            <td>${client.rg}</td>
            <td>${client.cpf}</td>
            <td>${client.endereco}</td>
            <td>${client.cidade}</td>
            <td>${client.data}</td>
        `;
        tbody.appendChild(row);
    });
}

// Evento para salvar dados ao submeter o formulário
document.getElementById('clientForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const client = {
        nome: document.getElementById('nome').value,
        nacionalidade: document.getElementById('nacionalidade').value,
        estadoCivil: document.getElementById('estado-civil').value,
        profissao: document.getElementById('profissao').value,
        rg: document.getElementById('rg').value,
        cpf: document.getElementById('cpf').value,
        endereco: document.getElementById('endereco').value,
        cidade: document.getElementById('cidade').value,
        data: document.getElementById('data').value,
    };

    saveClientData(client); // Salva os dados no Local Storage
    this.reset(); // Limpa o formulário
});

// Carregar dados ao carregar a página de clientes
if (window.location.pathname.includes('clientes.html')) {
    document.addEventListener('DOMContentLoaded', loadClientData);
}
