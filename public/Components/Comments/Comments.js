// console.log("Hello from comments!");

class CommentEntry extends React.Component {
    render() {
        return (
            <li>              
                <form>
                    <input type="submit" value="Edit" />
                </form>
                <button onClick={() => this.props.deleteComment(this.props.comment._id, this.props.index)}>Delete</button>
                <h3>{this.props.comment.title}</h3>
                <h4>{this.props.comment.date}</h4>
                <h5>{this.props.comment.videoId}</h5>
                <div>{this.props.comment.note}</div>
            </li>
        )
    }
}

class NewEntryForm extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={this.props.data.title}  onChange={this.props.handleChange} required />
                </div>
                <div>
                    <label htmlFor="videoId" />
                    <input type="hidden" id="videoId" value={this.props.data.videoId} />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" value={this.props.data.date}  onChange={this.props.handleChange} required />
                </div>
                <div>
                    <label htmlFor="note">Note:</label>
                    <textarea id="note" value={this.props.data.note} onChange={this.props.handleChange} required ></textarea>
                </div>
                <div>
                    <input type="submit" value="Add New Note" />
                </div>
            </form>
        )
    }
}


class Comments extends React.Component {
    state = {
        comments: [],
        title: "",
        videoId: this.props.commentsId,
        date: "",
        note: ""
    }

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

handleChange = (event) => {
    this.setState({ 
        [event.target.id]: event.target.value
    });
}

handleSubmit = (event) => {
    event.preventDefault();
    fetch("/youtube", {
        body: JSON.stringify({ 
            title: this.state.title,
            videoId: this.state.videoId,
            date: this.state.date,
            note: this.state.note
            }),
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then((createdComment) => {
            return createdComment.json();
        })
        .then((comment) => {
            this.setState({
                title: "",
                date: "",
                note: "",
                comments: [comment, ... this.state.comments]
            });
        })
        .catch(error => console.log(error));
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
        })
    });
}


    
    render() {
        return (
            <React.Fragment>
                <h3>Comments</h3>
                <h4>{this.state.videoId}</h4>
                <NewEntryForm data={this.state} handleChange={this.handleChange}  handleSubmit={this.handleSubmit} />
                {/* <form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value="" />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" value="" />
                    </div>
                    <div>
                        <label htmlFor="body">Note:</label>
                        <textarea id="body" value=""></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Edit Note" />
                    </div>
                </form> */}
                <ul>
                    {this.state.comments.map((comment, i) => {
                        return (
                            <CommentEntry  comment={comment} index={i} deleteComment={this.deleteComment}/>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}