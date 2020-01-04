const { NavLink } = ReactRouterDOM;

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="nav-bar">
          <NavLink className="nav-bar" to="/youtubeList">
            YouTube List
          </NavLink>
          <NavLink className="nav-bar" to="/about">
            About
          </NavLink>
        </nav>
        <br />
        <h1>What do you want to learn?</h1>
      </div>
    );
  }
}
