$("#add_predio").on("click", adicionar_predio);

function adicionar_predio(){ 
    $.ajax({
        url:"../View/Containers/predio.html",
        dataType: "html"})
        .done((layout) => {
           let predio = layout;
           $("#predios").append(predio);
           atualizar_numero_predios();
    })
};

function atualizar_numero_predios(){
    let predios = document.getElementsByClassName("predio");
    let predio = "predio_" + predios.length;
    predios[predios.length - 1].id = predio;
    $("#" + predio + " > h1")[0].innerHTML = "PREDIO " + predios.length;
    adicionar_andar(predio);
}

adicionar_predio();