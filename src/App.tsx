
import { useEffect, useState } from 'react';
import Main from './page/main/Main';
import './styles/common.scss';
import Arrows from './component/arrows/Arrows';
import { IPage } from './entities';
import Projects from './page/projects/Projects';
import { AnimatePresence, motion } from 'framer-motion';

function App() {

  let [page, setPage] = useState<number>(0);
  let [pages, setPages] = useState<IPage[]>([
    {
      key: "main",
      object: (<Main></Main>)
    },
    {
      key: "projects",
      object: (<Projects></Projects>)
    }
  ]);

  let [animationComplete, setAnimationComplete] = useState<boolean>(true);

  useEffect(() => {
    console.log(animationComplete)
  }, [animationComplete])
  return (
    <div className="App">
      <Arrows page={page} setPage={setPage} pages={pages} setAnimationComplete={setAnimationComplete}></Arrows>

      <AnimatePresence>
        {pages[page] != null && animationComplete == true && (
          <motion.div 
            key={pages[page].key}
            exit={{
                x: "100%",
                opacity: 0
            }}
            onAnimationComplete={() => {
              setAnimationComplete(true)
            }}
          >
            {pages[page].object}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
