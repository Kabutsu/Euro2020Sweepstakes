import React from 'react';

import { TPlayerDraw } from 'src/types/general';
import './results-box.scss';

type IProps = { result: TPlayerDraw};

const ResultsBox = ({ result }: IProps) => (
    <div className="c-results-box">
        <div className="c-results-box__title">{result.playerData.playerName}</div>
        <div className="c-results-box__countries">
            {result.countries.map(country => (
                <div className="c-results-box__countries-info">
                    <img src={`${process.env.PUBLIC_URL}/flags/england.png`} />
                    <span>{country.name}</span>
                </div>
            ))}
        </div>
    </div>
);

export default ResultsBox;
