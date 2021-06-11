import { useEffect, useState } from 'react';

import Button from 'src/components/button';
import ResultsBox from 'src/components/results-box';
import { drawTeams } from 'src/services/draw-logic';

import { TPlayerDraw } from 'src/types/general';
import { TDrawData, TPlayerData } from '../player-info';

import './team-draw.scss';

type IProps = {
    drawData: TDrawData;
    onReturn: () => void;
};

const TeamDraw = ({ drawData, onReturn }: IProps) => {
    const [teamDraw, setTeamDraw] = useState<Array<TPlayerDraw>>([]);

    useEffect(() => {
        const draw = drawTeams(drawData);
        setTeamDraw(draw);
        console.log(draw);
    }, []);

    return (
        <div className="p-team-draw">
            <div className="p-team-draw__info">
                {teamDraw.length ? (
                    teamDraw.map(draw => (
                        <ResultsBox result={draw} />
                    ))
                ) : (
                    drawData?.playerData.map(({ playerName }: TPlayerData) => (
                        <span>{playerName}</span>
                    ))
                )}
            </div>
            <Button onClick={onReturn} className="p-team-draw__return">Return</Button>
        </div>
    );
};

export default TeamDraw;
