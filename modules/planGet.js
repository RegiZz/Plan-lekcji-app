const Librus = require("librus-api")

let journal = new Librus();

let login = "";
let password = "";
let date = new Date;

const subjects = [];

let from = "2024-09-16"
let to = "2024-09-20"

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
 
journal.authorize(login,password).then(async function(){
    journal.calendar.getTimetable(from, to).then((data) => {
        for(let i = 1; i<=9; i++){
            if(data.table.Monday[i]){
                
                subjects.push(data.table.Monday[i].title)
            }
        }
        console.log(subjects)

    })
})
