console.log("Ola Mundo");

class Footer extends React.Component {
  render() {
    return (
      <div>
        <img
          src="https://res.cloudinary.com/duprwuo4j/image/upload/c_scale,w_155/v1574831158/imgs_starwars/imgs/BLOGO_k36v5y.png"
          alt="logo"
        />
        <div className="info-Bruno">
          <p>Bruno DaSilva <span className="devp">Front-End Developer</span></p>

          <a href="https://github.com/DaSilvaBrunoTexas" target="_blank">
            <i class="fab fa-github-alt fa-2x "></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-dasilva/"
            target="_blank"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="http://bruno-dasilva.com/" target="_blank">
            <i class="fas fa-globe fa-2x"></i>
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Footer />, document.querySelector(".main-footer"));
