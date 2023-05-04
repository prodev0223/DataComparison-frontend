import { GameAttribute } from "../../model/GameAttribute";

export default (data:any):GameAttribute[] =>{
    let arr: GameAttribute[] = []
    for(let key in data){
        if(key ==='home' || key==='away'){
            for(let keyName in data[key]){
                arr.push({
                    keyName: keyName,
                    value: data[key][keyName]
                })
            }
        }
    }

    return arr;
}