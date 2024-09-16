
import './main.scss';
import './../../styles/adaptation.scss';

import Roll from './roll/Roll';
import Title from './title/TItle';
import Links from './links/Links';

function Main() {
    return (
        <div className="main">
            <div className="main__content">
                <Title></Title>
                <Roll></Roll>
                <Links></Links>
            </div>
        </div>
    );
}

export default Main;