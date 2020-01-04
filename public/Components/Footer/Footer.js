console.log("Ola Mundo");

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-info">
        <div className="info-Carol">
          <p>Caroline Nolasco</p>
          <a href="#" target="_blank">
            <i class="fab fa-github-alt fa-2x"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fas fa-globe fa-2x"></i>
          </a>
        </div>

        <div className="info-Bruno">
          <p>Bruno DaSilva</p>
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

        <div className="info-John">
          <p>John Martin</p>
          <a href="#" target="_blank">
            <i class="fab fa-github-alt fa-2x"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fas fa-globe fa-2x"></i>
          </a>
        </div>
        <br />
      </div>
    );
  }
}
