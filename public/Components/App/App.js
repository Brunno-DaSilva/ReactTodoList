console.log("Ciao React Junkies");

const { TransitionGroup, CSSTransition } = ReactTransitionGroup;

class App extends React.Component {
  render() {
    return (
      <TransitionGroup
      >
        <div>
          <div className="cards-container">
            <NavLink className="cards htmlCss" to="/htmlCss">
              <h1>HTML / CSS</h1>
              <br/>
              <i class="fab fa-html5 fa-5x"></i>
              <i class="fab fa-css3 fa-5x"></i>
            </NavLink>

            <NavLink className="cards javaScript" to="/javaScript">
              <h1>JavaScript</h1>
              <br/>
              <i class="fab fa-js-square fa-5x"></i>
            </NavLink>

            <NavLink className="cards reactPlaylist" to="/reactPlayList">
              <h1>React</h1>
              <br/>
              <i class="fab fa-react fa-5x"></i>
            </NavLink>
            <NavLink className="cards jQueryPlayList" to="/jQueryPlayList">
              <h1>jQuery</h1>
              <br/>
            </NavLink>
            <NavLink className="cards node" to="/node">
              <h1>Node.js</h1>
              <br/>
              <i class="fab fa-node-js fa-5x"></i>
            </NavLink>
            <NavLink className="cards phpList" to="/phpList">
              <h1>PHP</h1>
              <br/>
              <i class="fab fa-php fa-5x"></i>
            </NavLink>
            <NavLink className="cards python" to="/python">
              <h1>Python</h1>
              <br/>
              <i class="fab fa-python fa-5x"></i>
            </NavLink>
            <NavLink className="cards codeInterview" to="/codeInterview">
              <h1>Interviews</h1>
              <br/>
              <i class="fa fa-handshake fa-5x"></i>
            </NavLink>
          </div>
          <br />
        </div>
      </TransitionGroup>
    );
  }
}
