import { GameAttribute } from "../../model/GameAttribute";
import { getFieldValue } from "./actionForField";

export default (data:any): GameAttribute[] =>{
    let arr: GameAttribute[] = []
    if(!!data['game']){
        const {game}= data;
        let oldAction = getFieldValue('game');
        for(const keyName in game){
            if(oldAction[keyName] != 1){
                let isReject = oldAction[keyName] == -1;
                arr.push({
                    keyName: keyName,
                    value: data['game'][keyName],
                    isReject: oldAction[keyName]??null,
                })
            }
        }
    }

    return arr;
}