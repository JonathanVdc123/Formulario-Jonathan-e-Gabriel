const forms = document.getElementById('forms');
const nome = document.getElementById('nome');
const qteqd = document.getElementById('qteqd');
const lista = document.getElementById('lista');
const msg = document.getElementById('msg');
const listaRes = document.getElementById('listaRes');

let array = []; //lista la

function salvar() { //funcao la q faz o bagulho de salvar la e seta a lista array no localstorage
    localStorage.setItem("array", JSON.stringify(array));
}

function adicionarNaTela(conteudo) { //funcao la q faz o tiricoteco do bagulho pra add na tela, criando um elemento na const iem, 
    const item = document.createElement("li");
    item.textContent = conteudo;
    lista.appendChild(item); //coloca algo dentro da lista por exemplo
}

msg.style.display = "none";
listaRes.style.display = "none";

forms.addEventListener('submit', function(event) {
    event.preventDefault(); //cncela o evento padrao do navegador quando reinicia a pafgina

    if (nome.value.trim() != "" && qteqd.value.trim() != "") {
        const textoTarefa = nome.value.trim() + " - " + qteqd.value.trim(); //trim() tira os espacos e enters na direita e esquerda da string, deixando apenas texto
        adicionarNaTela(textoTarefa);
        array.push(textoTarefa); //coloca um indice a mais no final da lista e colo o parametro como esse indice
        salvar();
        nome.value = "";
        qteqd.value = "";
        msg.style.display = "none";
        listaRes.style.display = "block";
    } else {
        nome.value = "";
        qteqd.value = "";
        msg.style.display = "block";
    }
});

function carregar() {
    const salvo = localStorage.getItem("array");
    if (salvo !== null) {
        array = JSON.parse(salvo); //transforma string la n0o bagulho json pra ele ler meió
        listaRes.style.display = "block";
        for (let i = 0; i < array.length; i++) {
            adicionarNaTela(array[i]);
        }
    }
}
carregar();