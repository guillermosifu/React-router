
import './App.css'
import Router from './router/Router'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
     <Header/>
     <Router/>
    </BrowserRouter>
  )
}

export default App
