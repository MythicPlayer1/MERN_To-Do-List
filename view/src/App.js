
import Main from './page/main';
import './App.css';
import { useState } from 'react';
import { UserContext } from './utility/UserContext';


function App() {
    const [text, setText]=useState("")
    

  return (
    <div className="App">
      <UserContext.Provider value={{text, setText}}>
        <Main></Main>
      </UserContext.Provider>


    </div>
  );
}

export default App;
