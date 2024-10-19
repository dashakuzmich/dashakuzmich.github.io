setTimeout(function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.visibility = "visible";
}, 3000);
const totalDuration = 3000; // 3 секунды
const progressElement = document.getElementById('progress');
const percentageElement = document.getElementById('percentage');
let startTime = null;

function updateLoader(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    const progress = Math.min((elapsed / totalDuration) * 100, 100);
    progressElement.style.width = progress + '%';
    percentageElement.textContent = Math.floor(progress) + '%';

    if (elapsed < totalDuration) {
        requestAnimationFrame(updateLoader);
    } 
}

requestAnimationFrame(updateLoader);
