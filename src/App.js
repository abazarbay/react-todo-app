import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import AddToCalendar from './pages/AddToCalendar';
import useTodo from './hooks/useTodo';

function App() {
  const {
    tasks,
    task,
    setTask,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  } = useTodo();

  const hasCompletedTasks = tasks.some((t) => t.completed);

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="App">
                  <h1>To-Do List</h1>
                  <div className="task-input">
                    <input
                      type="text"
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      placeholder="Enter a task..."
                    />
                    <button onClick={addTask}>Add Task</button>
                  </div>
                  <div className="images-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
                    <img
                      src="assets/img1.webp" // Замените на нужный URL картинки
                      alt="Placeholder 1"
                      style={{ width: '450px', height: '300px' }}
                    />
                    <img
                      src="assets/img2.webp" // Замените на нужный URL картинки
                      alt="Placeholder 2"
                      style={{ width: '450px', height: '300px' }}
                    />
                  </div>
                  <ul>
                    {tasks.map((t, index) => (
                      <li key={index} className={t.completed ? 'completed' : ''}>
                        <span>{t.text}</span>
                        <div className="task-actions">
                          <button onClick={() => toggleTask(index)}>
                            {t.completed ? 'Undo' : 'Completed'}
                          </button>
                          <button onClick={() => deleteTask(index)}>Delete</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {hasCompletedTasks && (
                    <button onClick={clearCompleted} style={{ marginTop: '10px' }}>
                      Clear Completed Tasks
                    </button>
                  )}
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/addtocalendar" element={<AddToCalendar />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
