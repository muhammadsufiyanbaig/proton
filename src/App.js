import React,{useEffect} from 'react';
import Routing from "./Routing"
import store from "./store"
import ReactGA from 'react-ga';
import { Provider } from "react-redux";



function initializeReactGA() {
  ReactGA.initialize('G-JPR0X23XJR');
  ReactGA.pageview(window.location.pathname + window.location.search);
}



function App() {
  useEffect(()=>{

    initializeReactGA();
  
  },[])

  return (
    <div>
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  )
}

export default App;
