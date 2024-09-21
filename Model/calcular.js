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

        backbone_lvl_2 += predio.dist_interna;

        malha_horizontal_TT.tel_pts += predio.tel_pts;
        malha_horizontal_TT.cftv_pts += predio.tel_pts;
        malha_horizontal_TT.voip_pts += predio.voip_pts;
    });

    backbone_lvl_1.velocidade = $("#vel_back_ext")[0].value;
    
    backbone_lvl_2.velocidade = $("#vel_back_int")[0].value;
    
    malha_horizontal_TT.dist_media = parseInt($("#dist_media_malha_horizontal")[0].value);
    
}

function pega_predios() {
    let predios = [];
    
    for(let i = 0; i < $(".predio").length; i++){
        let predio_atual = $(".predio")[i].id;
        let andares = pega_andares(predio_atual);
        let predio = {
            id : predio_atual,
            andares : andares[0],
            dist_ate_EF: $("#" + predio_atual + " input[name=dist_ate_ef]")[0].value,
            is_ef: $("#" + predio_atual + " input[name=dist_ate_ef]")[0].value == 0 ? true : false,
            dist_interna: 0,
            tel_pts:0, 
            cftv_pts:0, 
            voip_pts:0
        }
        predio.dist_interna += andares[1];
        andares[0].forEach(andar => {
            predio.tel_pts += andar.tel_pts;
            predio.cftv_pts += andar.cftv_pts;
            predio.voip_pts += andar.voip_pts;
        })
        predios.push(predio)
    }

    return predios;
}

function pega_andares(predio) {
    let andares = [];
    let distancia_interna = 0;
    for(let i = $("#" + predio + " .andar").length - 1; i > -1; i--){
        let andar_atual = $("#" + predio + " .andar")[i].id;
        let andar = {
            id: andar_atual.slice(9),
            tel_pts: parseInt($("#" + andar_atual + " input[name=tel_pts")[0].value),
            cftv_pts: parseInt($("#" + andar_atual + " input[name=cftv_pts")[0].value),
            voip_pts: parseInt($("#" + andar_atual + " input[name=voip_pts")[0].value),
            tem_seq: $("#" + andar_atual + " input[name="+ predio +"_seq")[0].checked,
            distancia_a_seq: 15 + 5 * i
        }
        distancia_interna += andar.distancia_a_seq;
        andares.push(andar);
    }
    var resposta = [andares, distancia_interna]
    return resposta;
}