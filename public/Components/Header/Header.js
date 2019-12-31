const { NavLink } = ReactRouterDOM;

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          {/* <NavLink className="nav-bar" to="/">
            Home
          </NavLink> */}
          <NavLink className="nav-bar" to="/youtubeList">
            YouTube List
          </NavLink>
          <NavLink className="nav-bar" to="/about">
            Contact
          </NavLink>
          <NavLink className="nav-bar" to="/contact">
            About
          </NavLink>
        </nav>
        <br />
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.querySelector(".main-header"));
