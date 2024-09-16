
import { useEffect, useRef, useState } from 'react';
import './title.scss';
import { motion } from 'framer-motion';

function Title() {

    return (
        <div className="main__title">
            <motion.div className="main__title__content"
                initial={{
                    scale: 0,
                    opacity: 0
                }}
                animate={{
                    scale: 1,
                    opacity: 1
                }}
                whileTap={{
                    scale: 0.9
                }}
                whileHover={{
                    scale: 1.05
                }}
            >
                <div className="main__title__background">
                    YE
                </div>
                <div className="main__title__text">
                    unikey
                </div>

            </motion.div>
        </div>
    );
}

export default Title;