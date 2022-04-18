
import './App.css';
import Addtask from './compoents/Addtask';
import Task from './compoents/Task';

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="">TO DO TASKS LIST</h1>
      <Addtask />
      <Task />
      </div>
    </div>
  );
}

export default App;
