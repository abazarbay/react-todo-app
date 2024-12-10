import { useState } from 'react';

function useTodo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask('');
        }
    };

    const toggleTask = (index) => {
        setTasks(
            tasks.map((t, i) =>
                i === index ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const clearCompleted = () => {
        setTasks(tasks.filter((t) => !t.completed));
    };

    return {
        tasks,
        task,
        setTask,
        addTask,
        toggleTask,
        deleteTask,
        clearCompleted,
    };
}

export default useTodo;