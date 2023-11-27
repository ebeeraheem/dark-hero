const isDarkMode = document.querySelector(".checkbox");

isDarkMode.onchange = (e) => {
  if (isDarkMode.checked === true) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    window.localStorage.setItem(".checkbox", "light");
  } else {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    window.localStorage.setItem(".checkbox", "dark");
  }
};

const currentMode = window.localStorage.getItem(".checkbox");

// if (currentMode === "dark") {
//   isDarkMode.checked = false;
//   document.documentElement.classList.remove("dark");
//   document.documentElement.classList.add("light");
// } else {
//   isDarkMode.checked = true;
//   document.documentElement.classList.remove("light");
//   document.documentElement.classList.add("dark");
// }

if (currentMode === "dark") {
  isDarkMode.checked = false;
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
}
