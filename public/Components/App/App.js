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

  //******  PlayListIDs *******/
  //Full URL
  //https://www.googleapis.com/youtube/v3/playlistItems?part=snippet
  //&maxResults=5&playlistId=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&key=[YOUR_API_KEY] HTTP/1.1

  // HTML&CSS  = PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU
  // React Js = PLillGF-RfqbaevC84ezBcmlfR54H9RaUr
  // JavaScript = PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX
  // jQuery = PLillGF-RfqbYJVXBgZ_nA7FTAAEpp_IAc
  // Node = PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu
  //Mern Stack = PLillGF-RfqbbiTGgA77tGO426V3hRF9iE
  // Python = PLillGF-RfqbbJYRaNqeUzAb7QY-IqBKRx
  // PHP = PLillGF-RfqbZ3_Xr8do7Q2R752xYrDRAo
  // CodeInterview = PLWKjhJtqVAblv09G3sFgRMSeR0jnKQmJ9

  //****** End -- PlayListIDs *******/

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    this.setState(
      {
        finalURL:
          this.state.baseURL +
          this.state.part +
          this.state.maxResults +
          this.state.playlistId +
          this.state.apikey
      },
      () => {
        fetch(this.state.finalURL)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            const videoIds = responseJson.items.map(
              obj =>
                "https://www.youtube.com/embed/" +
                obj.snippet.resourceId.videoId
            );
            this.setState({ videoIds });
          })
          .catch(error => {
            console.error(error);
          });
      }
    );

    console.log("BTN Has been Clicked");
  };

  render() {
    console.log(this.state.videoIds);
    return (
      <React.Fragment>
        <div>
          <h2></h2>
        </div>

        <div>
          <button className="htmlCss" onClick={this.handleClick}>
            HTML&CSS
          </button>
        </div>

        <div>
          <button onClick={this.handleClick}>JavaScript</button>
        </div>

        <div>
          <button className="react" onClick={this.handleClick}>
            React
          </button>
        </div>
        <div>
          <button className="nodeJS" onClick={this.handleClick}>
            Node
          </button>
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
