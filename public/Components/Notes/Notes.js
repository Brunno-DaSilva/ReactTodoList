class Notes extends React.Component {
  state = {
    title: "",
    body: "",
    date: new Date(),
    notes: []
  };

  componentDidMount() {
    fetch("/youtube")
      .then(response => response.json())
      // .then(response => response.text());
      // .then(text => console.log(text));
      .then(notes =>
        this.setState({
          notes: notes
        })
      );
  }

  // handleChange = event => {
  //   this.setState({ [event.target.id]: event.target.value });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   fetch("/youtube", {
  //     body: JSON.stringify({ title: this.state.title, body: this.state.body }),
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(createdNote => {
  //       return createdNote.json();
  //     })
  //     .then(jsonedNote => {
  //       this.setState({
  //         title: "",
  //         body: "",
  //         nodes: [jsonedNote, ...this.state.notes]
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

  // deleteNote = (id, index) => {
  //   // console.log(id, index);
  //   fetch("youtube/" + id, {
  //     method: "DELETE"
  //   }).then(data => {
  //     this.setState({
  //       notes: [
  //         //Slicing everything before and after the item to be deleted
  //         ...this.state.notes.slice(0, index),
  //         ...this.state.notes.slice(index + 1)
  //       ]
  //     });
  //   });
  // };

  // updateNote = (note, index) => {
  //   note.complete = !note.complete;
  //   fetch("youtube/" + note._id, {
  //     body: JSON.stringify(note),
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(updateNote => updateNote.json())
  //     .then(jsonedNote => {
  //       fetch("/youtube")
  //         .then(response => response.json())
  //         .then(notes => {
  //           this.setState({ notes: notes });
  //         });
  //     });
  // };

  render() {
    return (
      <div>
        <div className="main-title">
          <h1>Notes List</h1>
        </div>
        <table>
          <tbody>
            {this.state.notes.map((note, index) => {
              return (
                <tr>
                  <td>{note.title}</td>
                  <td>{note.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
