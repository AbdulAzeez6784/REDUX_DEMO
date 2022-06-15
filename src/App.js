import logo from './logo.svg';
import './App.css';
import CakeContainer from "./components/CakeContainer"
import {Provider} from 'react-redux'
import store from './Redux/store';
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      <CakeContainer />
      <IceCreamContainer />
      <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
