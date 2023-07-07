window.onload = function () {
  var countdownTimer = document.getElementById('countdown-timer');
  var birthdayMessage = document.getElementById('birthday-message');
  var count = getTimeRemaining();

  var countdownInterval = setInterval(function () {
    var hours = Math.floor(count / 3600);
    var minutes = Math.floor((count % 3600) / 60);
    var seconds = count % 60;

    var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    countdownTimer.textContent = timeString;

    if (count <= 0) {
      clearInterval(countdownInterval);
      countdownTimer.style.display = 'none';
      birthdayMessage.style.display = 'block';
    }

    count--;
  }, 1000);

  function getTimeRemaining() {
    var now = new Date();
    var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    var timeRemaining = (midnight - now) / 1000; // convert to seconds
    return timeRemaining;
  }

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
};
