import React from 'react';
import { outputs } from '../utils/outputs.js';

export default function PrevPrompts({ prompts, setPrompts }) {
  function Output(prompt) {
    switch (prompt.input) {
      case 'help':
        return outputs[prompt.input];

      case 'cat README.md':
        if (prompt.location === 'projects')
          return outputs['default'](prompt.input);
        return outputs[prompt.input];

      case 'start projects':
        if (prompt.location === 'projects')
          return outputs['default'](prompt.input);
        return outputs[prompt.input];

      case 'cd ..':
        return;

      case 'cat C#.md':
        if (prompt.location !== 'projects') {
          return outputs['C# error'];
        }
        return outputs[prompt.input];

      case 'ls':
        if (prompt.location === 'projects') {
          return outputs['projectsList'];
        }
        return outputs[prompt.input];

      case 'cd projects':
        if (prompt.location === 'projects')
          return outputs['default'](prompt.input);
        return;

      case 'clear':
        setPrompts([]);
        break;

      case 'cd github':
        if (prompt.location === 'projects')
          return outputs['default'](prompt.input);
        return outputs[prompt.input];

      case 'exit':
        return outputs[prompt.input];

      case 'cd contact':
        if (prompt.location === 'projects')
          return outputs['default'](prompt.input);
        return outputs[prompt.input];

      case 'start "" resume.pdf':
        if (prompt.location === 'projects')
          return outputs['default'](prompt.input);
        return outputs[prompt.input];

      case './sqlite3.exe':
        if (prompt.location === 'projects')
          return outputs['default'](prompt.input);
        break;

      case './Calculator.exe':
      case "./Budget's App.exe":
      case './Codigo Morsa.exe':
      case './Google Dino Clone.exe':
      case './Guitar Store.exe':
      case './Palabros.exe':
      case "./Peter's Notes.exe":
      case './Pong Game.exe':
      case './Sumo Fanpage.exe':
      case './Text Adventure Game.exe':
      case './Where to watch it.exe':
      case './Wordle Clone.exe':
        if (prompt.location !== 'projects') {
          return outputs['default'](prompt.input);
        }
        return;

      default:
        return outputs['default'](prompt.input);
    }
  }

  return (
    <div className="previous-prompts-container">
      {prompts.map((prompt) => (
        <div className="output" key={Math.random()}>
          <div className="previous-prompt">
            {prompt.location === 'projects' ? (
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
            <span>{prompt.input}</span>
          </div>

          <div className="output">{Output(prompt)}</div>
        </div>
      ))}
    </div>
  );
}
