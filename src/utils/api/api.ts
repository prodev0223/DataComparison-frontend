import ApiList from './apiList';
import { url } from './baseUrl';
import request from './request';

const getBaseUrl = ()=> {
    return url;
}

const getAllDiscrepancies = async(data = {})=> {
    return request.get(ApiList.All, data);
}

const getDiscrepanciesByPlayer = async(data = {})=> {
    return request.get(ApiList.Player, data);
}

const getDiscrepanciesByGame = async(data = {})=> {
    return request.get(ApiList.Game, data);
}

const getDiscrepanciesByTeam = async(data = {})=> {
    return request.get(ApiList.Team, data);
}

export default {
    getBaseUrl, getAllDiscrepancies, getDiscrepanciesByPlayer, getDiscrepanciesByGame, getDiscrepanciesByTeam
}