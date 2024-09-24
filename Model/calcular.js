function calcular() {
    let predios = pega_predios();

    var distancia_entre_predios = 0
    var distancia_maxima = 0
    var quantidade_de_fibras = 0
    var quantidade_de_andares = 0
    var quantidade_de_predios = predios.length

    var distancia_interna = 0
        
    var pontos_de_telecom = 0
    var pontos_de_cftv = 0
    var pontos_de_voip = 0

    let tem_cftv = false
    let tem_voip = false
    let tem_backbone_lvl_1 = predios.length > 1
    
    predios.forEach(predio => {
        distancia_entre_predios += parseInt(predio.dist_ate_EF);
        distancia_maxima = parseInt(distancia_maxima < predio.dist_ate_EF ? predio.dist_ate_EF : distancia_maxima)
        quantidade_de_andares += predio.andares.length

        distancia_interna += predio.dist_interna
        
        if(!tem_cftv){
            tem_cftv = predio.cftv_pts != 0
        }
        if (!tem_voip) {
           tem_voip = predio.voip_pts != 0
        }

        pontos_de_telecom += predio.tel_pts
        pontos_de_cftv += predio.cftv_pts
        pontos_de_voip += predio.voip_pts


    });

    if(tem_backbone_lvl_1 || distancia_interna != 0){
        quantidade_de_fibras += 4
        quantidade_de_fibras += tem_cftv ? 4 : 0
        quantidade_de_fibras += tem_voip ? 4 : 0
    }
    let backbone_lvl_1 = {
        dist_predios: distancia_entre_predios, 
        velocidade: $("#vel_back_ext")[0].value, 
        dist_max: distancia_maxima, 
        qnt_fibras: quantidade_de_fibras,
        qnt_predios: quantidade_de_predios
    }
    let backbone_lvl_2 = {
        dist_interna: distancia_interna, 
        velocidade: $("#vel_back_int")[0].value, 
        qnt_fibras: quantidade_de_fibras,
    }
    let racks_PA = {
        n_pts_TT:  pontos_de_telecom * 2 - pontos_de_cftv - pontos_de_voip, 
        n_fibras: 0
    }
    let malha_horizontal_TT = {
        tel_pts: pontos_de_telecom, 
        cftv_pts: pontos_de_cftv, 
        voip_pts: pontos_de_voip, 
        dist_media: $("#dist_media_malha_horizontal")[0].value
    }

    calcula_materiais_back_lvl_1(backbone_lvl_1)
    calcula_materiais_back_lvl_2(backbone_lvl_2, predios)
    console.log(materiais_back_lvl_1)
    console.log(materiais_back_lvl_2)
    calcula_materiais_malha_horizontal(malha_horizontal_TT)
    
    //console.log(materiais_malha_horizontal)
}

