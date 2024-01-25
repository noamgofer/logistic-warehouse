import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LogIn from './components/LogIn';
import { useState } from 'react';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Main from './components/Main';
import Manager from './components/Manager';

function App() {
  const [workers,setWorkers]=useState([])
  const [products,setProducts]=useState([
    {id:"11122",color:"green",forklift:false,onPlace:false},
    {id:"22554",color:"green",forklift:false,onPlace:false},
    {id:"66698",color:"blue",forklift:true,onPlace:false},
    {id:"78544",color:"red",forklift:false,onPlace:false},
    {id:"69875",color:"red",forklift:false,onPlace:false}
  ])
  const [currentUser,setCurrentUser]=useState("")

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signIn' element={<SignIn setWorkers={setWorkers} workers={workers}/>} />
        <Route path='/login' element={<LogIn workers={workers} setCurrentUser={setCurrentUser} setWorkers={setWorkers}/>}/>
        <Route path='/main' element={<Main currentUser={currentUser} products={products} setProducts={setProducts}/>} />
        <Route path='/manager' element={<Manager workers={workers}/> }/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
