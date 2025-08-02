"use client";

import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Page(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="px-4 py-3">
          <h1 className="text-xl font-bold text-white">할 일 관리</h1>
          <p className="text-sm text-gray-300 mt-1">
            완료: {completedCount} / 전체: {totalCount}
          </p>
        </div>
      </div>

      {/* Add Todo Section */}
      <div className="p-4 bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="새로운 할 일을 입력하세요..."
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[44px] text-base"
          />
          <button
            onClick={addTodo}
            className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors min-h-[44px] w-full sm:w-auto"
          >
            추가
          </button>
        </div>
      </div>

      {/* Todo List */}
      <div className="flex-1 p-4">
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-gray-300 mb-2">
              할 일이 없습니다
            </h2>
            <p className="text-gray-500">위에서 새로운 할 일을 추가해보세요!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-4 rounded-lg border transition-all min-h-[56px] ${
                  todo.completed
                    ? "bg-green-900/20 border-green-700/30 text-gray-400"
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                }`}
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`min-w-[32px] min-h-[32px] w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors touch-manipulation ${
                    todo.completed
                      ? "bg-green-600 border-green-600 text-white"
                      : "border-gray-400 hover:border-purple-500"
                  }`}
                >
                  {todo.completed && <span className="text-sm">✓</span>}
                </button>

                <span
                  className={`flex-1 text-base leading-relaxed ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.text}
                </span>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="min-w-[40px] min-h-[40px] w-10 h-10 rounded-full bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-red-300 transition-colors flex items-center justify-center text-xl touch-manipulation"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats Footer */}
      {todos.length > 0 && (
        <div className="bg-black/20 backdrop-blur-sm border-t border-white/10 p-3">
          <div className="flex justify-between text-sm text-gray-300">
            <span>남은 할 일: {totalCount - completedCount}개</span>
            <span>
              완료율:{" "}
              {totalCount > 0
                ? Math.round((completedCount / totalCount) * 100)
                : 0}
              %
            </span>
          </div>
        </div>
      )}
    </main>
  );
}
