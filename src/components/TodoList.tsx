interface TodoListProps {
  item: { text: string };
}

const TodoList = ({ item }: TodoListProps) => {
  return (
    <li className="list-none border-[#343a40] border-b-2 pb-2 last:border-b-0">
      {item.text}
    </li>
  );
};

export default TodoList;
