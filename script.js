const forms = document.getElementById('forms');
const lista = document.getElementById('lista');
const msg = document.getElementById('msg');
const listaRes = document.getElementById('listaRes');

let inscricoes = [];

function salvar() {
    localStorage.setItem("inscricoes", JSON.stringify(inscricoes));
}

function adicionarNaTela(texto) {
    const item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item);
}

// Oculta mensagem de erro ao iniciar
if (msg) msg.style.display = "none";

forms.addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os dados do formulário dinamicamente
    const formData = new FormData(forms);
    const nome = formData.get('nome') ? .trim();
    const curso = formData.get('curso');

    // Valida se os campos obrigatórios foram preenchidos
    if (nome && curso) {
        const cursoNome = curso === 'tds' ?
            'Téc. em Dev. de Sistemas' :
            'Formação de Docentes';

        const resumoInscricao = `${nome} - Curso: ${cursoNome}`;

        adicionarNaTela(resumoInscricao);
        inscricoes.push(resumoInscricao);
        salvar();

        forms.reset();
        if (msg) msg.style.display = "none";
        if (listaRes) listaRes.style.display = "block";
    } else {
        if (msg) msg.style.display = "block";
    }
});

function carregar() {
    const salvo = localStorage.getItem("inscricoes");
    if (salvo) {
        inscricoes = JSON.parse(salvo);
        if (listaRes) listaRes.style.display = "block";
        inscricoes.forEach(adicionarNaTela);
    }
}

carregar();