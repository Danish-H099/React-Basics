import React, { useState, useEffect } from "react";

let globalID = 0;

function Todolist() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [day, setDay] = useState('');

    useEffect(() => {
        // Load todos from local storage when the component mounts
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            const parsedTodos = JSON.parse(savedTodos);
            setTodos(parsedTodos);
            // Restore globalID to avoid collisions
            globalID = parsedTodos.length > 0 ? Math.max(...parsedTodos.map(todo => todo.ID)) + 1 : 0;
        }

        function updateClock() {
            const time = new Date();
            const options = {
                second: "numeric",
                minute: "numeric",
                hour: "numeric",
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            };
            const formattedDate = time.toLocaleDateString('en-US', options);
            setDay(formattedDate);
        }

        updateClock();
        const intervalId = setInterval(updateClock, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // Save todos to local storage whenever they change
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function addItem(event) {
        event.preventDefault();
        if (!task.trim()) return; // Avoid adding empty tasks
        setTodos(oldTodos => {
            setTask("");
            return [...oldTodos, { todo: task, ID: globalID++ }];
        });
    }

    function deleteItem(itemID) {
        setTodos(oldTodos => oldTodos.filter(items => items.ID !== itemID));
    }

    function toggleChecked(itemID) {
        setTodos(oldTodos =>
            oldTodos.map(todo =>
                todo.ID === itemID ? { ...todo, checked: !todo.checked } : todo
            )
        );
    }

    return (
        <div className="Todolist">
            <h2>Create Your Todolist</h2>
            <h3>{day}</h3>
            <form onSubmit={addItem}>
                <input
                    type="text"
                    value={task}
                    onChange={e => {
                        setTask(e.target.value);
                    }}
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {todos.map((item) => (
                    <div className="List" key={item.ID}>
                        <li
                            onClick={() => toggleChecked(item.ID)}
                            style={{ textDecoration: item.checked ? 'line-through' : 'none'}}
                        >
                            {item.todo}
                        </li>
                        <button onClick={() => deleteItem(item.ID)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;

/*

Rendering Process

Mounting:
    • State variables (task, todos, day) are initialized.
    • useEffect hooks are executed:
        • Loads todos from local storage and sets them into the state.
        • Initializes and starts the clock interval.
    • JSX is evaluated and rendered into the DOM.

Updating:
    • State updates (e.g., todos state change when adding an item) trigger a re-render.
    • useEffect hooks execute based on dependency changes:
        • Updates local storage with the new todos.
    • JSX is re-evaluated to reflect the updated state.
    • React updates the DOM efficiently to match the new JSX.

Unmounting:
    • Cleanup functions from useEffect are called (e.g., clearing intervals).


*/