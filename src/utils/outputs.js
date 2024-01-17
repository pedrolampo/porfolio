export const outputs = {
  help: (
    <span>
      PSL bash, version 1.2.15(1)-release (x86_64-pc-msys)
      <br />
      These shell commands are defined internally. Type `help' to see this list.
      <br />
      <br />
      Here's a list of the available commands:
      <br />
      <table className="cmd-table">
        <tbody>
          <tr>
            <td>cat README.md</td>
            <td>Displays info about myself</td>
          </tr>
          <tr>
            <td>start projects</td>
            <td>Opens the projects folder</td>
          </tr>
          <tr>
            <td>cd github</td>
            <td>Opens my github profile</td>
          </tr>
          <tr>
            <td>exit</td>
            <td>Goes to a more visual interface</td>
          </tr>
          <tr>
            <td>cd contact</td>
            <td>Opens a contact form</td>
          </tr>
          <tr>
            <td>start "" resume.pdf</td>
            <td>Opens resume in a new tab</td>
          </tr>
          <tr>
            <td>start "" viseven-recom-letter.pdf</td>
            <td>Opens Viseven's Recommendation Letter in a new tab</td>
          </tr>
        </tbody>
      </table>
      <br />
      Last updated: January 2024
      <br />
    </span>
  ),
  'cat README.md': (
    <>
      <p>
        Hello! My name is Pedro, I'm a Front-End Developer (and maybe a game
        developer some day?).
      </p>
      <p>
        Here you can check all of the projects I've made during this journey of
        becoming a better web developer (there's also a mobile app!)
      </p>
      <br />
      <p>Type 'help' if you want to know more about the available commands</p>
      <p>Type 'exit' to go to a more visual webpage</p>
    </>
  ),
  default: (prompt) => <span>bash: {prompt}: command not found</span>,
  ls: (
    <span>
      <span className="blue">projects</span>/
      <br />
      README.md
      <br />
      resume.pdf
      <br />
      viseven-recom-letter.pdf
      <br />
      github
      <br />
      contact
    </span>
  ),
  'cd github': 'redirecting to github...',
  'cd contact': 'redirecting...',
  'start "" resume.pdf': 'start "" resume.pdf',
  'start "" viseven-recom-letter.pdf': 'start "" viseven-recom-letter.pdf',
  'start projects': 'start projects',
  exit: 'logout',
  projectsList: (
    <span>
      <span className="exe-green">Budget's app.exe</span>
      <br />
      C#.md
      <br />
      <span className="exe-green">Calculator.exe</span>
      <br />
      <span className="exe-green">Codigo Morsa.exe</span>
      <br />
      <span className="exe-green">Google Dino Clone.exe</span>
      <br />
      <span className="exe-green">Guitar Store.exe</span>
      <br />
      <span className="exe-green">Palabros.exe</span>
      <br />
      <span className="exe-green">Peter's Notes.exe</span>
      <br />
      <span className="exe-green">Pong Game.exe</span>
      <br />
      <span className="exe-green">Sumo Fanpage.exe</span>
      <br />
      <span className="exe-green">Text Adventure Game.exe</span>
      <br />
      <span className="exe-green">Where to watch it.exe</span>
      <br />
      <span className="exe-green">Wordle Clone.exe</span>
    </span>
  ),
  'C# error': 'cat: C#.md: No such file or directory',
  'cat C#.md': (
    <span>
      I'm currently studying C# in order to become a game developer.
      <br />
      This is going to be my hobby, but I hope that I'll become a greate game
      dev.
      <br />
      Currently using Unity.
    </span>
  ),
};
