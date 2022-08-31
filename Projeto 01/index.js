var todasDicas = []
class Dicas{
    titulo;
    linguagem;
    categoria;
    descricao;

    constructor(titulo, linguagem, categoria, descricao, video, id){
        this.titulo = titulo;
        this.linguagem = linguagem;
        this.categoria = categoria;
        this.descricao = descricao;
        this.id = id;
        this.video = video;
    }
}
    contTotais=0;
    contFront=0;
    contBack=0;
    contFull=0;
    contSoft=0;
    let titulo = document.getElementById("title")
    let linguagem = document.getElementById("lenguage")
    let categoria = document.getElementById("slct")
    let descricao = document.getElementById("describe")
    let divCards = document.getElementById("cards")
    let video = document.getElementById("video")
    
function clickSave(){
    if ((titulo.value == '')||(linguagem.value == '')||(descricao.value == '')){
        alert("Os campos 'Título', 'Linguagem' e 'Descrição' devem ser preenchidos obrigatóriamente!")
    }else{
        
    //----------------------------------------------------------------------------------------------
    //Criando os cards com as informações preenchidas no formulário
        const dica= new Dicas(titulo.value, linguagem.value,categoria.value, descricao.value, video.value)
        //Alojando os dados do LocalStorage
        if (localStorage.meuArr){
            todasDicas = JSON.parse(localStorage.getItem('meuArr'))
        }
        todasDicas.push(dica)
        localStorage.meuArr = JSON.stringify(todasDicas)
        
        console.log(todasDicas)
        contTotais=0;
        contFront=0;
        contBack=0;
        contFull=0;
        contSoft=0;
        
        for (const i in todasDicas) {
            todasDicas[i].id = i
            contTotais++
            document.getElementById("total").innerHTML = "Total "+contTotais
            if (todasDicas[i].categoria == "FrontEnd"){
                contFront++
                document.getElementById("front").innerHTML = "FrontEnd "+contFront
            }else if(todasDicas[i].categoria == "BackEnd"){
                contBack++
                document.getElementById("back").innerHTML = "BackEnd "+contBack
            }else if(todasDicas[i].categoria == "FullStack"){
                contFull++
                document.getElementById("full").innerHTML = "FullStack "+contFull
            }else if(todasDicas[i].categoria == "SoftSkills"){
                contSoft++
                document.getElementById("soft").innerHTML = "SoftSkills "+contSoft
            }
            
        }
        alert("Dica salva com sucesso!")     
    }

    }

