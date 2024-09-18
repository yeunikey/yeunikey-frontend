
import { useEffect, useState } from 'react';
import './portfolio.scss';
import { IBadge, IProject } from '../../../entities';
import { AnimatePresence, motion } from 'framer-motion';

function Portfolio(props: {badges: IBadge[], selectedBadges: IBadge[], getSelectedBadge: Function}) {

    let [projects, setProjects] = useState<IProject[]>([
        {
            key: "yeunikey",
            title: "yeunikey.me",
            subtitle: "написание личного сайта со ссылками, портфолио.",
            github: "https://github.com/yeunikey/yeunikey-frontend",
            image: "https://i.imgur.com/hijzgPJ.jpeg",
            badges: ["react", "typescript"]
        },
        {
            key: "serpin",
            title: "serpin.online",
            subtitle: "написание образовательной платформы для тестирования.",
            github: null,
            image: "https://i.imgur.com/GUaX3rB.png",
            badges: ["react", "spring", "java", "typescript"]
        },
        {
            key: "testcenter",
            title: "testcenter bot",
            subtitle: "написание телеграм бота для парсера тестцентра.",
            github: "https://github.com/yeunikey/TestCenterBot",
            image: "https://i.imgur.com/akJtpEA.png",
            badges: ["java"]
        },
        {
            key: "anft",
            title: "anft",
            subtitle: "написание плагина для отображения NFT в игре.",
            github: "https://github.com/yeunikey/ANFT",
            image: "https://i.imgur.com/sLqgxo4.png",
            badges: ["java", "bukkit"]
        }
    ])
    let [isEmpty, setEmpty] = useState(true);

    useEffect(() => {
        if (props.selectedBadges.length != 0) {
            setEmpty(false);
        } else {
            setEmpty(true);
        }
    }, [props.selectedBadges])

    const isSelected = (project: IProject) => {
        return props.selectedBadges.some(badge => 
            project.badges.includes(badge.key)
        );
    }

    return (
        <div className="portfolio">
            <motion.div className="portfolio__projects"
                transition={{
                    delayChildren: 1,
                    staggerChildren: 1
                }}
            >
                <AnimatePresence>
                    {!isEmpty 
                    ? 
                    projects.filter(b => isSelected(b)).map((project: IProject, key) => {
                        return <Project key={key} project={project} badges={props.badges}></Project>
                    })
                    : 
                    projects.map((project: IProject, key) => {
                        return <Project key={key} project={project} badges={props.badges}></Project>
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

function Project(props: { project: IProject, badges: IBadge[]}) {
    return (
        <motion.div className="portfolio__project"
            key={props.project.key}
            exit={{
                scale: 0
            }}
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
        >
            <div className="portfolio__project__title">
                {props.project.title}
            </div>
            <div className="portfolio__project__subtitle">
                {props.project.subtitle}
            </div>
            <img className="portfolio__project__image" src={props.project.image} />
            <div className="portfolio__project__bottom">
                <motion.div className="portfolio__project__github"
                    onTap={() => {
                        if (props.project.github == null)
                            return;
                        window.location.href = props.project.github;
                    }}
                    whileHover={{
                        scale: 1.05
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                </motion.div>
                <div className="portfolio__project__badges">
                    {props.project.badges.map((badgeKey: string, key) => {
                        let badge: IBadge = props.badges.filter((b) => {
                            return b.key == badgeKey;
                        })[0];

                        if (badge == null)
                            return;

                        return (
                            <motion.div 
                                key={key} 
                                className={"portfolio__project__badge " + badgeKey}
                                initial={{
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1
                                }}
                                whileHover={{
                                    scale: 1.015
                                }}
                            >
                                {badge.icon}
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default Portfolio;