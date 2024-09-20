function calcular() {
    let backbone_lvl_1 = {
        dist_predios: 0, 
        velocidade:0, 
        dist_max:0, 
        qnt_fibras:0
    }
    let backbone_lvl_2 = {
        dist_interna:0, 
        velocidade:0, 
        qnt_fibras:0
    }
    let racks_PA = {
        n_pts_TT:0, 
        n_fibras:0
    }
    let malha_horizontal_PA = {
        tel_pts:0, 
        cftv_pts:0, 
        voip_pts:0, 
        dist_media:0
    }
    let malha_horizontal_TT = {
        tel_pts:0, 
        cftv_pts:0, 
        voip_pts:0, 
        dist_media:0
    }
    
    let predios = pega_predios();

    predios.forEach(predio => {
        backbone_lvl_1.dist_predios += predio.dist_ate_EF;
        backbone_lvl_1.dist_max = backbone_lvl_1.dist_max < predio.dist_ate_EF ? predio.dist_ate_EF : backbone_lvl_1.dist_max // verifica se a distancia maxima é inferior a distancia do predio e troca se for

        backbone_lvl_2.dist_interna 
    });

}

function pega_predios() {
    let predios = [];
    
    for(let i = 0; i < $(".predio").length; i++){
        let predio_atual = $(".predio")[i].id;
        let predio = {
            id : predio_atual,
            andares : pega_andares(predio_atual),
            dist_ate_EF: $("#" + predio_atual + " input[name=dist_ate_ef]")[0].value,
            is_ef: $("#" + predio_atual + " input[name=dist_ate_ef]")[0].value == 0 ? true : false 
        }
        predios.push(predio)
    }
    return predios;
}

function pega_andares(predio) {
    let andares = [];
    for(let i = $("#" + predio + " .andar").length - 1; i > -1; i--){
        let andar_atual = $("#" + predio + " .andar")[i].id;
        let andar = {
            id: andar_atual.slice(9),
            tel_pts: $("#" + andar_atual + " input[name=tel_pts")[0].value,
            cftv_pts: $("#" + andar_atual + " input[name=cftv_pts")[0].value,
            voip_pts: $("#" + andar_atual + " input[name=voip_pts")[0].value,
            tem_seq: $("#" + andar_atual + " input[name="+ predio +"_seq")[0].checked
        }
        andares.push(andar);
    }
    return andares;
}