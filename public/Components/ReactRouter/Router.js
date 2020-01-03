const { HashRouter, NavLink, Route, browserHistory } = ReactRouterDOM;

const routes = [
  { path: '/youtubeList', component: App },
  { path: '/about', component: About },
  { path: '/htmlCss', component: HtmlCss },
  { path: '/javaScript', component: JavaScript },
  { path: '/reactPlayList', component: ReactPlayList },
  { path: '/jQueryPlayList', component: JQueryPlayList },
  { path: '/node', component: Node },
  { path: '/phpList', component: Php },
  { path: '/python', component: Python },
  { path: '/codeInterview', component: CodeInterview },
  { path: '/comments', component: Comments }
];

class YouTubeRouter extends React.Component {
  state = {};
  render() {

    const allRoutes = routes.map(route => <Route path={ route.path } component={ route.component }></Route>);
    console.log(allRoutes);

    return (
      <HashRouter history={browserHistory}>
        <Header />
          { allRoutes }
        <Footer />
      </HashRouter>

      // <HashRouter history={browserHistory}>
      //   <Header />
      //   {/* Main Components Routers */}
      //   <Route path="/youtubeList" component={App} />
      //   <Route path="/about" component={About} />

      //   {/* Components Route */}
      //   <Route path="/htmlCss" component={HtmlCss} />
      //   <Route path="/javaScript" component={JavaScript} />
      //   <Route path="/reactPlayList" component={ReactPlayList} />
      //   <Route path="/jQueryPlayList" component={JQueryPlayList} />
      //   <Route path="/node" component={Node} />
      //   <Route path="/phpList" component={Php} />
      //   <Route path="/python" component={Python} />
      //   <Route path="/codeInterview" component={CodeInterview} />
      //   <Route path="/comments" component={Comments} />
      // <Footer />
      // </HashRouter>
    );
  }
}

ReactDOM.render(<YouTubeRouter />, document.querySelector(".container"));
