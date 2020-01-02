console.log("Ciao React Junkies");

class App extends React.Component {
  state = {
    baseURL: "https://www.googleapis.com/youtube/v3/playlistItems?part=",
    part: "snippet" + "&",
    maxResults: "maxResults=5" + "&",
    playlistId: "playlistId=" + "PLWKjhJtqVAblv09G3sFgRMSeR0jnKQmJ9",
    apikey: "&key=" + "AIzaSyCIETFoL5hBS644jAwQ7vx_79ogETBt4nE",
    videoIds: [],
    finalURL: ""
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="cards-container">
            <NavLink className="cards" to="/htmlCss">
              <h1>HTML / CSS</h1>
              <br/>
              <i class="fab fa-html5 fa-5x"></i>
              <i class="fab fa-css3 fa-5x"></i>
            </NavLink>

            <NavLink className="cards" to="/javaScript">
              <h1>JavaScript</h1>
              <br/>
              <i class="fab fa-js-square fa-5x"></i>
            </NavLink>

            <NavLink className="cards" to="/reactPlayList">
              <h1>React</h1>
              <br/>
              <i class="fab fa-react fa-5x"></i>
            </NavLink>
            <NavLink className="cards" to="/jQueryPlayList">
              <h1>jQuery</h1>
              <br/>
            </NavLink>
            <NavLink className="cards" to="/node">
              <h1>Node.js</h1>
              <br/>
              <i class="fab fa-node-js fa-5x"></i>
            </NavLink>
            <NavLink className="cards" to="/phpList">
              <h1>PHP</h1>
              <br/>
              <i class="fab fa-php fa-5x"></i>
            </NavLink>
            <NavLink className="cards" to="/python">
              <h1>Python</h1>
              <br/>
              <i class="fab fa-python fa-5x"></i>
            </NavLink>
            <NavLink className="cards" to="/codeInterview">
              <h1>Code Interview</h1>
              <br/>
            </NavLink>
          </div>
          <br />
        </div>

        <div>
          {this.state.videoIds.map((link, index) => {
            let frame = (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={link}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            );
            return frame;
          })}
        </div>

        <div>{this.frame}</div>
      </React.Fragment>
    );
  }
}
