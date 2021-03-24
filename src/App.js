import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { SideBar } from './Components/SideBar';
import { MainContent } from './Components/MainContent';


function App() {
  //EXAMPLE
  // const dispatch = useDispatch();
  // const testData = useSelector(state => state.app.testString);

  // const increment = () => {
  //   dispatch({type: "INCREMENT", payload: "NEW STRING!"})
  // }

  const darkTheme = useSelector(state => state.app.darkTheme);

  return (
    <div className="mainContainer">
        <SideBar darkTheme={darkTheme} />
        
        <MainContent darkTheme={darkTheme} />
    </div>
  );
}

export default App;
