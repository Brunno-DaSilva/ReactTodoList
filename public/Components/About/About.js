console.log("Ola Mundo");

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <aside>
        <h1>About this App</h1>
          <p>This app was created by The React Junkies-- Bruno "Baddy" DaSilva, Caroline "Catastrophe" Nolasco, and John "Juicy" Martin. It was their first team-React-app-build together, but they seemed to have conquered it masterfully.</p>
        </aside>

        <aside>
          <h2>About Bruno DaSilva</h2>
          <p>Bruno is a dad and he's soft spoken and he's a fantastic coder-- especially on the front-end. This app would probably be truly stunning if he was in charge of all the CSS.</p>
        </aside>

        <aside>
          <h2>About John Martin</h2>
          <p>John is a full-stack developer who really didn't like CSS at first but now is getting the hang of it and React really makes it easy so it's not so bad anymore.</p>
        </aside>

        <aside>
          <h2>About Caroline Nolasco</h2>
          <div className="img-wrapper">
            <img src="https://i.imgur.com/fWZ3XAz.jpg" alt="Photo of Caroline Nolasco" />
            <p>Caroline is a front end developer with a passion for design, art, and coding who's favorite challenge is the never ending cycle of balancing functionality & accessibility with design.</p>
          </div>
        </aside>
      </div>
    );
  }
}
