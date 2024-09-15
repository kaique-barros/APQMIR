function adicionar_andar(predio){ 
    $.ajax({
        url:"../View/Containers/andar.html",
        dataType: "html"})
            .done((layout) => {
            let andar = layout;
            let nome_div_andares = predio + "-andares";
            $("#"+predio+" > div")[0].id = nome_div_andares;
            $("#" + nome_div_andares).prepend(andar);
            atualizar_numero_andares(predio, nome_div_andares);
    })
};

function atualizar_numero_andares(predio, nome_div_andares){
    let andares = $("#"+ nome_div_andares + " > .andar");
    let andar = predio + "-andar_" + andares.length;
    console.log(andares);
    $("#"+ nome_div_andares + " > .andar")[0].id = andar;
    $("#" + andar + " > h1")[0].innerHTML = "ANDAR " + andares.length;
}

function atualizar_andares_tipo(predio) {
    
}