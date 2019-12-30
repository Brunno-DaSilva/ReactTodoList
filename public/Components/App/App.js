console.log("Ciao React Junkies");

class App extends React.Component {
  state = {
    baseURL:
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=",
    channelId: "UC29ju8bIPH5as8OGnQzwJyA" + "&",
    maxResults: "maxResults=" + 5 + "&",
    apikey: "key=" + "AIzaSyCIETFoL5hBS644jAwQ7vx_79ogETBt4nE",
    videoId: [],
    finalURL: ""
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    this.setState(
      {
        finalURL:
          this.state.baseURL +
          this.state.channelId +
          this.state.maxResults +
          this.state.apikey
      },
      () => {
        fetch(this.state.finalURL)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            const videoId = responseJson.items.map(
              obj => "https://www.youtube.com/embed/" + obj.id.videoId
            );
            this.setState({ videoId });
          })
          .catch(error => {
            console.error(error);
          });
      }
    );

    console.log("BTN Has been Clicked");
  };

  render() {
    console.log(this.state.videoId);
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
          {this.state.videoId.map((links, index) => {
            let frame = (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={links}
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
