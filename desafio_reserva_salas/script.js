const url = "http://localhost:3000"
const tabela = document.querySelector("#tabela")
const atividade = document.querySelector("#atividade")
const sala = document.querySelector("#sala")
const dataInicial = document.querySelector("#data_inicial")
const dataFinal = document.querySelector("#data_final")
const btnReservar = document.querySelector("#btn-reservar")


let reservas = []

async function listarReservas(){
    await fetch(`${url}/reservas`)
        //transformando o response.body em um json    
        .then(response => { return response.json()})
        //colocando response na variavel reservas
        .then(response => reservas = response)
        //caso haja algum problema cairá no catch
        .catch(error => console.log(error))
}

async function addReserva() {
    const reserva = {
        atividade: atividade.ariaValueMax,
        sala: sala.ariaValueMax,
        dataInicial: new Date(dataInicial.vale),
        dataFinal: new Date (dataFinal.value)
    }
    
    await fetch(`${url}/reservas`,{
        method:`POST`,
        headers: {"Content-typer":"application/json"},
        body : JSON.stringify(reserva)})
        .then(response => console.log (response))
        .catch(error => console.log(error))

    }

async function run() {
    await listarReservas()
    renderizarTabela()
}

run()
//innerHTML mudar o html da tela
function renderizarTabela(){
    tabela.innerHTML = `
        <table class = tabela>
            <tr>
                <th>Atividade</th>
                <th>Sala</th>
            </tr>
            ${reservas.map(reserva =>
                `
                <tr>
                    <td>${reserva.id}</td>
                    <td>${reserva.sala}</td>
                </tr>
                `
            ).join('')}
        </table>
    `;
}

listarReservas()