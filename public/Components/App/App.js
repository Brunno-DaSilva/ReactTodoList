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
