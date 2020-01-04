console.log("Ciao React Junkies");

class CodeInterview extends React.Component {
  state = {
    baseURL: "https://www.googleapis.com/youtube/v3/playlistItems?part=",
    part: "snippet" + "&",
    maxResults: "maxResults=5" + "&",
    playlistId: "playlistId=" + "PLWKjhJtqVAblv09G3sFgRMSeR0jnKQmJ9",
    apikey: "&key=" + "AIzaSyCIETFoL5hBS644jAwQ7vx_79ogETBt4nE",
    videoIds: [],
    finalURL: ""
  };

  // CodeInterview = PLWKjhJtqVAblv09G3sFgRMSeR0jnKQmJ9

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  //ComponentWillMount executes on page load, so the user wont have to click a btn to load the videos
  componentWillMount = () => {
    let finalURL =
      this.state.baseURL +
      this.state.part +
      this.state.maxResults +
      this.state.playlistId +
      this.state.apikey;

    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        const videoIds = responseJson.items.map(
          obj =>
            "https://www.youtube.com/embed/" + obj.snippet.resourceId.videoId
        );
        this.setState({ videoIds });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    console.log(this.state.videoIds);
    return (
      <React.Fragment>
        <div className="frames-container">
          {this.state.videoIds.map((link, index) => {
            let frame = (
              <div className="frame-wrapper codeInterview">
                <iframe
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
        <Comments />
      </React.Fragment>
    );
  }
}
