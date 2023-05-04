import ApiList from './apiList';
import { url } from './baseUrl';
import request from './request';

const getBaseUrl = ()=> {
    return url;
}

const getAllDiscrepancies = async(data = {})=> {
    return request.post(ApiList.All, data);
}

const getDiscrepanciesByPlayer = async(data = {})=> {
    return request.post(ApiList.Player, data);
}

const getDiscrepanciesByGame = async(data = {})=> {
    return request.post(ApiList.Game, data);
}

const getDiscrepanciesByTeam = async(data = {})=> {
    return request.post(ApiList.Team, data);
}

export default {
    getBaseUrl, getAllDiscrepancies, getDiscrepanciesByPlayer, getDiscrepanciesByGame, getDiscrepanciesByTeam
}