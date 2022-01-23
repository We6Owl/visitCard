import { AiOutlinePhone, AiFillMail } from 'react-icons/ai';
import { FaBitbucket } from 'react-icons/fa';
import Advantagecard from './advantagecar';
function Contentdata(props) {
    return (
    <section class="bg-white overflow-hidden">
      <div class="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20"> 
        <div class="relative lg:flex lg:items-center">
            <div class="hidden lg:block lg:flex-shrink-0">
                <img class="h-64 w-64 rounded-full xl:h-80 xl:w-80" src={props.photo} alt="" />
                <div>
                    <ul role="list" class="flex space-x-5">
                        <li>
                          <a href={props.twitterUrl} class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Twitter</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={props.linkedinUrl} class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">LinkedIn</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                            </svg>
                          </a>
                        </li>
                        <li>
                            <a href={props.BitbucketUrl} class="text-gray-400 hover:text-gray-500">
                                <span class="sr-only">Bitbucket</span>
                            <FaBitbucket />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="relative lg:ml-10">
                <blockquote class="relative">
                    <div class="text-2xl leading-9 font-medium text-gray-900">
                        <p>Контакты</p>
                        <div class="">
                            <div class="">
                                <AiOutlinePhone />
                                <a href="tel:+79015953544" class="ml-4">+7 (901) 595-35-44</a> 
                            </div>
                            <div class="">
                                <AiFillMail />
                                <a href="mailto:vladimir.sjj@gmail.com" class="ml-4">vladimir.sjj@gmail.com</a>
                            </div>
                            
                        </div>
                    </div>
                    <footer class="mt-8">
                        <div class="flex">
                        <div class="flex-shrink-0 lg:hidden">
                            <img class="h-12 w-12 rounded-full" src={props.photo} alt="" />
                        </div>
                        <div class="ml-4 lg:ml-0">
                            <div class="text-base font-medium text-gray-900">{props.name}</div>
                            <div class="text-base font-medium text-indigo-600">{props.position}</div>
                        </div>
                        </div>
                    </footer>
                </blockquote>
            </div>
            <Advantagecard></Advantagecard>
        </div>
      </div>
    </section>
    );
  }
  
  export default Contentdata;