const url = "http://localhost:3000"
const tabela = document.querySelector("#tabela")
const btnReservar = document.querySelector("#btnReservar");
const pagina1 = document.querySelector("#pagina1")
const pagina2 = document.querySelector("#pagina2")
const pagina3 = document.querySelector("#pagina3")
const pagina4 = document.querySelector("#pagina4")
const pagina5 = document.querySelector("#pagina5")
const inputMarca = document.querySelector('#marca');
const inputModelo = document.querySelector('#modelo');
const inputAno = document.querySelector('#ano');
const inputCor = document.querySelector('#cor');
const inputPreco = document.querySelector('#preco');
const conteudoTabela = document.querySelector('#conteudoTabela');
const mensagem = document.querySelector('#mensagem');

let veiculos = [];
getVeiculos()
renderizarTabela()

function getVeiculos() {
    veiculos.JSON.parse(localStorage.getItem
        ('veiculos')) || []
}

function setVeiculos() {
    localStorage.setItem("veiculos", JSON.stringify
        (veiculos))
}

function addVeiculos(marca, modelo, ano, cor, preco) {
    let veiculo = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        preco: preco

    }

    veiculos.push(veiculo)
    setVeiculos()
    mostrarMensagem("Veiculos Adicionado!!!")
}

btnAddVeiculo.addEventListener('click', function (e) {
    e.preventDefault()
    // console.log("OK... não recarregou!")
    addVeiculos(inputMarca.value, inputModelo.value, inputAno.value, inputCor.value, inputPreco.value);
    console.table(veiculos);
    limparFormulario()
    renderizarTabela()
})

function limparFormulario() {
    inputMarca.value= ''
    inputModelo.value= ''
    inputAno.value= ''
    inputCor.value= ''
    inputPreco.value= ''
    inputMarca.focus()
}
function mostrarMensagem(texto){
    mensagem.style.display = 'block'
    mensagem.innerHTML = texto

    setTimeout(function() {
        mensagem.style.display = 'none'
        mensagem.innerHTML = ''
    }, 3000)
}
// let veiculos = []

async function listarVeiculos(pagina) {
    await fetch(`${url}/veiculos?_page=${pagina}`)
        //transformando o response.body em um json    
        .then(response => { return response.json() })
        //colocando response na variavel reservas
        .then(response => veiculos = response.data)
        //caso haja algum problema cairá no catch
        .catch(error => console.log(error))
}

async function run(pagina) {
    await listarVeiculos(pagina)
    renderizarTabela()
}

run(1)
//innerHTML mudar o html da tela
function renderizarTabela() {
    tabela.innerHTML = `
        <table class = tabela>
            <tr>
                <th>marca</th>
                <th>modelo</th>
                <th>ano</th>
                <th>cor</th>
                <th>preco</th>
            </tr>
            ${veiculos.map(veiculo =>
        `
                <tr>
                    <td>${veiculo.marca}</td>
                    <td>${veiculo.modelo}</td>
                    <td>${veiculo.ano}</td>
                    <td>${veiculo.cor}</td>
                    <td>${veiculo.preco}</td>
                </tr>
                `
    ).join('')}
        </table>
    `;
}
pagina1.addEventListener("click", (e) => {
    e.preventDefault();
    run(1)
});
pagina2.addEventListener("click", (e) => {
    e.preventDefault();
    run(2)
});
pagina3.addEventListener("click", (e) => {
    e.preventDefault();
    run(3)
});
pagina4.addEventListener("click", (e) => {
    e.preventDefault();
    run(4)
});
pagina5.addEventListener("click", (e) => {
    e.preventDefault();
    run(5)
}); 