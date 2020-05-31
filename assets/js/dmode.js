window.onload = function () {
  check_dmode();
  document.querySelector(".dmode img").addEventListener("click", function () {
    if (Cookies.get("dmode") == "yes") {
      Cookies.set("dmode", "no");
      check_dmode();
    } else if (Cookies.get("dmode") == "no") {
      Cookies.set("dmode", "yes");
      check_dmode();
    }
  });
};

function check_dmode() {
  if (Cookies.get("dmode") == "yes") {
    document.querySelector("body").classList.add("darkmode");
  } else {
    document.querySelector("body").classList.remove("darkmode");
  }
}
