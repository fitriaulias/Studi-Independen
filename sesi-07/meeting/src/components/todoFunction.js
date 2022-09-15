import React, { useEffect, useState } from 'react';

function TodoFunction() {
    const [ todos, setTodos ] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((resp) => resp.json())
        .then((respJson) => {
            setTodos(respJson.slice(0, 5))
        })
        .catch((err) => console.log(err))
    })

    return (
        <div>
            <table>
                <tbody>
                    {todos.map((todo, index) => {
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
                </tbody>
            </table>
        </div>
    )
}

export default TodoFunction;