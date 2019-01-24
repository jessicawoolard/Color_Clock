$(document).ready(function () {
    function numberWithLeadingZeros(num) {
        return (num < 10 ? '0' : '') + num
    }

    function numToHex(num) {
        var hexString = parseInt(num).toString(16).toUpperCase();
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

        var hexHours = numToHex(hours);
        var hexMinutes = numToHex(minutes);
        var hexSeconds = numToHex(seconds);

        if (isHovering){
            let formattedHex = hexHours + ':' + hexMinutes + ':' + hexSeconds;
            document.getElementById("time").textContent = formattedHex;
        }
        else {
            let formattedDate = hours + ':' + minutes + ':' + seconds;
            document.getElementById("time").textContent = formattedDate;
        }

        let color = '#' + hexHours + hexMinutes + hexSeconds;
        document.body.style.backgroundColor = color;

        $('#progress').width(((seconds / 60) * 100) + '%');
    }

    setInterval(logTime, 1000);

    var isHovering = false;
    $('#time').hover(function(){
        isHovering = true
    }, function(){
        isHovering = false
    })
});

