function atualizar_numero_predios(){
    let predios = document.getElementsByClassName("predio");
    let predio = "predio_" + predios.length;
    predios[predios.length - 1].id = predio;
    $("#" + predio + " > h2")[0].innerHTML = "PREDIO " + predios.length;
    adicionar_andar(predio);
}

function adicionar_predio(){ 
    $.ajax({
        url:"https://raw.githubusercontent.com/kaique-barros/APQMIR/refs/heads/main/View/Containers/predio.html",
        dataType: "html"})
        .done((layout) => {
            $("#predios").append(layout);
            atualizar_numero_predios();
    })
};
