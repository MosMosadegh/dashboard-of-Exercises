import Counter from "./Components/CustomHooks/Counter";
import FetchPost from "./Components/CustomHooks/FetchPost";
import LocalStorage from "./Components/CustomHooks/LocalStorage";
import LoginForm from "./Components/CustomHooks/LoginForm";
import ToggleNoteList from "./Components/HOCs/Toggle/ToggleNoteList";
import Pagination from "./Components/pagination/Pagination";
import TodoList from "./Components/useMemo/TodoList";
import Timer from "./Components/useRef/Timer";
import QuestionApp from "./Components/HOCs/QuestionEX/QuestionApp";

let routes = [
    {path: '/counter', element: <Counter />},
    {path: '/fetchPost', element: <FetchPost />},
    {path: '/localStorage', element: <LocalStorage />},
    {path: '/login', element: <LoginForm />},
    {path: '/todoList', element: <TodoList />},
    {path: "/timer", element: <Timer />},
    {path: "/pagination", element: <Pagination />},
    {path: "/toggle", element: <ToggleNoteList />},
    {path: "/question", element: <QuestionApp />},

]

export default routes