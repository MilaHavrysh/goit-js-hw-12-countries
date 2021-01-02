import './notifications.js'
import { error } from "@pnotify/core";

const fetchCountries = (searchQuery) => {
    let name = searchQuery.target.value
    
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    return fetch(url)
        .then(response => response.json())                   
        .catch(() => {
                const errorMessage = error({
                text: "Введите название!",
                delay: 500
            });
        })
}
 
export default fetchCountries




