
import StandardNavMenu from './StandardNavMenu';


function Header(link) {
    return (
      <header class="">
        <StandardNavMenu />
      <Article />
      </header>
    );
  }




function Article() {
  return (
      <article class="prose"> 
        <h1>Криптовалюта</h1>
      </article>
  );
}

  
  export default Header;