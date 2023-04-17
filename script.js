const col = document.getElementsByClassName("col")[0];
col.addEventListener("click", (e) => {
    if (event.target.matches('.show-tooltips')) {
        console.log('this heights', event.target.offsetHeight)
        console.log('this top', event.target.offsetTop)
        console.log('this width', event.target.offsetWidth)
        console.log('this left', event.target.offsetLeft)
        var elementHeight = this.height();
        var elementWidth = this.width();
        var elementLeftOffset = this.height();
        var elementTopOffset = this.height();
    }
})