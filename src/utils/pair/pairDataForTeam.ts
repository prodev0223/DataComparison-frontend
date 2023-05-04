import { GameAttribute } from "../../model/GameAttribute";

export default (data:any, key='home'): GameAttribute[]=> {
    let arr: GameAttribute[] = []
    if(!!data[key]){
        for(let keyName in data[key]){
            arr.push({
                keyName: keyName,
                value: data[key][keyName]
            })
        }
    }

    return arr;
}