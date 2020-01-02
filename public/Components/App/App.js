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
              <i class="fab fa-html5 fa-5x"></i>
              <i class="fab fa-css3 fa-5x"></i>
            </NavLink>

            <NavLink className="cards" to="/javaScript">
              <i class="fab fa-js-square fa-5x"></i>
            </NavLink>

            <NavLink className="cards" to="/reactPlayList">
              <i class="fab fa-react fa-5x"></i>
            </NavLink>
            <NavLink className="cards" to="/jQueryPlayList">
              jQuery
            </NavLink>
            <NavLink className="cards" to="/node">
              <i class="fab fa-node-js fa-5x"></i>
            </NavLink>
            <NavLink className="cards" to="/phpList">
              <i class="fab fa-js-square fa-5x"></i>
            </NavLink>
            <NavLink className="cards" to="/python">
              <i class="fab fa-python fa-5x"></i>
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
