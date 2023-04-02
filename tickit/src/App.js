import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import {useState} from 'react'
import {AppContext} from './Context/AppContext'

function App() {

  const [search, setSearch] = useState ({
    category:'', query:'', formContent:''
  })


  return (
    <div className="App">
      <AppContext.Provider value = {{search, setSearch}}> 
      <header className="App-header">
        {/* <Header/> */}
      </header>
      <main>
        <Main/>
      </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
