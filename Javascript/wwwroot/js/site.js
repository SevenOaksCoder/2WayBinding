
function openAnimate() {
    let div = this.querySelector('.animate');
    let divHeight = div.scrollHeight;
    div.style.setProperty('--max-height', divHeight + 'px');

    if (div.classList.contains('open')) {
        div.classList.remove('open');
    }
    else {
        clearAll();
        div.classList.add('open');
    }
}

function clearAll() {
    let divs = document.querySelectorAll('.animate');
    divs.forEach(x => {
        if (x.classList.contains('open')) {
            x.classList.remove('open');
        }
    });
}