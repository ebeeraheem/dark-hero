const isDarkMode = document.querySelector(".checkbox");

isDarkMode.checked = true;

const logo = document.querySelector(".logo");

isDarkMode.onchange = (e) => {
  if (isDarkMode.checked === true) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    window.localStorage.setItem(".checkbox", "light");

    logo.src = "images/dark-logo.png";
  } else {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    window.localStorage.setItem(".checkbox", "dark");

    logo.src = "images/light-logo.png";
  }
};

const currentMode = window.localStorage.getItem(".checkbox");

if (currentMode === "dark") {
  isDarkMode.checked = false;
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");

  logo.src = "images/light-logo.png";
}

if (currentMode === "light") {
  isDarkMode.checked = true;
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");

  logo.src = "images/dark-logo.png";
}
