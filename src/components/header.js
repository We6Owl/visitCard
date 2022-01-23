import logo from '../img/logo.svg';
function Header(link) {
    return (
      <header class="">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div class="flex items-center">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img class="h-10 w-auto" src={logo} alt="" />
              </a>
              <div class="hidden ml-10 space-x-8 lg:block">
                <a href="/gallery/" class="text-base font-medium text-white hover:text-indigo-50">
                 Галерея
                </a>

              </div>
            </div>
          </div>
          <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            <a href="/gallery/" class="text-base font-medium text-white hover:text-indigo-50">
              Галерея
            </a>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;