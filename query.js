const database = require("./database.js");
let answers;
let replace = new Map();
const user = "This piece of art is very beautiful";
const choice = "create";
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
const setSynonyms = async (num, word, params, url) => {
  answers = await getSuggestions(word, params, url);
  if(answers.length !== 0) {
    for(let i = 0; i < num; i++) {
      if(answers.length > i) {
        replace.set(answers[i]["word"], word);
      }
    }
  }
  if(word === user.split(" ")[user.split(" ").length - 1]) {
    for(let i = 0; i < num; i++) {
      let out = user;
      for(let j of replace.keys()) {
        if(out.includes(replace.get(j))) {
          out = out.replace(replace.get(j), j);
          replace.delete(j);
        }       
      }
      //database.insert(user, out);
      console.log(out);
    }
  }
}
if(choice === "create") {
  database.create();
}
else if(choice === "insert") {
  user.split(" ").forEach(i => setSynonyms(3, i));
}
else if(choice === "retrieveAll") {
  database.retrieveAll();
}
else if(choice === "retrieveSome") {
  database.retrieveSome(user);
}
else if(choice === "deleteOriginal") {
  
}
else if(choice === "deleteSynonym") {
  
}