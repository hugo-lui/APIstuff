const getSuggestions = async (url = "https://api.datamuse.com/words?", params = "rel_jja=", user = "hello") => {;
  const endpoint = url + params + user;
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
export { getSuggestions };