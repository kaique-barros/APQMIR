function atualizar_numero_predios(so_atualizar){
    let predios = document.getElementsByClassName("predio");
    let predio = "predio_" + predios.length;
    predios[predios.length - 1].id = predio;
    $("#" + predio + " > h2")[0].innerHTML = "PREDIO " + predios.length;
    if(!so_atualizar){
        adicionar_andar(predio);
    }
}

function adicionar_predio(){ 
    $.ajax({
        url:"https://raw.githubusercontent.com/kaique-barros/APQMIR/refs/heads/main/View/Containers/predio.html",
        dataType: "html"})
        .done((layout) => {
            $("#predios").append(layout);
            atualizar_numero_predios(false);
    })
};
