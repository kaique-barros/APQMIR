numero_de_andares = 1;

adicionar_andar();

$("#add_andar").on("click", adicionar_andar);

function adicionar_andar(){ 
    $.ajax({
        url:"../View/Containers/andar.html",
        dataType: "html"})
            .done((layout) => {
            let andar = layout;
            $("#projetos").append(andar);
            atualizar_numero_andares();
    })
};

$("#is_TIPO").on("click", (e) => {
    console.log("teste");
    
})

function atualizar_numero_andares(){
    let andares = document.getElementsByClassName("andar");
    for (let i = 0; i < andares.length; i++) {
        let andar = andares[i];
        andar.id = "andar_" + i
        $("#andar_"+i+" > h1")[0].innerHTML = "ANDAR " + (i + 1); // coloca o numero do andar
    }
}