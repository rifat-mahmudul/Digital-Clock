

const hrs = document.getElementById('hrs');
const mts = document.getElementById('mts');
const snds = document.getElementById('snds');

setInterval(() => {
    let data = new Date();
    hrs.innerHTML = `${data.getHours()}`

    mts.innerHTML = `${data.getMinutes()}`

    snds.innerHTML = `${data.getSeconds()}`
}, 1000)