import React, { useState } from 'react';
import { useGetTasksQuery } from "../slices/apiSlices";

const ToDolist = () => {
    const [title, setTitle] = useState('');
    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTasksQuery();

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error! {error?.data?.error || "Unknown error"}</div>;

    return (
        <div>
            <h1>Todo List</h1>
            {isSuccess && (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            {todo.title} - {todo.completed ? "Done" : "Pending"}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ToDolist;
