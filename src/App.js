import './App.css';
import AddCourse from './components/AddCourse/AddCourse';
import MiddleContainer from './components/MiddleContainer/MiddleContainer';

function App() {
  return (
    <div className='container'>
      <AddCourse></AddCourse>
      <MiddleContainer></MiddleContainer>
    </div>
  );
}

export default App;
