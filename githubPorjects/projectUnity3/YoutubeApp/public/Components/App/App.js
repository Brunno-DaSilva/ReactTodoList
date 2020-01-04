console.log("Ciao React Junkies");
const { CSSTransition } = ReactTransitionGroup;

const categories = [
  { name: 'HTML / CSS', path: 'htmlCss', icon: 'fab fa-html5 fa-2x' },
  { name: 'JavaScript', path: 'javaScript', icon: 'fab fa-js-square fa-2x' },
  { name: 'React', path: 'reactPlaylist', icon: 'fab fa-react fa-2x' },
  { name: 'jQuery', path: 'jQueryPlayList', icon: 'fa fa-wifi fa-2x' },
  { name: 'Node.js', path: 'node', icon: 'fab fa-node-js fa-2x' },
  { name: 'PHP', path: 'phpList', icon: 'fab fa-php fa-2x' },
  { name: 'Python', path: 'python', icon: 'fab fa-python fa-2x' },
  { name: 'Interviews', path: 'codeInterview', icon: 'fa fa-handshake fa-2x' },
];

class App extends React.Component {
  state = {}
  render() {
    const allCategories = categories.map((category) => {
      return (
        <CSSTransition
          in={true}
          timeout={500}
          classNames="cards"
          mountOnEnter={false}
        >
          <NavLink
            className={`${category.path}`}
            to={`/${category.path}`}
          >
            {category.name}
            <br />
            <i className={category.icon}></i>
          </NavLink>
        </CSSTransition>
      );
    });

    return (
      <div className="cards-container">
        {allCategories}
      </div>
    );
  }
}



{/* <div className="cards-container">
<NavLink className="cards htmlCss" to="/htmlCss">
  <h1>HTML / CSS</h1>
  <br/>
  <i class="fab fa-html5 fa-5x"></i>
  <i class="fab fa-css3 fa-5x"></i>
</NavLink>

<NavLink className="cards javaScript" to="/javaScript">
  <h1>JavaScript</h1>
  <br/>
  <i class="fab fa-js-square fa-5x"></i>
</NavLink>

<NavLink className="cards reactPlaylist" to="/reactPlayList">
  <h1>React</h1>
  <br/>
  <i class="fab fa-react fa-5x"></i>
</NavLink>
<NavLink className="cards jQueryPlayList" to="/jQueryPlayList">
  <h1>jQuery</h1>
  <br/>
</NavLink>
<NavLink className="cards node" to="/node">
  <h1>Node.js</h1>
  <br/>
  <i class="fab fa-node-js fa-5x"></i>
</NavLink>
<NavLink className="cards phpList" to="/phpList">
  <h1>PHP</h1>
  <br/>
  <i class="fab fa-php fa-5x"></i>
</NavLink>
<NavLink className="cards python" to="/python">
  <h1>Python</h1>
  <br/>
  <i class="fab fa-python fa-5x"></i>
</NavLink>
<NavLink className="cards codeInterview" to="/codeInterview">
  <h1>Interviews</h1>
  <br/>
  <i class="fa fa-handshake fa-5x"></i>
</NavLink>
</div>
<br /> */}