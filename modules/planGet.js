const Librus = require("librus-api")

let journal = new Librus();

let login = "9336680u";
let password = "Aureola12122006";

function getCurrentWeekDays() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const weekDays = [];
    
    for (let i = 0; i < 5; i++) {
        const currentDay = new Date(today);
        currentDay.setDate(today.getDate() + mondayOffset + i);
        const formattedDate = currentDay.toISOString().slice(0, 10);
        weekDays.push(formattedDate);
    }
    
    return weekDays;
}

const monday = [];
const tuesday = [];
const wednesday = [];
const thursday = [];
const friday = [];
let days = getCurrentWeekDays()

let from = days[0]
let to = days[4]
const subjects = [monday, tuesday, wednesday, thursday, friday];
journal.authorize(login,password).then(async function(){
    journal.calendar.getTimetable(from, to).then((data) => {
        for(let i = 1; i<=9; i++){
            if(data.table.Monday[i]){
                monday.push(data.table.Monday[i].title)
            }else{
                monday.push(data.table.Monday[i])
            }
        }
        console.log(subjects)

    })
})