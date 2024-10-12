"use client";

import { addItemToArray, removeItemFromArray } from "@/app/utils/test1";
import { useState } from "react";

export default function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    setTasks(addItemToArray(tasks, newTask));
    setNewTask("");
  };

  const removeTask = (i: number) => setTasks(removeItemFromArray(tasks, i));

  return (
    <div className="p-4 gap-8">
      <div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="bg-inherit border-2 border-neutral-700 p-2 rounded-lg"
        />
        <button className="pl-4" disabled={!newTask} onClick={() => addTask()}>
          Add
        </button>
      </div>

      <div>
        <ul className="gap-2">
          {tasks.map((task, i) => (
            <li key={i}>
              {task}
              <button className="pl-4" onClick={() => removeTask(i)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
