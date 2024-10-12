import TodoList from "@/app/components/TodoList";
import Header from "@/app/components/ui/Header";

export default function Todo() {
  return (
    <main className="p-4 rounded-lg">
      <Header text="TodoList" />
      <TodoList />
    </main>
  );
}
