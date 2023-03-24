var html = document.getElementsByTagName("html")[0];
var c = 1;
var season;

backgroundColours = ["#cbe9f4", "#daf8ff", "#feec98", "#ffdc8a"]
seasons = ["Winter", "Spring", "Summer", "Autumn"];


function updateColors() {
    html.style.setProperty("--bgd-color", backgroundColours[c]);
    c = (c + 1) % seasons.length;

}

let nF = 0;
function animate() {
    if (++nF % 600 === 0) {
        updateColors();
    }
    requestAnimationFrame(animate);
}
animate();