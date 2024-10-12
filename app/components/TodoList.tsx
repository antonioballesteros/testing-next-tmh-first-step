"use client";

import { addItemToArray, removeItemFromArray } from "@/utils/array";
import { useState } from "react";
import Input from "./ui/Input";

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
        <Input
          value={newTask}
          onChange={(value) => setNewTask(value)}
          placeholder="filter products by name"
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
