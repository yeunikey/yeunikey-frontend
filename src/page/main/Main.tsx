
import './main.scss';
import './../../styles/adaptation.scss';

import Roll from './roll/Roll';
import Title from './title/TItle';
import Navigation from './navigation/Navigation';
import Player from './player/Player';

function Main() {
    return (
        <div className="main">
            <div className="main__content">
                <Title></Title>
                <Roll></Roll>
                <Navigation></Navigation>
            </div>
        </div>
    );
}

export default Main;