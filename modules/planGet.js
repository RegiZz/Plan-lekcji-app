const Librus = require("librus-api")

let journal = new Librus();

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

const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const subjects = {};

let days = getCurrentWeekDays()

let from = days[0]
let to = days[4]

function authorizeLibrus(login, password){
    if(journal.authorize(login,password)){
        journal.authorize(login,password).then(async function(){
            journal.calendar.getTimetable(from, to).then((data) => {
                week.forEach(day => {
                    subjects[day.toLowerCase()] = [];
                    for(let i = 1; i <= 9; i++) {
                        if (data.table[day][i]) {
                            subjects[day.toLowerCase()].push(data.table[day][i].title);
                        } else {
                            subjects[day.toLowerCase()].push(data.table[day][i]);
                        }
                    }
                });
                

            })
        })
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    Subjects: subjects,
    authorizeLibrus,
}
