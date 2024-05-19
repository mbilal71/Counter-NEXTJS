"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl font-bold my-5 text-gray-900">
        Todo Application
      </h1>
      <div className="flex flex-col justify-center items-center w-1/2 gap-y-2.5">
        <form
          className="flex justify-center items-center w-full gap-x-2.5"
          onSubmit={(e) => {
            e.preventDefault();
            setTodos([...todos, todo]);
            setTodo("");
          }}
        >
          <Input
            className="border-2 border-black"
            placeholder="Enter your todo. e.g: I'll have a fried egg for breakfast..."
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <Button type="submit">Add Todo</Button>
        </form>
        <div className="self-start my-5 w-full">
          <h1 className="font-bold text-center">My Todos</h1>
          <hr className="border-black" />
          <ul className="flex flex-col justify-center items-center w-full gap-y-2.5 list-disc py-5">
            {todos.map((myTodo, index) => (
              <li
                className="flex list-disc border border-black/50 justify-between items-center px-2 w-full gap-x-2.5"
                key={index}
              >
                <span>{myTodo}</span>
                <div>
                  <Button
                    className="rounded-full text-xs bg-red-600"
                    onClick={() =>
                      setTodos(todos.filter((_, i) => i !== index))
                    }
                  >
                    <Trash />
                  </Button>
                
                  <Button
                    className="rounded-full text-xs bg-green-600"
                    onClick={() =>
                      setTodos(
                        todos.map((todo, i) =>
                          i === index
                           ? prompt("Edit your todo", todo) || todo
                            : todo
                        )
                      )
   
                 }
                  >
                    <Pencil />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
