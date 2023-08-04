import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../TodosAction/TodosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((todo) => todo);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllTodos())
   },[])

  console.log(todos);

  return (
    <div>
      {isLoading && <h1> Loading... </h1>}
      {error && <h1> {error} </h1>}
      {!isLoading && todos &&
        todos.map((todo) => (
          <article key={todo.id} className="border p-5 my-4 flex gap-3">
            <h2> {todo.userId}. </h2>
            <p> {todo.title} </p>
          </article>
        ))}
    </div>
  );
};

export default Todos;
