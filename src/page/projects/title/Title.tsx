
import { motion } from "framer-motion";
import "./title.scss";
import { IBadge } from "../../../entities";

function Title(props: {badges: IBadge[], getBadge: Function, selectedBadges: IBadge[], selectBadge: Function, unselectBadge: Function}) {
    
    return (
        <motion.div className="projects__title"
            initial={{
                y: -100,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
        >
            <div className="projects__title__content">
                <div className="projects__title__text">
                    PORTFOLIO <span>./$</span>
                </div>
                <div className="projects__title__badges">
                    {props.badges.map((badge: IBadge, key) => {
                        let selected: boolean = props.getBadge(badge.key) == null ? false : true;
                        return (
                            <motion.div 
                                key={key} 
                                className={" projects__title__badge " + (selected ? "projects__title__badge__selected " : "")  + badge.key}
                                initial={{
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1
                                }}
                                whileHover={{
                                    scale: 1.015,
                                    backgroundColor: "rgb(50, 50, 50, 0.95)"
                                }}
                                onTap={() => {
                                    if (selected) {
                                        props.unselectBadge(badge);
                                    } else {
                                        props.selectBadge(badge);
                                    }
                                }}
                            >
                                <div className={"projects__title__badge__icon"}>{badge.icon}</div>
                                <div className="projects__title__badge__name">
                                    {badge.name}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    );
}

export default Title;