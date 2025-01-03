import './App.css'
// import Hijo from './components/Hijo';
// import List from './components/List';
import { UserProvider } from './providers/UserProvider';
// import ExampleReducer from './components/ExampleReducer';
import Task from './components/tasks/Task';
// import Cat from './components/Cat';


function App() {

  return (
    <>
    <UserProvider>

        {/* <Hijo /> */}
        {/* <List />  */}
        {/* <ExampleReducer /> */}
        {/* <Cat /> */}
        <Task />

    </UserProvider>
    </>
  )
}

export default App
