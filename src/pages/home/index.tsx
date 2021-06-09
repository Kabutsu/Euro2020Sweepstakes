import { useState, useEffect } from 'react';

import PlayerInfo, { TDrawData, TPlayerData } from '../player-info';
import TeamDraw from '../team-draw';

import './home.scss';

enum Stage {
  Info,
  Draw,
};

const Home = () => {
  const [currentStage, setCurrentStage] = useState<Stage>(Stage.Info);
  const [drawData, setDrawData] = useState<TDrawData>(null);

  useEffect(() => {
    if (drawData?.playerData.length) {
      setCurrentStage(Stage.Draw);
    }
  }, [drawData]);

  const renderStage = () => {
    switch(currentStage) {
      case Stage.Info:
        return (
          <PlayerInfo setPlayerData={(data: TDrawData) => setDrawData(data)} />
        );
      case Stage.Draw:
        return (
          <TeamDraw drawData={drawData} onReturn={() => setCurrentStage(Stage.Info)} />
        );
    }
  }

  return (
    <div className="p-home">
      {renderStage()}
    </div>
  );
}

export default Home;
