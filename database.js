const sqlite3 = require("C://Users/hugo_/node_modules/sqlite3");
const db = new sqlite3.Database("./db.sqlite");
function create() {
        db.serialize(() => {
        db.run("drop table if exists data");
        db.run("create table data (original text, synonym text)");
        db.run("insert into data (original, synonym) values('1', 'hello')");
        db.get("select * from data", (error, row) => {
            error ? console.log(error) : console.log(row.original);   
        });
    });
}
module.exports = {
    create
}