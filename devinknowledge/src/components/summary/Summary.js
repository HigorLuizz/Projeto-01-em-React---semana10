import SummaryCard from "../summarycard/SummaryCard";

export default function Summary(){
    return (
        <div id="conts">
            <SummaryCard id ='total' title='Total' count={0}/>
            <SummaryCard id ='front' title='FrontEnd' count={0}/>
            <SummaryCard id ='back' title='BackEnd' count={0}/>
            <SummaryCard id ='full' title='FullStack' count={0}/>
            <SummaryCard id ='soft' title='SoftSkills' count={0}/>
          </div>
    )
}