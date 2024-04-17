import style from './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import TodosPage from "./pages/todosPage/TodosPage";
function App() {
  return (
      <div className='container'>
          <AboutPage/>
          <MainPage/>
          <TodosPage/>
      </div>
  );
}

export default App;
