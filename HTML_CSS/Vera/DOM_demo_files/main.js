const backToTop = document.querySelector("#backTop");

backToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header").style.height = "50px";
        document.querySelector("header").style.fontSize = "25px";
    } else {
        document.querySelector("header").style.height = "100px";
        document.querySelector("header").style.fontSize = "35px";
    }
}