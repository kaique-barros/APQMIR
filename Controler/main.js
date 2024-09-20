window.onload = main; // função para carregar os acionadores e adicionar o primeiro prédio

function main(){
    $("#add_predio").on("click", adicionar_predio);
    adicionar_predio();
}

function atualizar_andares_tipo(predio){
    let andares = $("#"+predio+" input[name=andar_tipo]");
    let andares_tipo = new Array(0);
    for (let i = 0; i < andares.length; i++) {
        let andar = andares[i];
        if(andar.checked){
            andares_tipo.push(andar.parentElement.id);
        }
    }
    let tel_pts
    let cftv_pts
    let voip_pts
    andares_tipo.forEach(andar => {
        let valores = $("#"+andar + " input[type=number]");
        if(valores[0].value != ""){
            tel_pts = valores[0].value
        }
        if(valores[1].value != ""){
            cftv_pts = valores[1].value
        }
        if(valores[2].value != ""){
            voip_pts = valores[2].value
        }
    });

    andares_tipo.forEach(andar => {
        $("#"+andar + " input[type=number]")[0].value = tel_pts;
        $("#"+andar + " input[type=number]")[1].value = cftv_pts;
        $("#"+andar + " input[type=number]")[2].value = voip_pts;
    })
}

$("#calcular").on("click", calcular)