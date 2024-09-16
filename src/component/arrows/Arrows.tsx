
import './arrows.scss';

import { motion } from 'framer-motion';
import { IPage } from '../../entities';

function Arrows(props: {
    page: number, 
    setPage: Function, 
    pages: IPage[],
    setAnimationComplete: Function
}) {

    const prevPage = () => {
        if (props.page == 0)
            return;
        props.setPage(props.page - 1);
        props.setAnimationComplete(false)
    }

    const nextPage = () => {
        if (props.page == props.pages.length - 1)
            return;
        props.setPage(props.page + 1);
        props.setAnimationComplete(false)
    }

    return (
        <motion.div className="arrows"
            initial={{
                x: 25,
                opacity: 0
            }}
            animate={{
                x: 0, 
                opacity: 1
            }}
        >
            <div className="arrows__content">
                <motion.div className={"arrows__item "
                    + (props.page == 0
                        ? "arrows__item__blocked"
                        : ""
                    )
                }                    
                    onClick={prevPage}
                    whileHover={{
                        scale: 1.05
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>
                </motion.div>
                <motion.div className={"arrows__item "
                    + (props.page == props.pages.length - 1
                        ? "arrows__item__blocked"
                        : ""
                    )
                }
                    onClick={nextPage}
                    whileHover={{
                        scale: 1.05
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path></svg>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Arrows;