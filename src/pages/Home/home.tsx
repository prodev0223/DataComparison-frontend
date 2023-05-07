import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {getAllDiscrepancies} from '../../utils/api/api';
import pairDataForGame from '../../utils/pair/pairDataForGame';
import { GameAttribute } from '../../model/GameAttribute';
import pairDataForTeam from '../../utils/pair/pairDataForTeam';
import { Player } from '../../model/Player';
import pairDataForPlayer from '../../utils/pair/pairDataForPlayer';
import switchUrlForType from '../../utils/pair/switchUrlForType';
import * as TeamModel from '../../model/Team';
import * as GameModel from '../../model/Game';

const Home = ()=> {
  const [gameData, setGameData] = useState<GameModel.Game[]>([]);
  const [teamData, setTeamData] = useState<TeamModel.Team[]>([]);
  const [playersData, setPlayersData] = useState<Player[]>([]);

  useEffect(() => {
    getAllDiscrepancies().then(result=>{
      pairAll(result);
    })
  }, []);

  const pairAll = (data: any) => {
    const game = pairDataForGame(data );
    setGameData(game);

    const homePlayers = pairDataForPlayer(data['homePlayers'] , data['home']['id'] , 'home');
    const awayPlayers = pairDataForPlayer(data['awayPlayers'] , data['away']['id'] , 'away');
    setPlayersData([...homePlayers,...awayPlayers]);

    const teams = pairDataForTeam(data);
    setTeamData(teams);
  }

  const generateColumns= (type =0, title = 'Title'): ColumnsType<any>  => {
    if(type === 0){
      const columns: ColumnsType<GameModel.Game> = [
        {
          title: <a href={switchUrlForType(type)}>{title}</a>,
          dataIndex: 'id',
          key: 'id',
          width: '30%',
        },
        {
          title: 'Attendance',
          key: 'attendance',
          dataIndex: 'attendance',
          width: '30%',
        },
      ];
      return columns;
    }

    if(type === 1){
      const columns: ColumnsType<TeamModel.Team> = [
        {
          title: <a href={switchUrlForType(type)}>{title}</a>,
          render: (player) => player.id,
        },
        {
          title: 'Team',
          key: 'team',
          dataIndex: 'name',
        },
        {
          title: 'Rush Attempts',
          key: 'rushAttempts',
          dataIndex: 'rushAttempts',
        },
        {
          title: 'Rush Touch Downs',
          key: 'rushTds',
          dataIndex: 'rushTds',
        },
        {
          title: 'Rush Yards Ganed',
          key: 'rushYdsGained',
          dataIndex: 'rushYdsGained',
        },
        {
          title: 'Receptions',
          key: 'rec',
          dataIndex: 'rec',
        },
        {
          title: 'Receiving Yards',
          key: 'receivingYards',
          dataIndex: 'receivingYards',
        },
      ]
      return columns;
    }

    const columns: ColumnsType<Player> = [
      {
        title: <a href={switchUrlForType(type)}>{title}</a>,
        render: (player) => player.id,
      },
      {
        title: 'Rush Attempts',
        key: 'rushAttempts',
        dataIndex: 'rushAttempts',
      },
      {
        title: 'Rush Touch Downs',
        key: 'rushTds',
        dataIndex: 'rushTds',
      },
      {
        title: 'Rush Yards Ganed',
        key: 'rushYdsGained',
        dataIndex: 'rushYdsGained',
      },
      {
        title: 'Receptions',
        key: 'rec',
        dataIndex: 'rec',
      },
      {
        title: 'Receiving Yards',
        key: 'receivingYards',
        dataIndex: 'receivingYards',
      }];
    return columns;
  }

  return (
    <div className="App">
      <p className='text-2xl font-bold text-center my-6'> All Discrepancies </p>
      <div className='px-5 my-5'>
        <Table columns={generateColumns(0, 'Game Id')} dataSource={gameData} pagination={false} title={() => 'Game Discrepancies'} />
        <Table columns={generateColumns(1, 'Team Id')} dataSource={teamData} pagination={false} title={() => 'Teams Discrepancies'} />
        <Table columns={generateColumns(2, 'Player Id')} dataSource={playersData} pagination={false}title={() => 'Player Discrepancies'} />
      </div>
    </div>
  );
}

export default Home;