function showCards(){
    let divCards = document.getElementById("cards")
    divCards.innerHTML = ""
    //Pegando o Array pelo local storage

    todasDicas = JSON.parse(localStorage.getItem('meuArr'))
    contTotais=0;
    contFront=0;
    contBack=0;
    contFull=0;
    contSoft=0;
    for (let i in todasDicas) {
        contTotais++
        document.getElementById("total").innerHTML = "Total \n"+contTotais
        if (todasDicas[i].categoria == "FrontEnd"){
            contFront++
            document.getElementById("front").innerHTML = "FrontEnd "+contFront
        }else if(todasDicas[i].categoria == "BackEnd"){
            contBack++
            document.getElementById("back").innerHTML = "BackEnd "+contBack
        }else if(todasDicas[i].categoria == "FullStack"){
            contFull++
            document.getElementById("full").innerHTML = "FullStack "+contFull
        }else if(todasDicas[i].categoria == "SoftSkills"){
            contSoft++
            document.getElementById("soft").innerHTML = "SoftSkills "+contSoft
        }
        if (localStorage.meuArr){
            todasDicas = JSON.parse(localStorage.getItem('meuArr'))
        }
        const card = document.createElement("div")
        card.classList.add('card');
            card.innerHTML += `<h4>${todasDicas[i].titulo}</h4>`
            card.innerHTML += `Linguagem/Skill: ${todasDicas[i].linguagem}<br>`
            card.innerHTML += `Categoria: ${todasDicas[i].categoria}<br>`
            card.innerHTML += todasDicas[i].descricao+"<br>"
            divCards.append(card)
        //----------------------------------------------------------------------------------------------
        //Adicionando o contador nos cards de contador
            
        //----------------------------------------------------------------------------------------------
            
            console.log(todasDicas)
        //----------------------------------------------------------------------------------------------
        //Adicionando botão de remover dentro do card
            var btn = document.createElement('BUTTON');
            var lblBtn = document.createTextNode("Remover Dica");
            btn.appendChild(lblBtn);
            card.append(btn)
            btn.onclick = function(){
                var querExcluir = window.confirm("Deseja mesmo Excluir essa dica? ")
                if (querExcluir == true){
                    contTotais--
                    document.getElementById("total").innerHTML = "Total "+contTotais
                    if(todasDicas[i].categoria == "FrontEnd"){
                        contFront--
                        document.getElementById("front").innerHTML = "FrontEnd "+contFront
                    }else if(todasDicas[i].categoria == "BackEnd"){
                        contBack--
                        document.getElementById("back").innerHTML = "BackEnd "+contBack
                    }else if(todasDicas[i].categoria == "FullStack"){
                        contFull--
                        document.getElementById("full").innerHTML = "FullStack "+contFull
                    }else if(todasDicas[i].categoria == "SoftSkills"){
                        contSoft--
                        document.getElementById("soft").innerHTML = "SoftSkills "+contSoft
                    }
                    card.remove()
                    todasDicas[i].id = i
                    function removerPorId2(array, id) {
                        return array.filter(function(el) { 
                          return el.id !== id; 
                        });
                      }
                      todasDicas = removerPorId2(todasDicas,i)
                      localStorage.meuArr = JSON.stringify(todasDicas)
                      console.log(todasDicas)
                    console.log(i)
                    console.log(todasDicas)
                    alert("Dica removida com sucesso")
                }
            }
        //----------------------------------------------------------------------------------------------
        //Adicionando botão de editar dentro do card
            var btn2 = document.createElement('BUTTON');
            var lblBtn2 = document.createTextNode("Editar Dica");
            btn2.appendChild(lblBtn2);
            card.append(btn2)
            btn2.onclick = function (){
                todasDicas[i].titulo = window.prompt('Edite o Titulo: ')
                todasDicas[i].linguagem = window.prompt('Edite a linguagem: ')
                var opc = window.prompt('Qual a categoria?\nDigite:\n1 para FrontEnd\n2 para BackEnd\n3 para FullStack\n4 para SoftSkills')
                if (opc == 1){
                    todasDicas[i].categoria = 'FrontEnd'
                }else if(opc == 2 ){
                    todasDicas[i].categoria = 'BackEnd'
                }else if(opc == 3){
                    todasDicas[i].categoria = "FullStack"
                }else if(opc == 4){
                    todasDicas[i].categoria = "SoftSkills"
                }
                todasDicas[i].descricao = window.prompt('Edite a descrição: ')
                todasDicas[i].video = window.prompt('Edite a URL do vídeo: ')
                if (todasDicas[i].video == null){
                    todasDicas[i].video = ""
                }
                alert('Edição salva com Sucesso!\nPara ver as informações editadas na tela, clique em "Carregar Dicas"')
                localStorage.meuArr = JSON.stringify(todasDicas)
            }
        //----------------------------------------------------------------------------------------------
        //Adicionando botão de vídeo dentro do card
            if(todasDicas[i].video != ""){
                var btn3 = document.createElement('BUTTON');
                var lblBtn3 = document.createTextNode("Vídeo");
                btn3.appendChild(lblBtn3);
                card.append(btn3)
                btn3.onclick = function(){
                    window.open(todasDicas[i].video)
                }

            }
    }
    
}
//----------------------------------------------------------------------------------------------
//botão de limpar formulário
function limparFormulario(){
    parent.document.getElementById("form").reset();
}
//----------------------------------------------------------------------------------------------
//botão de pesquisar por uma barra de pesquisa
function pesquisar(){
    let divCards = document.getElementById("cards")
    divCards.innerHTML = ""
    var barraPesquisa = document.getElementById('txtBusca')
    todasDicas = JSON.parse(localStorage.getItem('meuArr'))
    for (const i in todasDicas) {
        if (todasDicas[i].titulo.match(barraPesquisa.value)){
            const card = document.createElement("div")
            card.classList.add('card');
            card.innerHTML += `<h4>${todasDicas[i].titulo}</h4>`
            card.innerHTML += `Linguagem/Skill: ${todasDicas[i].linguagem}<br>`
            card.innerHTML += `Categoria: ${todasDicas[i].categoria}<br>`
            card.innerHTML += todasDicas[i].descricao+"<br>"
            divCards.append(card)
            var btn = document.createElement('BUTTON');
            var lblBtn = document.createTextNode("Remover Dica");
            btn.appendChild(lblBtn);
            card.append(btn)
            btn.onclick = function(){
                var querExcluir = window.confirm("Deseja mesmo Excluir essa dica? ")
                if (querExcluir == true){
                    contTotais--
                    document.getElementById("total").innerHTML = "Total "+contTotais
                    if(todasDicas[i].categoria == "FrontEnd"){
                        contFront--
                        document.getElementById("front").innerHTML = "FrontEnd "+contFront
                    }else if(todasDicas[i].categoria == "BackEnd"){
                        contBack--
                        document.getElementById("back").innerHTML = "BackEnd "+contBack
                    }else if(todasDicas[i].categoria == "FullStack"){
                        contFull--
                        document.getElementById("full").innerHTML = "FullStack "+contFull
                    }else if(todasDicas[i].categoria == "SoftSkills"){
                        contSoft--
                        document.getElementById("soft").innerHTML = "SoftSkills "+contSoft
                    }
                    card.remove()
                    todasDicas[i].id = i
                    function removerPorId2(array, id) {
                        return array.filter(function(el) { 
                          return el.id !== id; 
                        });
                      }
                      todasDicas = removerPorId2(todasDicas,i)
                      localStorage.meuArr = JSON.stringify(todasDicas)
                      console.log(todasDicas)
                    console.log(i)
                    console.log(todasDicas)
                    alert("Dica removida com sucesso")
                }
            }
        //----------------------------------------------------------------------------------------------
        //Adicionando botão de editar dentro do card
            var btn2 = document.createElement('BUTTON');
            var lblBtn2 = document.createTextNode("Editar Dica");
            btn2.appendChild(lblBtn2);
            card.append(btn2)
            btn2.onclick = function (){
                todasDicas[i].titulo = window.prompt('Edite o Titulo: ')
                todasDicas[i].linguagem = window.prompt('Edite a linguagem: ')
                var opc = window.prompt('Qual a categoria?\nDigite:\n1 para FrontEnd\n2 para BackEnd\n3 para FullStack\n4 para SoftSkills')
                if (opc == 1){
                    todasDicas[i].categoria = 'FrontEnd'
                }else if(opc == 2 ){
                    todasDicas[i].categoria = 'BackEnd'
                }else if(opc == 3){
                    todasDicas[i].categoria = "FullStack"
                }else if(opc == 4){
                    todasDicas[i].categoria = "SoftSkills"
                }
                todasDicas[i].descricao = window.prompt('Edite a descrição: ')
                todasDicas[i].video = window.prompt('Edite a URL do vídeo: ')
                if (todasDicas[i].video == null){
                    todasDicas[i].video = ""
                }
                alert('Edição salva com Sucesso!\nPara ver as informações editadas na tela, clique em "Carregar Dicas"')
                localStorage.meuArr = JSON.stringify(todasDicas)
            }
        //----------------------------------------------------------------------------------------------
        //Adicionando botão de vídeo dentro do card
            if(todasDicas[i].video != ""){
                var btn3 = document.createElement('BUTTON');
                var lblBtn3 = document.createTextNode("Vídeo");
                btn3.appendChild(lblBtn3);
                card.append(btn3)
                btn3.onclick = function(){
                    window.open(todasDicas[i].video)
                }

            }
        }
    }
}
function darkMode(){
    var main = document.getElementById('main')
    var busca = document.getElementById('divBusca')
    main.style.backgroundColor = 'black';
    main.style.color = 'white'
    busca.style.backgroundColor = '#404147e7'
    var left = document.getElementById('left')
    left.style.backgroundColor = "grey"
    var right = document.getElementById('cards')
    right.style.backgroundColor = "grey"
}
function lightMode(){
    var main = document.getElementById('main')
    main.style.backgroundColor = '#c9d2e6ef';
    main.style.color = 'black'
    var left = document.getElementById('left')
    left.style.backgroundColor = "#b2cacab4"
    var right = document.getElementById('cards')
    right.style.backgroundColor = "#b2cacab4"
}