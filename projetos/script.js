let nota = document.querySelector('#nota')
let btnCadastrar= document.querySelector('#btnCadastrar')

btnCadastrar.addEventListener('click', (e) =>{
    e.preventDefault();
    alert(`Calculando a média da nota ${nota.value}`);
})

function verificarMedia(nota){
    if(nota>=60){
        return "Estudante Aprovado"
    } else {
        return "Estudante Reprovado"
    }
}