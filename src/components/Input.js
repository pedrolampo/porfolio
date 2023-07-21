import { useRef } from 'react';

export default function Input({
  setPrompts,
  isProjectsOpen,
  setIsProjectsOpen,
  setBetterGUI,
  setInProjectsFolder,
  inProjectsFolder,
  prompts,
  setContactOpen,
}) {
  const inputRef = useRef();
  let cmdIndex = prompts.length - 1;

  function focusInput() {
    if (isProjectsOpen) return;
    inputRef.current.focus();
  }

  async function handlePrompt(e) {
    if (e.key === 'Enter') {
      if (inProjectsFolder) {
        await setPrompts((prev) => [
          ...prev,
          { input: inputRef.current.value, location: 'projects' },
        ]);

        switch (inputRef.current.value) {
          case 'cd ..':
            setInProjectsFolder(false);
            break;

          case 'exit':
            setTimeout(() => setBetterGUI(true), 500);
            break;

          case "./Budget's App.exe":
            window.open('https://budgetsapp.netlify.app/', '_blank');
            break;

          case './Calculator.exe':
            window.open('https://pedrolampo.github.io/Calculator/', '_blank');
            break;

          case './Codigo Morsa.exe':
            window.open('https://pedrolampo.github.io/codigo-morsa/', '_blank');
            break;

          case './Google Dino Clone.exe':
            window.open(
              'https://pedrolampo.github.io/chrome-dino-game-clone/',
              '_blank'
            );
            break;

          case './Guitar Store.exe':
            window.open(
              'https://github.com/pedrolampo/proyecto-react',
              '_blank'
            );
            break;

          case './Palabros.exe':
            window.open(
              'https://play.google.com/store/apps/details?id=com.pedrolampo.palabros',
              '_blank'
            );
            break;

          case "./Peter's Notes.exe":
            window.open('https://peters-notes.vercel.app/', '_blank');
            break;

          case './Pong Game.exe':
            window.open('https://pedrolampo.github.io/pong-clone/', '_blank');
            break;

          case './Sumo Fanpage.exe':
            window.open('https://pedrolampo.github.io/proyecto-js/', '_blank');
            break;

          case './Text Adventure Game.exe':
            window.open(
              'https://pedrolampo.github.io/text-adventure/',
              '_blank'
            );
            break;

          case './Where to watch it.exe':
            window.open('https://wheretowatchit.netlify.app/', '_blank');
            break;

          case './Wordle Clone.exe':
            window.open('https://pedrolampo.github.io/wordle-clone/', '_blank');
            break;

          default:
            break;
        }
      } else {
        await setPrompts((prev) => [
          ...prev,
          { input: inputRef.current.value, location: 'root' },
        ]);
        switch (inputRef.current.value) {
          case 'cd github':
            setTimeout(
              () => window.open('https://github.com/pedrolampo', '_blank'),
              300
            );
            break;

          case 'cd projects':
            setInProjectsFolder(true);
            break;

          case 'start projects':
            setIsProjectsOpen(true);
            break;

          case 'exit':
            setTimeout(() => setBetterGUI(true), 500);
            break;

          case 'cd contact':
            setTimeout(() => setContactOpen(true), 300);
            break;

          case 'cd ..':
            setInProjectsFolder(false);
            break;

          case 'start "" resume.pdf':
            window.open('media/pdf/resume.pdf', '_blank');
            break;

          default:
            break;
        }
      }

      if (inputRef.current) inputRef.current.value = '';
    }

    if (e.key === 'ArrowUp' && prompts.length > 1) {
      if (cmdIndex === 0) {
        inputRef.current.value = prompts[0]?.input;
        return;
      }
      cmdIndex -= 1;
      inputRef.current.value = prompts[cmdIndex + 1]?.input;
    }
    if (e.key === 'ArrowDown' && prompts.length > 1) {
      if (cmdIndex === prompts.length - 1) {
        inputRef.current.value = '';
        return;
      }
      cmdIndex += 1;
      inputRef.current.value = prompts[cmdIndex]?.input;
    }
  }

  return (
    <div className="input-container">
      {inProjectsFolder ? (
        <span className="location">
          root@localhost:
          <span>~projects</span>
        </span>
      ) : (
        <span className="location">
          root@localhost:
          <span>~#</span>
        </span>
      )}
      <input
        onBlur={focusInput}
        onKeyDown={(e) => handlePrompt(e)}
        autoFocus
        type="text"
        ref={inputRef}
      />
    </div>
  );
}
