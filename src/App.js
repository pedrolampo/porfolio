import { useState } from 'react';
import Draggable from 'react-draggable';
import Input from './components/Input';
import PrevPrompts from './components/PrevPrompts';
import Projects from './components/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './components/Contact';

function App() {
  const [prompts, setPrompts] = useState([{ input: 'help', location: 'root' }]);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [betterGUI, setBetterGUI] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [inProjectsFolder, setInProjectsFolder] = useState(false);

  if (betterGUI) {
    document.querySelector('#root').classList.add('projects-open');
    return (
      <Projects
        setPrompts={setPrompts}
        setBetterGUI={setBetterGUI}
        betterGUI={betterGUI}
        setContactOpen={setContactOpen}
      />
    );
  } else document.querySelector('#root').classList.remove('projects-open');

  if (contactOpen) {
    document.querySelector('#root').classList.add('projects-open');
    return (
      <Contact
        setPrompts={setPrompts}
        setBetterGUI={setBetterGUI}
        betterGUI={betterGUI}
        setContactOpen={setContactOpen}
      />
    );
  } else document.querySelector('#root').classList.remove('projects-open');

  return (
    <div className="console">
      {prompts.length > 0 && (
        <PrevPrompts setPrompts={setPrompts} prompts={prompts} />
      )}
      {isProjectsOpen && (
        <Draggable>
          <div className="projects-window">
            <div className="top-bar">
              <p>Projects</p>
              <div
                onClick={() => setIsProjectsOpen(false)}
                className="close-btn"
              >
                ✕
              </div>
            </div>
            <div className="folder-main-content">
              <Projects
                setPrompts={setPrompts}
                setBetterGUI={setBetterGUI}
                betterGUI={betterGUI}
                setContactOpen={setContactOpen}
              />
            </div>
          </div>
        </Draggable>
      )}
      <Input
        setIsProjectsOpen={setIsProjectsOpen}
        inProjectsFolder={inProjectsFolder}
        setInProjectsFolder={setInProjectsFolder}
        isProjectsOpen={isProjectsOpen}
        setPrompts={setPrompts}
        setBetterGUI={setBetterGUI}
        prompts={prompts}
        setContactOpen={setContactOpen}
      />
    </div>
  );
}

export default App;
