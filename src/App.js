import './App.css';
import Header from './components/header';

import Card from './components/card';

import Footer from './components/footer';




function App() {
  return (
    <div className="App xl:h-screen bg-gradient-to-r from-green-800 to-white">
      <div class="container">
      <Header/>
      <Card/>
      <Footer />
      
      </div>
    </div>
  );
}



export default App;