$("#add_andar").on("click", (e) => { 
    $.ajax({
        url:"../View/Containers/projeto.html",
        dataType: "html"
    }).done((layout) => {
        let projeto = layout;
        $("#projetos").append(projeto);
    })
})