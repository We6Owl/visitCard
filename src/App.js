import './App.css';
import Header from './components/header';
import CardFlip from './components/cardflip';
import Contentdata from './components/contentdata';
import Footer from './components/footer';
import vladimirsavin from './img/vladimirsavin.jpg';


const items = []
const elements = ['one', 'two', 'three', '4'];
for (const [index, value] of elements.entries()) {
  items.push(<CardFlip key={index} />)
}

function App() {
  return (
    <div className="App">
      <div class="container">
        <Header></Header> 
        <div class="flex row justify-around">
          {items}
        </div>
         
        <Contentdata name="Владимир Савин" position="Контент-менеджер, Автодрайв" photo={vladimirsavin} twitterUrl={'https://twitter.com/naxi03/'} linkedinUrl={'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D1%81%D0%B0%D0%B2%D0%B8%D0%BD-188b7a86/'} BitbucketUrl = {'https://bitbucket.org/WebOwl/'}></Contentdata>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;