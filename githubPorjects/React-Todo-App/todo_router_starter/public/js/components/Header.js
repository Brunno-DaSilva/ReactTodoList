console.log("Ola Mundo");
const { NavLink } = ReactRouterDOM;

class Header extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-bar">
          <NavLink to="/home" className="nav-item m-2">
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/c_scale,w_155/v1574831158/imgs_starwars/imgs/BLOGO_k36v5y.png"
              alt="logo"
            />
          </NavLink>

          <NavLink to="/todos" className="nav-item m-2">
            My To Do List
					</NavLink>
          <NavLink to="/about" className="nav-item m-2">
            About
					</NavLink>
        </div>
        <br />
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.querySelector(".main-header"));
