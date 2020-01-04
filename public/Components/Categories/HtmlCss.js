console.log("Ciao React Junkies");

class HtmlCss extends React.Component {
  state = {
    baseURL: "https://www.googleapis.com/youtube/v3/playlistItems?part=",
    part: "snippet" + "&",
    maxResults: "maxResults=5" + "&",
    playlistId: "playlistId=" + "PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU",
    apikey: "&key=" + "AIzaSyCIETFoL5hBS644jAwQ7vx_79ogETBt4nE",
    videoIds: [],
    finalURL: "",
    commentID: "PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU"
  };

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

  // HTML&CSS  = PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    console.log(this.state.videoIds);
    return (
      <React.Fragment>
        <div className="frames-container">
          {this.state.videoIds.map((link, index) => {
            let frame = (
              <div className="frame-wrapper htmlCss">
                <iframe
                  src={link}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              <p>notes?</p>
              </div>
            );
            return frame;
          })}
        </div>

        <div className="frame-3">{this.frame}</div>

        <Comments />
      </React.Fragment>
    );
  }
}
