import { GameAttribute } from "../../model/GameAttribute";

export default (data: any): GameAttribute[]=> {
    let arr: GameAttribute[] = []
    if(!!data['home']){
        const {game}= data;
        
        for(let key in game){
            arr.push({
                keyName: key,
                value: game[key]
            })
        }
    }

    return arr;
}