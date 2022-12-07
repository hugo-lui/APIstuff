const sqlite3 = require("C://Users/hugo_/node_modules/sqlite3");
const db = new sqlite3.Database("./db.sqlite");
function create() {
        db.serialize(() => {
        db.run("drop table if exists data");
        db.run("create table data (original text, synonym text)");
    });
}
function insert(original, synonym) {
    db.run("insert into data (original, synonym) values ($original, $synonym)",
    {
        $original: original,
        $synonym: synonym
    }, (error) => {
        error ? console.log(error) : console.log("Inserted '" + original + "' and '" + synonym + "' into the database");
    });
}
function retrieveAll() {
    db.all("select * from data", (error, row) => {
        error ? console.log(error) : console.log(row);
    });
}
function retrieveSome(original) {
    db.all("select * from data where original = $original",
    {
        $original: original
    }, (error, row) => {
        error ? console.log(error) : console.log(row);
    });
}
module.exports = {
    create,
    insert,
    retrieveAll,
    retrieveSome
}