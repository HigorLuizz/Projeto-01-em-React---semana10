import { useState } from "react"
import { useTips } from "../../contexts/TipsContext"
import { useTheme } from "../../contexts/ThemeContext"

export default function SideBar(){
  const {tipList,setTipList} = useTips()
  const {theme} = useTheme()

    const [tip, setTip] = useState({
        id:1,
        titulo:'',
        linguagem:'',
        categoria:'',
        descricao: '',
        video:''
      })

    function clickSave(){
        if ((tip.titulo === '')||(tip.linguagem === '')||(tip.descricao === '')){
            alert("Os campos 'Título', 'Linguagem' e 'Descrição' devem ser preenchidos obrigatóriamente!")
        }else{
            const tipWithID={...tip,id:Math.random()}
            setTipList([
                ...tipList,
                tipWithID
            ])
            alert("Dica salva com sucesso!")     
        }
        
    
        }
        function limparFormulario(){
          return(
            setTip({
              titulo:'',
              linguagem:'',
              categoria:'',
              descricao: '',
              video:''
            })
          )
        }
    return (
        <div 
        id="left"
        className={theme==="LightMode"? 'LightModeLeft':"DarkModeLeft"}>
          <h1>DevinKnowledge </h1>
          <h3>Learn, Code and Save</h3>
          <form id="form">
            <p>Título</p>
            <input
                value={tip.titulo}
                onChange={(e) => {
                    setTip({
                        ...tip,
                        titulo:e.target.value
                    })
                }}
              type="text"
              id="title"
              minlength="8"
              maxlength="64"
              placeholder="Digite o título aqui"
            />
            <p>Linguagem/Skill</p>
            <input
                value={tip.linguagem}
                onChange={(e) =>{
                    setTip({
                        ...tip,
                        linguagem:e.target.value
                    })
                }}
              type="text"
              id="lenguage"
              maxlength="16"
              placeholder="Digite a linguagem aqui"
            />
            <p>Categoria</p>
            <select 
            value={tip.categoria}
            onChange={(e) =>{
                setTip({
                    ...tip,
                    categoria:e.target.value
                })
            }}
            name="select" 
            id="slct">
              <option value="FrontEnd" selected>
                FrontEnd
              </option>
              <option value="BackEnd">BackEnd</option>
              <option value="FullStack">FullStack</option>
              <option value="SoftSkills">SoftSkills</option>
            </select>
            <p>Descrição</p>
            <input
                value={tip.descricao}
                onChange={(e) =>{
                    setTip({
                        ...tip,
                        descricao:e.target.value
                    })
                }}
              type="text"
              id="describe"
              maxlength="512"
              placeholder="Descreva a dica"
            />
            <p>Link para Vídeo no Youtube</p>
            <input
                value={tip.video}
                onChange={(e) =>{
                    setTip({
                        ...tip,
                        video:e.target.value
                    })
                }}
              type="text"
              id="video"
              placeholder="Digite o Link do vídeo aqui"
            />
          </form>
          <div id="btnsForm">
            <button id="clear" onClick={limparFormulario}>
              Limpar
            </button>
            <button id="save" onClick={clickSave}>
              Salvar
            </button>
            <button id="show" onClick="showCards()">
              Carregar Dicas
            </button>
          </div>
        </div>
    )
}