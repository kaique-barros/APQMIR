function inserir_tabela_backbone(tec_back_lvl_1, tec_back_lvl_2) {
    $.ajax({
        url:"../View/Containers/tabelaBackbone.html",
        dataType: "html"})
            .done((layout) => {
                $("#tabelas").append(layout)
                if(tec_back_lvl_2 !== undefined){
                    $('#tecnologiaBackLvl2').html(`Backbone nivel 2 -> Padrão de Transmissão: ${tec_back_lvl_2.padrao_transmissao} Tipo de Fibra: ${tec_back_lvl_2.tipo_fibra} Núcleo da Fibra: ${tec_back_lvl_2.nucleo_fibra}`)
                }
                if(tec_back_lvl_1 !== undefined){
                    $('#tecnologiaBackLvl1').html(`Backbone nivel 1 -> Padrão de Transmissão: ${tec_back_lvl_1.padrao_transmissao} Tipo de Fibra: ${tec_back_lvl_1.tipo_fibra} Núcleo da Fibra: ${tec_back_lvl_1.nucleo_fibra}`)
                }

                let linha = document.createElement("tr")
                
                let coluna_nome = document.createElement('th')
                let coluna_unid = document.createElement('th')
                let coluna_qnt = document.createElement('th')
                
                let tabela = $("#tabelaBackbone tbody")
                
                //if só para encurtar a visualização no vs code - adiciona as linhas na tabela de backbone
                if(true){                
                    //DIOS
                    coluna_nome.innerHTML = materiais_back_total[0].nome
                    coluna_unid.innerHTML = materiais_back_total[0].unidade
                    coluna_qnt.innerHTML = materiais_back_total[0].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Caixas de emenda
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[1].nome
                    coluna_unid.innerHTML = materiais_back_total[1].unidade
                    coluna_qnt.innerHTML = materiais_back_total[1].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Pigtail MM 50
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[2].nome + " MM laranja 50x125"
                    coluna_unid.innerHTML = materiais_back_total[2].unidade
                    coluna_qnt.innerHTML = materiais_back_total[2]['MM']['50x125'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Pigtail MM 62
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[2].nome + " MM laranja 62,5x125"
                    coluna_unid.innerHTML = materiais_back_total[2].unidade
                    coluna_qnt.innerHTML = materiais_back_total[2]['MM']['62,5x125'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Pigtail SM
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[2].nome + " SM azul 9x125"
                    coluna_unid.innerHTML = materiais_back_total[2].unidade
                    coluna_qnt.innerHTML = materiais_back_total[2]['SM']['9x125'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Acoplador MM 50
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[3].nome + " MM laranja 50x125"
                    coluna_unid.innerHTML = materiais_back_total[3].unidade
                    coluna_qnt.innerHTML = materiais_back_total[3]['MM']['50x125'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Acoplador MM 62
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[3].nome + " MM laranja 62,5x125"
                    coluna_unid.innerHTML = materiais_back_total[3].unidade
                    coluna_qnt.innerHTML = materiais_back_total[3]['MM']['62,5x125'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Acoplador MM 9
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[3].nome + " SM azul 9x125"
                    coluna_unid.innerHTML = materiais_back_total[3].unidade
                    coluna_qnt.innerHTML = materiais_back_total[3]['SM']['9x125'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cordão óptico MM 50
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[4].nome + " MM laranja 50x125"
                    coluna_unid.innerHTML = materiais_back_total[4].unidade
                    coluna_qnt.innerHTML = materiais_back_total[4]['MM']['50x125'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cordão óptico MM 62
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[4].nome + " MM laranja 62,5x125"
                    coluna_unid.innerHTML = materiais_back_total[4].unidade
                    coluna_qnt.innerHTML = materiais_back_total[4]['MM']['62,5x125'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cordão óptico MM 9
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[4].nome + " SM azul 9x125"
                    coluna_unid.innerHTML = materiais_back_total[4].unidade
                    coluna_qnt.innerHTML = materiais_back_total[4]['SM']['9x125'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Terminador óptico 4
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[5].nome + " 4 Fibras"
                    coluna_unid.innerHTML = materiais_back_total[5].unidade
                    coluna_qnt.innerHTML = materiais_back_total[5].fibras[4].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Terminador óptico 6
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[5].nome + " 6 Fibras"
                    coluna_unid.innerHTML = materiais_back_total[5].unidade
                    coluna_qnt.innerHTML = materiais_back_total[5].fibras[6].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Terminador óptico 8
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[5].nome + " 8 Fibras"
                    coluna_unid.innerHTML = materiais_back_total[5].unidade
                    coluna_qnt.innerHTML = materiais_back_total[5].fibras[8].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Terminador óptico 12
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[5].nome + " 12 Fibras"
                    coluna_unid.innerHTML = materiais_back_total[5].unidade
                    coluna_qnt.innerHTML = materiais_back_total[5].fibras[12].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cabo optico SM loose
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[6].nome + " SM 9x125 Loose " + materiais_back_total[6].quantidade_de_fibras + " Fibras"
                    coluna_unid.innerHTML = materiais_back_total[6].unidade
                    coluna_qnt.innerHTML = materiais_back_total[6]['SM']['9x125']['Loose'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cabo optico SM loose autosustentavel
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[6].nome + " SM 9x125 Loose autosustentável " + materiais_back_total[6].quantidade_de_fibras + " Fibras"
                    coluna_unid.innerHTML = materiais_back_total[6].unidade
                    coluna_qnt.innerHTML = materiais_back_total[6]['SM']['9x125']['Loose autosustentável'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cabo optico SM tight Buffer
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[6].nome + " SM 9x125 Tigth Buffer " + materiais_back_total[6].quantidade_de_fibras + " Fibras"
                    coluna_unid.innerHTML = materiais_back_total[6].unidade
                    coluna_qnt.innerHTML = materiais_back_total[6]['SM']['9x125']['Tigth Buffer'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cabo optico MM 50x125 loose
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[6].nome + " MM 50x125 Loose " + materiais_back_total[6].quantidade_de_fibras + " Fibras"
                    coluna_unid.innerHTML = materiais_back_total[6].unidade
                    coluna_qnt.innerHTML = materiais_back_total[6]['MM']['50x125']['Loose'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cabo optico MM loose autosustentavel
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[6].nome + " MM 50x125 Loose autosustentável " + materiais_back_total[6].quantidade_de_fibras + " Fibras"
                    coluna_unid.innerHTML = materiais_back_total[6].unidade
                    coluna_qnt.innerHTML = materiais_back_total[6]['MM']['50x125']['Loose autosustentável'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cabo optico MM tight Buffer
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[6].nome + " MM 50x125 Tigth Buffer " + materiais_back_total[6].quantidade_de_fibras + " Fibras"
                    coluna_unid.innerHTML = materiais_back_total[6].unidade
                    coluna_qnt.innerHTML = materiais_back_total[6]['MM']['50x125']['Tigth Buffer'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cabo optico MM 62,5x125 loose
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[6].nome + " MM 62,5x125 Loose " + materiais_back_total[6].quantidade_de_fibras + " Fibras"
                    coluna_unid.innerHTML = materiais_back_total[6].unidade
                    coluna_qnt.innerHTML = materiais_back_total[6]['MM']['62,5x125']['Loose'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cabo optico MM loose autosustentavel
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[6].nome + " MM 62,5x125 Loose autosustentável " + materiais_back_total[6].quantidade_de_fibras + " Fibras"
                    coluna_unid.innerHTML = materiais_back_total[6].unidade
                    coluna_qnt.innerHTML = materiais_back_total[6]['MM']['62,5x125']['Loose autosustentável'].quantidade

                    linha.append(coluna_nome)   
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                    //Cabo optico MM tight Buffer
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = materiais_back_total[6].nome + " MM 62,5x125 Tigth Buffer " + materiais_back_total[6].quantidade_de_fibras + " Fibras"
                    coluna_unid.innerHTML = materiais_back_total[6].unidade
                    coluna_qnt.innerHTML = materiais_back_total[6]['MM']['62,5x125']['Tigth Buffer'].quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                }

            })
}

function inserir_tabela_malha_horiontal(racks) {
    $.ajax({
        url:"../View/Containers/tabelaMH.html",
        dataType: 'html'})
        .done((layout => {
            $('#tabelas').append(layout)

            let linha = document.createElement("tr")
                
            let coluna_nome = document.createElement('th')
            let coluna_unid = document.createElement('th')
            let coluna_qnt = document.createElement('th')
                
            let tabela = $("#tabelaMH tbody")

            //if só para encurtar a visualização no vs code - adiciona as linhas na tabela malha horizontal
            if (true) {
                // Tomadas
                coluna_nome.innerHTML = materiais_malha_horizontal[0].nome
                coluna_unid.innerHTML = materiais_malha_horizontal[0].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[0].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //Patch Cord azul
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[1].nome + ' Categoria 6 Azul'
                coluna_unid.innerHTML = materiais_malha_horizontal[1].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[1].categoria['6']['azul'].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //Patch Cord da cor do teto
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[1].nome + ' Categoria 6 Da mesma cor do teto'
                coluna_unid.innerHTML = materiais_malha_horizontal[1].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[1].categoria['6']['a mesma do teto'].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //Espelho de conexão 2x4
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[2].nome + ' 2x4'
                coluna_unid.innerHTML = materiais_malha_horizontal[2].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[2].tamanho['2x4'].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //Espelho de conexão 4x4
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[2].nome + ' 4x4'
                coluna_unid.innerHTML = materiais_malha_horizontal[2].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[2].tamanho['4x4'].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //Cabo utp rígido 5e
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[4].nome + ' azul 5e'
                coluna_unid.innerHTML = materiais_malha_horizontal[4].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[4]['5e'].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }
                
                //Cabo utp rígido 6
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[4].nome + ' azul 6'
                coluna_unid.innerHTML = materiais_malha_horizontal[4].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[4]['6'].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //patch pannel
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[5].nome
                coluna_unid.innerHTML = materiais_malha_horizontal[5].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[5].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //organizador frontal
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[6].nome
                coluna_unid.innerHTML = materiais_malha_horizontal[6].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[6].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //Patch Cable Categoria 6 Azul
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[7].nome + " Categoria 6 Azul"
                coluna_unid.innerHTML = materiais_malha_horizontal[7].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[7].categoria['6'].cor['azul'].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //Patch Cable Categoria 6 Verde
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[7].nome + " Categoria 6 Verde"
                coluna_unid.innerHTML = materiais_malha_horizontal[7].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[7].categoria['6'].cor['verde'].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //Patch Cable Categoria 6 Amarelo
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[7].nome + " Categoria 6 Amarelo"
                coluna_unid.innerHTML = materiais_malha_horizontal[7].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[7].categoria["6"].cor['amarelo'].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                //Patch Cable Categoria 5e Verde
                linha = document.createElement("tr")
                    
                coluna_nome = document.createElement('th')
                coluna_unid = document.createElement('th')
                coluna_qnt = document.createElement('th')

                coluna_nome.innerHTML = materiais_malha_horizontal[7].nome + " Categoria 5e Verde"
                coluna_unid.innerHTML = materiais_malha_horizontal[7].unidade
                coluna_qnt.innerHTML = materiais_malha_horizontal[7].categoria['5e'].cor['verde'].quantidade

                linha.append(coluna_nome)
                linha.append(coluna_unid)
                linha.append(coluna_qnt)

                if(coluna_qnt.innerHTML != 0){
                    tabela.append(linha)
                }

                racks.forEach(rack => {
                    linha = document.createElement("tr")
                    
                    coluna_nome = document.createElement('th')
                    coluna_unid = document.createElement('th')
                    coluna_qnt = document.createElement('th')

                    coluna_nome.innerHTML = `Rack - Tamanho mínimo: ${rack.tamanho}U`
                    coluna_unid.innerHTML = 'unid'
                    coluna_qnt.innerHTML =  rack.quantidade

                    linha.append(coluna_nome)
                    linha.append(coluna_unid)
                    linha.append(coluna_qnt)

                    if(coluna_qnt.innerHTML != 0){
                        tabela.append(linha)
                    }
                });
            }

            inserir_miscelanea_e_rack(racks)
        }))
}

function inserir_miscelanea_e_rack(racks) {
    let linha = document.createElement("tr")
                
    let coluna_nome = document.createElement('th')
    let coluna_unid = document.createElement('th')
    let coluna_qnt = document.createElement('th')
                
    let tabela = $("#tabelaMH tbody")

    //if só para encurtar a visualização no vs code - adiciona as linhas na tabela de malha horizontal
    if(true){
        coluna_nome.innerHTML = materiais_miscelanea[0].nome
        coluna_unid.innerHTML = materiais_miscelanea[0].unidade
        coluna_qnt.innerHTML = materiais_miscelanea[0].quantidade

        linha.append(coluna_nome)
        linha.append(coluna_unid)
        linha.append(coluna_qnt)

        if(coluna_qnt.innerHTML != 0){
            tabela.append(linha)
        }

        //abraçadeiras de velcro
        linha = document.createElement("tr")
                    
        coluna_nome = document.createElement('th')
        coluna_unid = document.createElement('th')
        coluna_qnt = document.createElement('th')

        coluna_nome.innerHTML = materiais_miscelanea[1].nome
        coluna_unid.innerHTML = materiais_miscelanea[1].unidade
        coluna_qnt.innerHTML = materiais_miscelanea[1].quantidade

        linha.append(coluna_nome)
        linha.append(coluna_unid)
        linha.append(coluna_qnt)

        if(coluna_qnt.innerHTML != 0){
            tabela.append(linha)
        }

        //abraçadeiras hellerman    
        linha = document.createElement("tr")
                    
        coluna_nome = document.createElement('th')
        coluna_unid = document.createElement('th')
        coluna_qnt = document.createElement('th')

        coluna_nome.innerHTML = materiais_miscelanea[2].nome
        coluna_unid.innerHTML = materiais_miscelanea[2].unidade
        coluna_qnt.innerHTML = materiais_miscelanea[2].quantidade

        linha.append(coluna_nome)
        linha.append(coluna_unid)
        linha.append(coluna_qnt)

        if(coluna_qnt.innerHTML != 0){
            tabela.append(linha)
        }

        //Filtro de linha
        linha = document.createElement("tr")
                    
        coluna_nome = document.createElement('th')
        coluna_unid = document.createElement('th')
        coluna_qnt = document.createElement('th')

        coluna_nome.innerHTML = materiais_miscelanea[3].nome
        coluna_unid.innerHTML = materiais_miscelanea[3].unidade
        coluna_qnt.innerHTML = materiais_miscelanea[3].quantidade

        linha.append(coluna_nome)
        linha.append(coluna_unid)
        linha.append(coluna_qnt)

        if(coluna_qnt.innerHTML != 0){
            tabela.append(linha)
        }

        //Etiquetas
        linha = document.createElement("tr")
                    
        coluna_nome = document.createElement('th')
        coluna_unid = document.createElement('th')
        coluna_qnt = document.createElement('th')

        coluna_nome.innerHTML = materiais_miscelanea[4].nome
        coluna_unid.innerHTML = materiais_miscelanea[4].unidade
        coluna_qnt.innerHTML = materiais_miscelanea[4].quantidade

        linha.append(coluna_nome)
        linha.append(coluna_unid)
        linha.append(coluna_qnt)

        if(coluna_qnt.innerHTML != 0){
            tabela.append(linha)
        }

        //Bandeja Fixa
        linha = document.createElement("tr")
                    
        coluna_nome = document.createElement('th')
        coluna_unid = document.createElement('th')
        coluna_qnt = document.createElement('th')

        coluna_nome.innerHTML = materiais_miscelanea[5].nome
        coluna_unid.innerHTML = materiais_miscelanea[5].unidade
        coluna_qnt.innerHTML = materiais_miscelanea[5].quantidade

        linha.append(coluna_nome)
        linha.append(coluna_unid)
        linha.append(coluna_qnt)

        if(coluna_qnt.innerHTML != 0){
            tabela.append(linha)
        }

        //Bandeja deslizante
        linha = document.createElement("tr")
                    
        coluna_nome = document.createElement('th')
        coluna_unid = document.createElement('th')
        coluna_qnt = document.createElement('th')

        coluna_nome.innerHTML = materiais_miscelanea[6].nome
        coluna_unid.innerHTML = materiais_miscelanea[6].unidade
        coluna_qnt.innerHTML = materiais_miscelanea[6].quantidade

        linha.append(coluna_nome)
        linha.append(coluna_unid)
        linha.append(coluna_qnt)

        if(coluna_qnt.innerHTML != 0){
            tabela.append(linha)
        }

    }
}