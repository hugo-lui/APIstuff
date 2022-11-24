const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';
let user = "hello"
const getSuggestions = async () => {;
  const endpoint = url + queryParams + user;
  try {
    const response = await fetch(endpoint);
    if(response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  }
  catch(error) {
    console.log(error);
  }
}
getSuggestions();