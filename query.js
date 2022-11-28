let answers;
let replace;
const user = "The history of this country is fascinating";
const getSuggestions = async (word = "hello", params = "rel_syn=", url = "https://api.datamuse.com/words?") => {
  const endpoint = url + params + word;
  try {
    const response = await fetch(endpoint);
    if(response.ok) {
      const jsonResponse = await response.json();
      return(jsonResponse);
    }
  }
  catch(error) {
    console.log(error);
  }
}
const set = async (word, params, url) => {
  answers = await getSuggestions(word, params, url);
  if(answers.length > 2) {
    for(let i = 0; i < 3; i++) {
      console.log(word + ": " + answers[i]["word"]);
    }
  }
}
user.split(" ").forEach(i => set(i));