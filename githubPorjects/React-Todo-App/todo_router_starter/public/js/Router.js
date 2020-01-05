const { HashRouter, NavLink, Route } = ReactRouterDOM;


class TodoRouter extends React.Component {
    state = {};
    render() {
        return (
            <HashRouter>
                <Header />
                <Route path="/todos" component={App} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />

            </HashRouter>
        );
    }
}

ReactDOM.render(<TodoRouter />, document.querySelector('.container'));