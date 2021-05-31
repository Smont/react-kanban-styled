import React, { useState } from "react";
import "./Tasklist.css";
import PropTypes from "prop-types";

import TaskItem from "../TaskItem/TaskItem";

// {TITLE} => INVES DE INCLUIR UMA "PROP" QUALQUER, EXPECIFICA O ITEM A SER PEGO NO EXPORT/IMPORT
function Tasklist({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    </div>
  );
}

// CRIA A REGRA PARA POPULAR CORRETAMENTE A PROP
Tasklist.proptypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};

export default Tasklist;
