function upper() {document.getElementsByClassName("curtain")[0].style.top = -10000 +'px';}
function light() {
    document.getElementById("triangle").classList += " triangle";
    document.getElementById("rabbit").style.display = "block";
    document.getElementById("bird").style.display = "block";
    document.getElementById("hat").style.display = "block";
    document.getElementById("gudini").style.display = "block";
}
function unlight() {
    document.getElementById("triangle").classList -= " triangle";
    document.getElementById("rabbit").style.display = "none";
    document.getElementById("bird").style.display = "none";
    document.getElementById("hat").style.display = "none";
    document.getElementById("gudini").style.display = "none";
}
function bird() {
    document.getElementById("bird").style.top = -180 + 'px';
    document.getElementById("rabbit").style.top = 260 + 'px';
}
function rabbit() {
    document.getElementById("bird").style.top = 130 + 'px';
    document.getElementById("rabbit").style.top = 0 + 'px';
}