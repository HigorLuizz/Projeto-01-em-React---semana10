import CardList from "../cardlist/CardList";
import Filter from "../filter/Filter";
import Summary from "../summary/Summary";
import TipCard from "../tipcard/TipCard";
import { useTips } from "../../contexts/TipsContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function MainContent() {
  const {tipList} = useTips()
  const {theme} = useTheme()
  return (
    <div id="right"
    className={theme==='LightMode'? 'LightModeMain':'DarkModeMain'}>
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
