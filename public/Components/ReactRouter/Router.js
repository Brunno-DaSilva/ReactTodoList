const { HashRouter, NavLink, Route } = ReactRouterDOM;

class YouTubeRouter extends React.Component {
  state = {};
  render() {
    return (
      <HashRouter>
        <Header />
        <Route path="/youtubeList" component={App} />
        <Route path="/about" component={About} />
      </HashRouter>
    );
  }
}

ReactDOM.render(<YouTubeRouter />, document.querySelector(".container"));
