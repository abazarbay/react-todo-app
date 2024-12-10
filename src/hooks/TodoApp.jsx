import React, { useState } from 'react';
import useTodo from './useTodo';

function TodoApp() {
    const {
        tasks,
        task,
        setTask,
        addTask,
        toggleTask,
        deleteTask,
        clearCompleted,
    } = useTodo();


    return (
        <div>
            <h1>To-Do List</h1>
            <div className="task-input">
                <input
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task..."
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((t, i) => (
                    <li key={i} className={t.completed ? 'completed' : ''}>
                        <span onClick={() => toggleTask(i)}>{t.text}</span>
                        <div className="task-actions">
                            <button onClick={() => toggleTask(i)}>
                                {t.completed ? 'Undo' : 'Completed'}
                            </button>
                            <button onClick={() => deleteTask(i)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;