import CardList from "../cardlist/CardList";
import Filter from "../filter/Filter";
import Summary from "../summary/Summary";
import TipCard from "../tipcard/TipCard";

export default function MainContent({ tipList }) {
  return (
    <div id="right">
      <Summary />
      <Filter />
      <CardList>
        <div id="cards">
            {tipList.map(tip=>{
                return(
                    <TipCard
                        key={tip.id}
                        id={tip.id}
                        titulo={tip.titulo}
                        linguagen={tip.linguagem}
                        categoria={tip.categoria}
                        descricao={tip.descricao}
                    />
                )                   
            })}
        </div>
      </CardList>
    </div>
  );
}
