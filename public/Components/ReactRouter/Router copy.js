const { HashRouter, NavLink, Route, browserHistory } = ReactRouterDOM;
const { CSSTransition } = ReactTransitionGroup;

const routes = [
  { path: '/youtubeList', Component: App },
  { path: '/about', Component: About },
  { path: '/htmlCss', Component: HtmlCss },
  { path: '/javaScript', Component: JavaScript },
  { path: '/reactPlayList', Component: ReactPlayList },
  { path: '/jQueryPlayList', Component: JQueryPlayList },
  { path: '/node', Component: Node },
  { path: '/phpList', Component: Php },
  { path: '/python', Component: Python },
  { path: '/codeInterview', Component: CodeInterview },
  { path: '/comments', Component: Comments }
];

class YouTubeRouter extends React.Component {
  state = {};
  render() {

    const allRoutes = routes.map(({path, Component}) => {
      return(
        <Route key={ path }
          path={ path }
          component={ Component }
          children={ (match) => {
            return(
              <CSSTransition
                in={ match != null }
                timeout={ 1000 }
                classNames="test"
              >
                <div className="cards">
                  { Component }
                </div>
              </CSSTransition>
            )}
          }
        />
      );
    });
      
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
