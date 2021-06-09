import PlayerForm from 'src/components/player-form';

import './player-info.scss';

export type TPlayerData = {
    playerId: number;
    playerName: string;
}

export enum Balance {
    Full,
    Some,
    None
};

export type TDrawData = {
    playerData: Array<TPlayerData>;
    balanceDraw: Balance;
    balanceTeams: boolean;
    oneTeamEach: boolean;
    allowTeamsFromSameGroup: boolean;
};

type IProps = {
    setPlayerData: (data: TDrawData) => void;
}

const PlayerInfo = ({ setPlayerData }: IProps) => (
    <div className="p-player-info">
        <span className="u-text--title">Names of People Playing</span>
        <PlayerForm onSubmit={(playerData: Array<TPlayerData>) => setPlayerData({ playerData, balanceDraw: Balance.Some, balanceTeams: false, allowTeamsFromSameGroup: false, oneTeamEach: false })} />
    </div>
);

export default PlayerInfo;
