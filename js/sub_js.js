var position = 0;
function stop() {
    position = 0;
    setTimeout(scroller, 3000)
}
function scroller() {

    if (position != 3250) {
        position++;
        scroll(0, position);
        clearTimeout(timer);
        var timer = setTimeout("scroller()", 7); timer;
    }
    else { location.replace(); }
}
