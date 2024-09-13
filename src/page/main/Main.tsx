
import './main.scss';
import './../../styles/adaptation.scss';

import Roll from './roll/Roll';
import Title from './title/TItle';

function Main() {
    return (
        <div className="main">
            <div className="main__content">
                <Title></Title>
                <Roll></Roll>
            </div>
        </div>
    );
}

export default Main;