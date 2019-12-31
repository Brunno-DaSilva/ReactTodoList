console.log("Ciao React Junkies");

class HtmlCss extends React.Component {
  state = {
    baseURL: "https://www.googleapis.com/youtube/v3/playlistItems?part=",
    part: "snippet" + "&",
    maxResults: "maxResults=5" + "&",
    playlistId: "playlistId=" + "PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU",
    apikey: "&key=" + "AIzaSyCIETFoL5hBS644jAwQ7vx_79ogETBt4nE",
    videoIds: [],
    finalURL: ""
  };

  // HTML&CSS  = PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU

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
  };

  render() {
    console.log(this.state.videoIds);
    return (
      <React.Fragment>
        <div>
          <button className="cards" onClick={this.handleClick}>
            HTML&CSS
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
