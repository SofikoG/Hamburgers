const polosa = document.querySelector('.polosa')
pageStatus()

function pageStatus() {
    let bodyHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    polosa.style.width = (window.scrollY / bodyHeight) * 100 + '%'
}

window.addEventListener('scroll', pageStatus)
