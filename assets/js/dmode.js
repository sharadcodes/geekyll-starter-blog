function dload() {
    check_dmode();
    document.querySelector(".dmode img").addEventListener("click", function () {
        if (localStorage.getItem("dmode") == 1) {
            localStorage.setItem("dmode", 0);
            check_dmode();
        } else {
            localStorage.setItem("dmode", 1);
            check_dmode();
        }
    });
};

function check_dmode() {
    const dmode = localStorage.getItem('dmode');
    if (dmode == 1) {
        document.querySelector("body").classList.add("darkmode");
    } else {
        document.querySelector("body").classList.remove("darkmode");
    }
}
