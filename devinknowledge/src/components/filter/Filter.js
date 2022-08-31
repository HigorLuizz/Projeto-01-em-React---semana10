export default function Filter(){
    return (
        <div id="divBusca">
            <input type="text" id="txtBusca" placeholder="Pesquisar..." />
            <button id="search" onclick="pesquisar()">
              Buscar
            </button>
          </div>
    )
}