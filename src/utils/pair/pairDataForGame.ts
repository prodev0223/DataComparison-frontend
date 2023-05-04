import { GameAttribute } from "../../model/GameAttribute";

export default (data:any):GameAttribute[] =>{
    let arr: GameAttribute[] = []
    if(!!data['game']){
        const {game}= data;
        for(var key in game){
            arr.push({
                keyName: key,
                value: game[key]
            })
        }
    }

    return arr;
}