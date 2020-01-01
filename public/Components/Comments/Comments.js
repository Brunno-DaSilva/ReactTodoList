console.log("Hello from comments!");
class Comments extends React.Component {
    state = {
        comments: [],
        title: "",
        videoId: this.props.commentsId,
        date: "",
        body: ""
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
                <form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" />
                    </div>
                    <div>
                        <label htmlFor="body">Note:</label>
                        <textarea id="body"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Add New Note" />
                    </div>
                </form>
                <ul>
                    {this.state.comments.map((comment, i) => {
                        return (
                            <li>
                               
                                <form>
                                    <input type="submit" value="Edit" />
                                </form>
                                <button onClick={() => this.deleteComment(comment._id, i)}>Delete</button>
                                <h3>{comment.title}</h3>
                                <h4>{comment.date}</h4>
                                <div>{comment.body}</div>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}