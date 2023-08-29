
var clicks = 0

const onClick = () => {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}