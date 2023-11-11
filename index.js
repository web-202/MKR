const api = 'https://anapioficeandfire.com/api/characters/583 '

const gender = document.getElementById('gender')
const culture = document.getElementById('culture')
const born = document.getElementById("born")
const died = document.getElementById('died') 
const titles = document.getElementById('titles')
const aliases = document.getElementById('aliases')
const father = document.getElementById('father')
const mother = document.getElementById('mother')
const spouse = document.getElementById('spouse')
const books = document.getElementById('books')
const povBooks = document.getElementById('povBooks')
const playedBy = document.getElementById('playedBy')
const title = document.getElementById('title')

const customHeaders = {
    'Authorization': 'Bearer YourAccessToken',
    'Custom-Header': 'Custom-Value',
  };
  
const requestConfig = {
    method: 'GET',
    headers: customHeaders,
    mode: 'cors'
};

const loadData = async (url, requestConfig) => {
    return fetch(url, requestConfig)
       .then(function (response) {
         if (response.ok) {
           return response.json();
         } else {
           throw new Error("Request failed with status: " + response.status);
         }
       })
       .then(function (data) {
         return data
       })
       .catch(function (error) {
         return error
       });
   }   


   const setDataAbout = (data_character) => {
        title.textContent = data_character.name
        gender.textContent = data_character.gender
        culture.textContent = data_character.culture
        born.textContent = data_character.born
        died.textContent = data_character.died
        titles.textContent = data_character.titles
        aliases.textContent = data_character.aliases
        father.textContent = data_character.father
        mother.textContent = data_character.mother
        spouse.textContent = data_character.spouse
        books.textContent = data_character.books
        povBooks.textContent = data_character.povBooks
        playedBy.textContent = data_character.playedBy
}

const defaultCharacter = async () => {
    const dom_character = document.getElementById(`character_1`)
    const data_character = await loadData(api, requestConfig)

    setDataAbout(data_character)
}

defaultCharacter()