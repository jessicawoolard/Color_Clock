function numberWithLeadingZeros(num) {
    return  (num < 10 ? '0' : '') + num
}
function numToHex(num) {
    var hexString = num.toString(16);
    if (hexString.length % 2) {
        hexString = '0' + hexString;
    }
    return hexString;
}


function logTime() {
    let currentTime = new Date();
    let hours = numberWithLeadingZeros(currentTime.getHours());
    let minutes = numberWithLeadingZeros(currentTime.getMinutes());
    let seconds = numberWithLeadingZeros(currentTime.getSeconds());
    let formattedDate = hours + ':' + minutes + ':' + seconds;
    console.log('current time', currentTime);
    document.getElementById("time").textContent = formattedDate;
    let color = '#' + numToHex(hours) + numToHex(minutes) + numToHex(seconds);
    document.body.style.backgroundColor = color;
    console.log(color)
}

    setInterval(logTime, 1000);




// var everySecond = setInterval(function() {
// //   document.querySelector('.time').textContent = Date.now();
// // }, 36000);