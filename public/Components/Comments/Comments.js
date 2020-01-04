// console.log("Hello from comments!");

//Comments holds user notes during a video execution

class CommentBody extends React.Component {
  render() {
    return (
      <ul>
        {this.props.data.comments.map((comment, i) => {
          return (
            <li>
              <CommentContent
                data={comment}
                index={i}
                deleteComment={this.props.deleteComment}
                updateComment={this.props.updateComment}
                commentsId={this.props.commentsId}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

class CommentContent extends React.Component {
  state = {
    comments: this.props.data.comments
  };

  toggleEditing = (comment, index) => {
    comment.editing = !comment.editing;
    console.log(comment);
    console.log(comment.editing);
    fetch("/youtube/" + comment._id, {
      body: JSON.stringify({ editing: comment.editing }),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(updateComment => updateComment.json())
      .then(JComment => {
        fetch("/youtube")
          .then(response => response.json())
          .then(comments => {
            this.setState({
              comments: comments,
              editing: false
            });
          });
      });
  };

  CommentEntry = () => {
    if (this.props.data.videoId === this.props.commentsId) {
      return (
        <div>
          {!this.props.data.editing ? (
            <CommentData
              comment={this.props.data}
              commentsId={this.props.commentsId}
            />
          ) : (
              <EditEntryForm
                data={this.props.data}
                index={this.props.index}
                commentsId={this.props.commentsId}
              />
            )}

          <button
            onClick={() => {
              {
                this.toggleEditing(this.props.data, this.props.index);
              }
            }}
          >
            {!this.props.data.editing ? "Edit" : "Cancel"}
          </button>

          <button
            onClick={() => {
              this.props.deleteComment(this.props.data._id, this.props.index);
            }}
          >
            Delete
          </button>
        </div>
      );
    } else {
      return "";
    }
  };

  render() {
    return <React.Fragment>{this.CommentEntry()}</React.Fragment>;
  }
}

class CommentData extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.comment.title}</h1>
        <h4>{this.props.comment.date}</h4>
        <h4>{this.props.comment.commentsId}</h4>
        <div>{this.props.comment.note}</div>
      </React.Fragment>
    );
  }
}

class NewEntryForm extends React.Component {
  state = {
    comments: this.props.data.comments,
    title: this.props.data.title,
    videoId: this.props.commentsId,
    date: this.props.data.date,
    note: this.props.data.note
  };

  handleChange = event => {
    let target = event.target;
    let id = target.id;
    let value = target.value;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("/youtube", {
      body: JSON.stringify({
        title: this.state.title,
        videoId: this.state.videoId,
        date: this.state.date,
        note: this.state.note,
        commentsId: this.props.commentsId
      }),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdComment => {
        return createdComment.json();
      })
      .then(comment => {
        this.setState({
          title: "",
          date: "",
          note: "",
          comments: [comment, ...this.state.comments]
        });
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={this.state.date}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="note">Note:</label>
          <textarea
            id="note"
            value={this.state.note}
            onChange={this.handleChange}
            required
          ></textarea>
        </div>
        <br />
        <div>
          <input type="submit" value="Add New Note" />
        </div>
      </form>
    );
  }
}

class EditEntryForm extends React.Component {
  state = {
    comments: this.props.data.comments,
    title: this.props.data.title,
    videoId: this.props.commentsId,
    date: this.props.data.date,
    note: this.props.data.note
  };

  handleEdit = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  updateComment = comment => {
    event.preventDefault();
    comment.editing = !comment.editing;
    console.log(comment.editing);
    fetch("/youtube/" + comment._id, {
      body: JSON.stringify({
        title: this.state.title,
        videoID: this.state.videoId,
        date: this.state.date,
        note: this.state.note,
        editing: comment.editing
      }),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(updateComment => updateComment.json())
      .then(JComment => {
        fetch("/youtube")
          .then(response => response.json())
          .then(comments => {
            this.setState({
              comments: comments,
              editing: false
            });
          });
      });
  };

  render() {
    return (
      <form
        onSubmit={() => {
          {
            this.updateComment(this.props.data);
          }
        }}
      >
        <div>
          <h3>Edit Entry</h3>
          <label htmlFor="title">Title</label>
          <h3>{this.state.title}</h3>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleEdit}
            required
          />
        </div>
        <div>
          <div>
            <label htmlFor="videoId" />
            <input type="hidden" id="videoId" value={this.state.videoId} />
          </div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={this.state.date}
            onChange={this.handleEdit}
            required
          />
        </div>
        <div>
          <label htmlFor="note">Note:</label>
          <textarea
            id="note"
            value={this.state.note}
            onChange={this.handleEdit}
            required
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Edit Note" />
        </div>
      </form>
    );
  }
}

class Comments extends React.Component {
  state = {
    comments: [],
    title: "",
    videoId: "",
    date: "",
    note: "",
    commentsId: this.props.commentsId
  };

  componentDidMount() {
    fetch("/youtube")
      .then(res => res.json())
      .then(comments =>
        // console.log("then " + comments)
        this.setState({
          comments: comments
        })
      );
  }

  deleteComment = (id, index) => {
    fetch("/youtube/" + id, {
      method: "DELETE"
    }).then(data => {
      this.setState({
        comments: [
          ...this.state.comments.slice(0, index),
          ...this.state.comments.slice(index + 1)
        ]
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='comments'>
          <h3>Comments:</h3>
          {/* <h3>/////// commentsID: {this.state.commentsId} ////////</h3> */}
          <NewEntryForm data={this.state} commentsId={this.state.commentsId} />
          <CommentBody
            data={this.state}
            commentsId={this.state.commentsId}
            deleteComment={this.deleteComment}
          />
        </div>
      </React.Fragment>
    );
  }
}
