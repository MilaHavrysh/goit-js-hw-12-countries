import './styles.css';
import severalCountries from './templates/severalCountries.hbs'
import oneCountry from './templates/oneCountry.hbs'
import './js/notifications.js'
import fetchCountries from './js/fetchCountries.js'
import { info } from '@pnotify/core';
//import { error } from "@pnotify/core";
const input = document.querySelector('input')
const ulteg = document.querySelector('[data-action="state"]')
 
const findCountries = (searchQuery) => {
   ulteg.innerHTML=""
    fetchCountries(searchQuery)
        .then((country) => {
            let errorMessage
            if (country.length > 10) {
                errorMessage = info({
                    text: "Уточните название!",
                    delay: 500
                })
            }
            else if (country.length < 10 & country.length > 1) {
                const showSeveralCountries = severalCountries(country)
                ulteg.insertAdjacentHTML('afterbegin', showSeveralCountries)
            }
            else if (country["status"] == 404) {
                console.log(country)
                errorMessage = info({
                    text: "Нет такой страны!",
                    delay: 500
                })
            }
                        
            else {
                const showOneCountry = oneCountry(country)
                ulteg.insertAdjacentHTML('beforeend', showOneCountry)
            }
            
            }
        )
}       

input.addEventListener(
    'input', 
    _.debounce((searchQuery) => {
        findCountries(searchQuery)
  }, 500, false),
);

//---------- Вся функция---------//
/*const fetchCountries = (searchQuery) => 
  {  let name = searchQuery.target.value
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    return fetch(url)
        .then(response => response.json())
        .then((country) => {
            console.log(country, "1", country["status"])
            if (country.length > 10) {
                console.log(country.length, "2")
                const errorMessage = error({
                    text: "Уточните название!",
                    delay: 1000
                })
            }
            else if (country.length < 10 & country.length > 1) {
                console.log(country, "3");
                const showSeveralCountries = severalCountries(country)
                ulteg.insertAdjacentHTML('afterbegin', showSeveralCountries)
            }
            else if (country["status"] == 404) {
                console.log(country.length, "2")
                const errorMessage = error({
                    text: "Нет такой страны!",
                    delay: 1000
                })
                
            }
            
            else {
                console.log(country.length);
                const showOneCountry = oneCountry(country)
                ulteg.insertAdjacentHTML('beforeend', showOneCountry)
            }
        })
        .catch((country) => {
            console.log(country, "8")
            //if (country.length > 10) {
            console.log(country.length)
            const errorMessage = error({
                text: "Введите название!",
                delay: 1000
            });
        })
}*/