function cadastrarPet() {
    let nomePet = document.getElementById ("nome").value;
    let especiePet = document.getElementById ("especie").value;
    let opcaoPet = "Não informado";
    if (opcaoSexo) {
        sexoPET = opcaoSexo
    }
}

let servicosSelecionados = document.querySelectorAll (" .serv:checked");
let listaServicos = "";
for (let cont=0; cont<servicosSelecionados.length; cont++){
    let nomeServico = servicosSelecionados[cont].value;
    listaServicos += nomeServico + "";

    localStorage.setItem("nomePet", nomePet);
    localStorage.setItem("especiePet", especiePet);
    localStorage.setItem("sexoPet", sexoPET);
    localStorage.setItem("listaServicos", listaServicos);
    window.location = 'comprovante.html';
}