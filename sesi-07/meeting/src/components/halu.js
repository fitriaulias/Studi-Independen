import React from 'react';

class Halu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            users: [],
            isLoading: true
        };
    }

    //Karena mau ngambil user dicek dulu panjangnya sama apa ga
    //behavior dari react yang selalu rerender setiap ada perubahan
    //dengan function ini bisa membatasi keadaan yang bisa mentrigger, default return valuenya true
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.users.length !== nextState.users.length) {
            return true;
        }

        return false;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.selectedState !== this.props.selectedState) {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((resp) => resp.json())
        .then((respJson) => {
            this.setState({
                isLoading: false,
                users: respJson.slice(0, 10) //ini yang bakal dicall
            })
            console.log('test')
        })
        .catch((err) => console.log(err))
    }}

    componentDidMount() {
        // eventData.removeEventListener()
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((resp) => resp.json())
            .then((respJson) => this.setState({ users: respJson.slice(0, 5)}))
            // .catch((err) => console.log(err))
    }

    componentWillUnmount() {
        // eventData.removeListener()
    }

    render() {
        const postTodo = this.state.users
        return(
            <div>
                <table>
                {postTodo.map((todo, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <p>{todo.id}</p>
                            </td>
                            <td>
                                <p>{todo.title}</p>
                            </td>
                        </tr>
                    )
                })}
                </table>
            </div>
        )
    }
}

export default Halu;