import { Team } from "../../model/Team";
import { getFieldValue, getSubFieldValue } from "./actionForField";

const pairDataForTeam = (data:any ): Team[] =>{
    let keys = ['home','away'];
    let teams: Team[] = [];
    keys.forEach(key=>{
        console.log(key, getSubFieldValue('team',data[key]['id'] ), getFieldValue('team'))
        let isReject = getSubFieldValue('team',data[key]['id'] )??0
        if(isReject>=0){
            let team = {
                id: data[key]['id'],
                name:key,
                rushAttempts: data[key]['rushAttempts']?? 0,
                rushTds: data[key]['rushTds']??0,
                rushYdsGained: data[key]['rushYdsGained']??0,
                rec: data[key]['rec']??0,
                receivingYards: data[key]['receivingYards']??0,
                isReject:isReject,
            }

            teams.push(team);
        }
    })
    return teams;
}
export default pairDataForTeam;