function calcular() {
    let backbone_lvl_1 = {
        dist_predios: 0, 
        velocidade:0, 
        dist_max:0, 
        qnt_fibras:0
    }
    let backbone_lvl_2_PP = {
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
    let tel_pts;
    let cftv_pts;
    let voip_pts;
    let predios = [];
    
    for(let i = 0; i < $(".predio").length; i++){
        let info = $(".predio")[i];
        console.log(info);
        let predio = {
            id : info.id,
            andares : null,
            dist_ate_EF : $(id + " > input[name=dist_ate_ef")
        }
    }
}