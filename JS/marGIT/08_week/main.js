const backToTop = document.querySelector("#backTop");

backToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})