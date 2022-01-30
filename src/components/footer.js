import logo from '../img/logo.svg';
function Footer() {
    return (
        <footer class="">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div class="flex justify-center space-x-6 md:order-2">
            <p class="text-center text-base text-green-800">
                &copy; 2004 - 2022, Агентство «Автодрайв»
            </p>
          </div>
          <div class="mt-8 md:mt-0 md:order-1 w-1/3">
                <img src={logo} alt="logo" />
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;

  