function adicionar_andar(predio){ 
    return new Promise((resolve) => {
        $.ajax({
            url:"../View/Containers/andar.html",
            dataType: "html"})
                .done((layout) => {
                let nome_div_andares = predio + "-andares";
                $("#"+predio+" > div")[0].id = nome_div_andares;
                $("#" + nome_div_andares).prepend(layout);
                atualizar_numero_andares(predio, nome_div_andares);
                resolve(10);
        })
    })
};

function atualizar_numero_andares(predio, nome_div_andares){
    let andares = $("#"+ nome_div_andares + " > .andar");
    let andar = predio + "-andar_" + andares.length;
    $("#"+ nome_div_andares + " > .andar")[0].id = andar;
    $("#" + andar + " > h1")[0].innerHTML = "ANDAR " + andares.length;
    $("#" + andar + " input[type=radio]")[0].name = predio + "_seq"
}


async function duplicar_andar(andar_base){
    let predio = andar_base.slice(0,8);
    await adicionar_andar(predio);
    let numero_andar_novo = $("#" + predio + " .andar").length;
    let andar_novo = predio + "-andar_" + numero_andar_novo;
    let valores = {
        tel_pts: $("#" + andar_base + " input")[0].value,
        cftv_pts: $("#" + andar_base + " input")[1].value,
        voip_pts: $("#" + andar_base + " input")[2].value
    }
    $("#" + andar_novo + " input")[0].value = valores.tel_pts;
    $("#" + andar_novo + " input")[1].value = valores.cftv_pts;
    $("#" + andar_novo + " input")[2].value = valores.voip_pts;
}