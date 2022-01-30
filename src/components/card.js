import React, { useState, useEffect} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/*
import { FaBitbucket } from 'react-icons/fa';*/
import Button from './Button';
import { faEuroSign, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import cryptocurrency from '../img/crypto-currency.jpg';
import buterin from '../img/buterin.jpg';

function Card(props) {

    const [priceBtnUSD, setPriceBtcUSD] = useState(null);
    const [priceBtnEUR, setPriceBtcEUR] = useState(null);
    const [priceEthUSD, setPriceEthUSD] = useState(null);
    const [priceEthEUR, setPriceEthEUR] = useState(null);
    const [loading, setLoading] = useState(true);
    //...
    useEffect(() => {
      fetch("https://blockchain.info/ticker")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPriceBtcUSD(data.USD.last); 
          setPriceBtcEUR(data.EUR.last); 
          setLoading(false);       
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    useEffect(() => {
      fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPriceEthUSD(data.USD); 
          setPriceEthEUR(data.EUR); 
          setLoading(false);       
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    

    return (
      <section class="overflow-hidden ">
        <div class="relative mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20 "> 
          <div class="relative lg:flex lg:items-start items-center justify-around flex-col xl:flex-row">
            <Currency name="Сатоси Накамото" position="Разработчик или группа разработчиков протокола криптовалюты биткойн" photo={cryptocurrency} country="Япония" currency ="Bitcoin" year="2008" sign="BTC" euro={loading ? "LOADING" : priceBtnEUR} dollar = {loading ? "LOADING" : priceBtnUSD}/>
            <Currency name="Виталий Бутерин" position="Разработчик" photo={buterin} country="Россия" currency ="Ethereum" year="2013" sign="ETH" euro={loading ? "LOADING" : priceEthEUR} dollar = {loading ? "LOADING" : priceEthUSD}/>
          </div>
        </div>
      </section>
    )
}
// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });

function Currency(props){
  const [isFliped, setFliped] = useState(true);
  
  const toggleClass = () => {
    setFliped(!isFliped);
  }
  return(
    <div class="flex lg:bg-gradient-to-r from-emerald-800 to-slate-800 border-slate-800 lg:border-2 rounded-lg  mb-8 mx-auto">
              <div class="w-full perspective-38 lg:w-84 h-80 lg:flex">
                <div className={'w-full h-full relative duration-1000 preserve-3d lg:block lg:flex-shrink-0 bg-gradient-to-r from-emerald-800 to-slate-800 border-slate-800 border-2 rounded-lg lg:border-0 lg:bg-none ' + (isFliped ? '' : 'rotateY-180')} onClick={toggleClass} >
                  <div class="absolute w-full backface-hidden h-full">
                    <div class="rounded-l-lg hidden lg:flex">
                      <img class="rounded-full mx-auto" src={props.photo} alt="" />
                    </div>
                    <div class="w-full lg:flex lg:w-80 h-80 rounded-r-lg ">
                        <div class="h-full p-4">
                          <div class="h-full flex lg:hidden flex-col justify-items-center justify-between prose mx-auto">
                            <div class=" text-2xl leading-9 font-medium text-gray-900 prose">
                              <h2>{props.currency} ({props.sign})</h2>
                            </div>        
                            <Button size="xl" text="Подробнее" onClick={toggleClass}/>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="absolute h-full w-full backface-hidden rotateY-180 p-4 rounded-l-lg bg-transparent" >
                    <div class="relative">
                          <div class="text-2xl leading-9 font-medium text-gray-900 prose">
                            <h2>Информация</h2>
                              <div class="">
                                <p>Дата создания: {props.year} год</p>
                                <p>Основатель: {props.name}</p>
                              </div>
                          </div>
                    </div>
                      <div class="h-8">
                          <ul className={(isFliped ? 'hidden' : 'flex space-x-5')} onClick={toggleClass}>
                              <li>
                                <div>
                                  <FontAwesomeIcon icon={faEuroSign} /> {props.euro}
                                </div>
                              </li>
                              <li>
                                <div>
                                  <FontAwesomeIcon icon={faDollarSign} /> {props.dollar}
                                </div>
                              </li>
                              <li>
                                  <a href={props.BitbucketUrl} class="text-gray-400 hover:text-gray-500">
                                      <span class="sr-only">Bitbucket</span>
                                  </a>
                                  <div></div>
                              </li>
                          </ul>
                      </div>
                  </div>
                </div>
              </div>
              <div class="w-full hidden lg:flex lg:w-80 h-80 rounded-r-lg ">
                <div class="h-full p-4">
                  <div class="h-full flex flex-col justify-items-center justify-between prose">
                    <div class="text-2xl leading-9 font-medium text-gray-900 prose">
                      <h2>{props.currency} ({props.sign})</h2>
                    </div>        
                    <Button size="xl" text="Подробнее" onClick={toggleClass}/>
                  </div>
                </div>
              </div>
            </div>

  )
}

export default Card;