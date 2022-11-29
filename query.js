let answers;
let replace = new Map();
let filling = true;
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
const set = async (num, word, params, url) => {
  answers = await getSuggestions(word, params, url);
  if(answers.length !== 0) {
    for(let i = 0; i < num; i++) {
      answers.length > i ? replace.set(answers[i]["word"], word) : replace.set(answers[0]["word"], word);
    }
  }
  if(replace.size === 13) {
    for(let i = 0; i < num; i++) {
      let out = user;
      for(let j of replace.keys()) {
        if(out.includes(replace.get(j))) {
          out = out.replace(replace.get(j), j);
          replace.delete(j);
        }       
      }
      console.log(out);
    }
  }
}
user.split(" ").forEach(i => set(5, i));