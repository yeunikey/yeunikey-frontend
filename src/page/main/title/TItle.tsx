
import { useEffect, useRef, useState } from 'react';
import Player from '../player/Player';
import './title.scss';
import { motion } from 'framer-motion';

function Title() {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    let [isPlaying, setPlaying] = useState(false)

    return (
        <div className="title">
            <motion.div className="title__content"
                initial={{
                    transform: "scale(0)"
                }}
                animate={{
                    transform: "scale(1)"
                }}
                whileTap={{
                    transform: "scale(0.9)"
                }}
                onTap={() => {
                    if (audioRef.current == null)
                        return;

                    if (isPlaying) {
                        audioRef.current.pause()
                        setPlaying(false)
                    } else {
                        audioRef.current.pause()
                        setPlaying(false)
                    }
                }}
            >
                <div className="title__background">
                    YE
                </div>
                <div className="title__text">
                    unikey
                </div>

            </motion.div>
            <audio ref={audioRef} loop autoPlay>
                <source src="/music.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
}

export default Title;