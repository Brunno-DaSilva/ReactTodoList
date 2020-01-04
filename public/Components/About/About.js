console.log("Ola Mundo");

class About extends React.Component {
  render() {
    return (
      <div>
        <aside>
        <h1>About this App</h1>
          <p>lorem ipsum...</p>
        </aside>

        <aside>
          <h2>About Bruno DaSilva</h2>
          <p>lorem ipsum...</p>
        </aside>

        <aside>
          <h2>About John Martin</h2>
          <p>lorem ipsum...</p>
        </aside>

        <aside>
          <h2>About Caroline Nolasco</h2>
          <img src="https://i.imgur.com/fWZ3XAz.jpg" alt="Photo of Caroline Nolasco" />
          <p>Caroline is a front end developer with a passion for design, art, and coding who's favorite challenge is the never ending cycle of balancing functionality & accessibility with design.</p>
        </aside>
      </div>
    );
  }
}
