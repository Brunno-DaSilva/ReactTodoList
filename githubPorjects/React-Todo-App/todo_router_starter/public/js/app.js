class App extends React.Component {
    state = {
        description: "",
        todos: []
    };

    componentDidMount() {
        fetch("/todos")
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(response =>
                this.setState({
                    todos: response
                })
            );
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        fetch("/todos", {
            body: JSON.stringify({ description: this.state.description }),
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(createdTodo => {
                return createdTodo.json();
            })
            .then(jsonedToDo => {
                this.setState({
                    description: "",
                    todos: [jsonedToDo, ...this.state.todos]
                })
            })
            .catch(error => console.log(error));
    };

    deleteToDo = (id, index) => {
        // console.log(id, index);
        fetch('todos/' + id, {
            method: 'DELETE'
        })
            .then(data => {
                this.setState({
                    todos: [
                        //Slicing everything before and after the item to be deleted
                        ...this.state.todos.slice(0, index),
                        ...this.state.todos.slice(index + 1)
                    ]
                })
            })
    }

    updateToDo = (todo, index) => {
        todo.complete = !todo.complete
        fetch('todos/' + todo._id, {
            body: JSON.stringify(todo),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(updatedToDo => updatedToDo.json())
            .then(jsonedToDo => {
                fetch('/todos')
                    .then(response => response.json())
                    .then(todos => {
                        this.setState({ todos: todos })
                    })
            })
    }


    render() {
        return (
            <div>
                <div className="main-title">
                    <h1>Todo List</h1>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        value={this.state.description}
                        id="description"
                        onChange={this.handleChange}
                    />
                    <input type="submit" />
                </form>
                <br />
                <br />
                <div className="">
                    <p><i>{this.state.description}</i></p>
                </div>
                <br />
                <br />

                <div className="table-container">
                    <table>
                        <tr>
                            <th>Icon</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                        <tbody>
                            {this.state.todos.map((todo, index) => {
                                return (
                                    <tr>
                                        <td className={todo.complete ? 'complete' : ''}> {todo.description} </td>
                                        <td onClick={() => this.updateToDo(todo, index)} className={todo.complete ? 'complete' : ''}> {todo.complete ? 'unfinish' : "complete"} </td>
                                        <td onClick={() => this.deleteToDo(todo._id, index)}>
                                            <i class="fas fa-trash-alt"></i>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

