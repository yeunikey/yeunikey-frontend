
import './title.scss';
import {motion} from 'framer-motion';

function Title() {
    return (
        <motion.div className="title"
            initial={{
                transform: "scale(1.0)"
            }}
            whileTap={{
                transform: "scale(0.9)"
            }}>
            <div className="title__content">
                <div className="title__background">
                    YE
                </div>
                <div className="title__text">
                    unikey
                </div>
            </div>
        </motion.div>
    );
}

export default Title;