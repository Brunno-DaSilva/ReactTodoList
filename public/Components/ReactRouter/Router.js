const { HashRouter, NavLink, Route, browserHistory } = ReactRouterDOM;

class YouTubeRouter extends React.Component {
  state = {};
  render() {
    return (
      <HashRouter history={browserHistory}>
        <Header />
        {/* Main Components Routers */}
        <Route path="/youtubeList" component={App} />
        <Route path="/about" component={About} />

        {/* Components Route */}
        <Route path="/htmlCss" component={HtmlCss} />
        <Route path="/javaScript" component={JavaScript} />
        <Route path="/reactPlayList" component={ReactPlayList} />
        <Route path="/jQueryPlayList" component={JQueryPlayList} />
        <Route path="/node" component={Node} />
        <Route path="/phpList" component={Php} />
        <Route path="/python" component={Python} />
        <Route path="/codeInterview" component={CodeInterview} />
        <Route path="/comments" component={Comments} />
        <Footer />
      </HashRouter>
    );
  }
}

ReactDOM.render(<YouTubeRouter />, document.querySelector(".container"));