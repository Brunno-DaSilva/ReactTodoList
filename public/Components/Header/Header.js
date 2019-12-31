const { NavLink } = ReactRouterDOM;

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <NavLink className="nav-bar" to="/youtubeList">
            YouTube List
          </NavLink>
          <NavLink className="nav-bar" to="/about">
            About
          </NavLink>
          <NavLink className="nav-bar" to="/contact">
            Contact
          </NavLink>
        </nav>
        <br />
      </div>
    );
  }
}
