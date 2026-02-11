let inp = document.getElementById("eventInput");
let date = document.getElementById("eventDate");
let cate = document.getElementById("eventCategory");
let des = document.getElementById("description");
let eve = document.getElementById("addEventButton");
let container = document.getElementById("gridcard"); 
let clearBtn = document.getElementById("clearAllButton");
let sampleBtn = document.getElementById("addSampleButton");

const samples = [
    { name: "Neon Tech Expo", date: "2026-05-12", cat: "bootcamp", des: "Exploring future AI systems." },
    { name: "Coffee & Code", date: "2026-06-01", cat: "social", des: "Morning networking for developers." },
    { name: "Global JS Summit", date: "2026-08-15", cat: "conference", des: "The biggest Javascript event of the year." },
    { name: "UI Design Sprint", date: "2026-04-22", cat: "bootcamp", des: "A 48-hour intensive design workshop." },
    { name: "Alumni Meetup", date: "2026-12-10", cat: "social", des: "Catching up with previous graduates." },
    { name: "Startup Pitch Day", date: "2026-11-05", cat: "other", des: "Local startups presenting to investors." }
];

function createCardHTML(name, eventDate, category, description) {
    return `<div class="card">
                <button class="delete-btn">&times;</button>
                <p class="name" style="font-weight:bold; font-size:1.2rem; margin-bottom:5px;">${name}</p>
                <p class="date" style="color:#94a3b8; font-size:0.9rem; margin-bottom:10px;">🗓️ ${eventDate}</p>
                <label class="cat">${category}</label>
                <p class="des" style="margin-top:15px; color:#cbd5e1; font-size:0.95rem;">${description}</p>
            </div>`;
}

eve.addEventListener("click", function() {
    if (inp.value.trim() === "") return;
    container.innerHTML += createCardHTML(inp.value, date.value, cate.value, des.value);
    inp.value = "";
    date.value = "";
    cate.value = "conference";
    des.value = "";
});

container.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }
});

clearBtn.addEventListener("click", function() {
    container.innerHTML = "";
});

sampleBtn.addEventListener("click", function() {
    let randomEvent = samples[Math.floor(Math.random() * samples.length)];
    container.innerHTML += createCardHTML(randomEvent.name, randomEvent.date, randomEvent.cat, randomEvent.des);
});

