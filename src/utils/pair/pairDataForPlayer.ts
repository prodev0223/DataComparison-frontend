import { Player } from "../../model/Player";

export default (players:any): Player[] =>{
    var arr: Player[] = [];
    players.forEach((player: Player) => {
        arr.push(player);
    })

    return arr;
}