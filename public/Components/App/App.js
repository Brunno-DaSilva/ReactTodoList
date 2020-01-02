console.log("Ciao React Junkies");

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="cards-container">
            <NavLink className="cards" to="/htmlCss">
              HTML & CSS
            </NavLink>

            <NavLink className="cards" to="/javaScript">
              JavaScript
            </NavLink>

            <NavLink className="cards" to="/reactPlayList">
              React
            </NavLink>
            <NavLink className="cards" to="/jQueryPlayList">
              jQuery
            </NavLink>
            <NavLink className="cards" to="/node">
              Node
            </NavLink>
            <NavLink className="cards" to="/phpList">
              PHP
            </NavLink>
            <NavLink className="cards" to="/python">
              Python
            </NavLink>
            <NavLink className="cards" to="/codeInterview">
              Code Interview
            </NavLink>
          </div>
          <br />
        </div>
      </React.Fragment>
    );
  }
}
