let hungry = 0;
let sleepy = 0;
let happy = 0;


document.getElementById("hungryBTN").addEventListener('click', function() {
    if (hungry < 100) {
    hungry += 25;
    }
    if (hungry > 75){
        hungry = 100;
    }
    document.getElementById('hungry').innerHTML = hungry;
    document.getElementById('health').innerHTML = happy+ hungry + sleepy;
})

document.getElementById("sleepBTN").addEventListener('click', function() {
    if (sleepy < 100) {
        sleepy += 25;
        }
    if (sleepy > 75){
        sleepy = 100;
    }
        document.getElementById('sleepy').innerHTML = sleepy;
        document.getElementById('health').innerHTML = happy+ hungry + sleepy;
})


document.getElementById("happyBTN").addEventListener('click', function() {
    if (happy < 100) {
        happy += 25;
        }
    if (happy > 75){
        happy = 100;
    }
        document.getElementById('happy').innerHTML = happy;
        document.getElementById('health').innerHTML = (happy+hungry+sleepy);
})

setInterval(function() {
    if (hungry > 0) {
        hungry -= 5;
    }
    if (sleepy > 0) {
        sleepy -= 5;
    }
    if (happy > 0) {
        happy -= 5;
    }
    document.getElementById('hungry').innerHTML = hungry;
    document.getElementById('sleepy').innerHTML = sleepy;
    document.getElementById('happy').innerHTML = happy;
    document.getElementById('health').innerHTML = (happy + hungry + sleepy);
    healthColor();
    }, 1000)


function savePet() {
    localStorage.setItem("sleepyData", JSON.stringify(sleepy));
    localStorage.setItem("hungryData", JSON.stringify(hungry));
    localStorage.setItem("happyData", JSON.stringify(happy));
    localStorage.setItem("healthData", JSON.stringify(health));
}

function healthColor() {
    if (happy + hungry + sleepy > 200) {
        document.getElementById('healthBar').style.background = "green";
    } else if (happy + hungry + sleepy > 100) {
        document.getElementById('healthBar').style.background = "orange";
    } else {
        document.getElementById('healthBar').style.background = "red";
    }
}

function loadPet() {
    const sleepyData = localStorage.getItem("sleepyData");
    const hungryData = localStorage.getItem("hungryData");
    const happyData = localStorage.getItem("happyData");
    const healthData = localStorage.getItem("healthData");

    
    if (sleepyData && hungryData && happyData && healthData) {
        sleepy = JSON.parse(sleepyData);
        hungry = JSON.parse(hungryData);
        happy = JSON.parse(happyData);
        health = JSON.parse(healthData);
    }


    
    document.getElementById('hungry').innerHTML = hungry;
    document.getElementById('sleepy').innerHTML = sleepy;
    document.getElementById('happy').innerHTML = happy;
    document.getElementById('health').innerHTML = (happy + hungry + sleepy);

  }
    window.addEventListener('load', loadPet);
    window.addEventListener('beforeunload', savePet);


