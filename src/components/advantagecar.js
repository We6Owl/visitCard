// import logo from '../img/logo.svg';
function Advantagecard(link) {
    return (
        
        <div class="bg-white">
            <p class="text-2xl leading-9 font-medium text-gray-900 text-center">Ключевые навыки</p>
            <section class="w-full mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
                <h2 class="sr-only" id="contact-heading">Contact us</h2>
                    <div class="grid grid-rows-3 gap-y-20 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8">
                        <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                                    <component is="link.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <h3 class="text-xl font-medium text-gray-900">{ link.name }</h3>
                                <p class="mt-4 text-base text-gray-500">{ link.description }</p>
                            </div>
                            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="link.href" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
  }
  
  export default Advantagecard;