function calcula_materiais_back_lvl_1(info) {
    let tecnologia = {
        padrao_transmissao: '',
        tipo_fibra: '',
        nucleo_fibra: ''
    }
    if(info.velocidade == '1000'){
        if(info.dist_max <= 260){
                tecnologia.padrao_transmissao = "1000Base-SX"
                tecnologia.tipo_fibra = "MM"
                tecnologia.nucleo_fibra = "62,5x125"
        } else if(info.dist_max <= 500) {
                tecnologia.padrao_transmissao = "1000Base-SX"
                tecnologia.tipo_fibra = "MM"
                tecnologia.nucleo_fibra = "50x125"
        } else if(info.dist_max <= 750){
                tecnologia.padrao_transmissao = "1000Base-LX"
                tecnologia.tipo_fibra = "MM"
                tecnologia.nucleo_fibra = "50x125"
        }else if(info.dist_max <= 3000){
                tecnologia.padrao_transmissao = "1000Base-LX"
                tecnologia.tipo_fibra = "SM"
                tecnologia.nucleo_fibra = "9x125"
        }
    } else if(info.velocidade == '10000'){
        if(info.dist_max <= 300){
                tecnologia.padrao_transmissao = "10GBase-SR"
                tecnologia.tipo_fibra = "SM"
                tecnologia.nucleo_fibra = "9x125"
        }else if(info.dist_max <= 10000){
                tecnologia.padrao_transmissao = "10GBase-LR"
                tecnologia.tipo_fibra = "SM"
                tecnologia.nucleo_fibra = "9x125"
        }else if(info.dist_max <= 40000){
                tecnologia.padrao_transmissao = "10GBase-ER"
                tecnologia.tipo_fibra = "SM"
                tecnologia.nucleo_fibra = "9x125"    
        }
    } else {
        return 
    }

    using_materiais_back_lvl_1[0].quantidade = info.qnt_predios;
    materiais_back_lvl_1[1].quantidade = info.qnt_predios;
    materiais_back_lvl_1[2][tecnologia.tipo_fibra][tecnologia.nucleo_fibra].quantidade = info.qnt_fibras * info.qnt_predios;
    materiais_back_lvl_1[3][tecnologia.tipo_fibra][tecnologia.nucleo_fibra].quantidade = info.qnt_fibras * info.qnt_predios / 2;
    materiais_back_lvl_1[4][tecnologia.tipo_fibra][tecnologia.nucleo_fibra].quantidade = info.qnt_fibras * info.qnt_predios / 2;
    //O 5 é terminadar óptico, backbone lvl 1 n leva TO
    materiais_back_lvl_1[6][tecnologia.tipo_fibra][tecnologia.nucleo_fibra]['Loose'].quantidade = info.dist_predios * 1.2;
    materiais_back_lvl_1[6].quantidade_de_fibras = info.qnt_fibras

    return tecnologia;
}
function calcula_materiais_back_lvl_2(info, predios) {
    let tecnologia = {
        padrao_transmissao: '',
        tipo_fibra: '',
        nucleo_fibra: ''
    }
    if(info.velocidade == '1000'){
        if(info.dist_interna <= 260){
                tecnologia.padrao_transmissao = "1000Base-SX"
                tecnologia.tipo_fibra = "MM"
                tecnologia.nucleo_fibra = "62,5x125"
        } else if(info.dist_interna <= 500) {
                tecnologia.padrao_transmissao = "1000Base-SX"
                tecnologia.tipo_fibra = "MM"
                tecnologia.nucleo_fibra = "50x125"
        } else if(info.dist_interna <= 750){
                tecnologia.padrao_transmissao = "1000Base-LX"
                tecnologia.tipo_fibra = "MM"
                tecnologia.nucleo_fibra = "50x125"
        }else if(info.dist_interna <= 3000){
                tecnologia.padrao_transmissao = "1000Base-LX"
                tecnologia.tipo_fibra = "SM"
                tecnologia.nucleo_fibra = "9x125"
        }
    } else if(info.velocidade == '10000'){
        if(info.dist_interna <= 300){
                tecnologia.padrao_transmissao = "10GBase-SR"
                tecnologia.tipo_fibra = "SM"
                tecnologia.nucleo_fibra = "9x125"
        }else if(info.dist_interna <= 10000){
                tecnologia.padrao_transmissao = "10GBase-LR"
                tecnologia.tipo_fibra = "SM"
                tecnologia.nucleo_fibra = "9x125"
        }else if(info.dist_interna <= 40000){
                tecnologia.padrao_transmissao = "10GBase-ER"
                tecnologia.tipo_fibra = "SM"
                tecnologia.nucleo_fibra = "9x125"    
        }
    } else {
        return
    }
    let DIO = 0
    let acessorios = 0
    let pigtais = 0
    let acopladores = 0
    let cordao = 0
    let to = 0

    predios.forEach(predio => {
        let numero_de_fibras_na_seq = (predio.andares.length - 1) * info.qnt_fibras 
        DIO += Math.ceil(numero_de_fibras_na_seq / 24, 1)
        pigtais += (info.qnt_fibras * (predio.andares.length - 1)) * 2
        acopladores += numero_de_fibras_na_seq / 2
        cordao += numero_de_fibras_na_seq / 2
        to += predio.andares.length - 1
        acessorios += predio.andares.length - 1
    });

    materiais_back_lvl_2[0].quantidade = DIO
    materiais_back_lvl_2[1].quantidade = acessorios
    materiais_back_lvl_2[2][tecnologia.tipo_fibra][tecnologia.nucleo_fibra].quantidade = pigtais
    materiais_back_lvl_2[3][tecnologia.tipo_fibra][tecnologia.nucleo_fibra].quantidade = acopladores
    materiais_back_lvl_2[4][tecnologia.tipo_fibra][tecnologia.nucleo_fibra].quantidade = cordao
    materiais_back_lvl_2[5].fibras[info.qnt_fibras].quantidade = to
    materiais_back_lvl_2[6][tecnologia.tipo_fibra][tecnologia.nucleo_fibra]['Tigth Buffer'].quantidade = (info.dist_interna * 1.2)
    materiais_back_lvl_2[6].quantidade_de_fibras = info.qnt_fibras
    
}
function calcula_materiais_malha_horizontal(info) {
    
}

function pega_predios() {
    let predios = [];  
    for(let i = 0; i < $(".predio").length; i++){
        let predio_atual = $(".predio")[i].id;
        let andares = pega_andares(predio_atual);
        let dist_EF = isNaN(parseInt($("#" + predio_atual + " input[name=dist_ate_ef]")[0].value)) ? 0 : $("#" + predio_atual + " input[name=dist_ate_ef]")[0].value 
        let predio = {
            id : predio_atual,
            andares : andares[0],
            dist_ate_EF: dist_EF,
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
        let numero_andar = parseInt(andar_atual.slice(15));
        let pontos_de_telecom = parseInt($("#" + andar_atual + " input[name=tel_pts")[0].value)
        let pontos_de_cftv = parseInt($("#" + andar_atual + " input[name=cftv_pts")[0].value)
        let pontos_de_voip = parseInt($("#" + andar_atual + " input[name=voip_pts")[0].value)
        let andar = {
            id: andar_atual.slice(9),
            tel_pts: isNaN(pontos_de_telecom) ? 0 : pontos_de_telecom,
            cftv_pts: isNaN(pontos_de_cftv) ? 0 : pontos_de_cftv,
            voip_pts: isNaN(pontos_de_voip) ? 0 : pontos_de_voip,
            tem_seq: $("#" + andar_atual + " input[name="+ predio +"_seq")[0].checked,
            distancia_a_seq: andar_atual.slice(9) == "andar_1" ? 0 : numero_andar * 5 + 5
        }
        distancia_interna += andar.distancia_a_seq;
        andares.push(andar);
    }
    var resposta = [andares, distancia_interna]
    return resposta;
}