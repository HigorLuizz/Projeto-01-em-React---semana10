export default function TipCard({titulo,linguagen,categoria,descricao}){
    return (
        <div className='card'>
            <h4>{titulo}</h4>
            <p>Linguagem/Skill:{linguagen}</p>
            <p>Categoria: {categoria}</p>
            <p>{descricao}</p>
            <button>Remover Dica</button>
            <button>Editar Dica</button>
        </div>
    )
}