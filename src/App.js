import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Messages from './components/messages';
import Footer from './components/footer';
import {useEffect} from 'react'
import axios from 'axios'
function App() {



  // make state here 


  console.log(process.env.REACT_APP_KEY)

  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/todos').then((response) => {
  //     let arrayOfProducts = response.data;
   
  //     let onlyTen = arrayOfProducts.splice(0,9)
  //     console.log(onlyTen)
  //     // put this array into state
  //     // setState  setTodos
  //   })
  // }, [])


  // make JSX

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="dashboard">
            <Sidebar />
            <Messages />
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
