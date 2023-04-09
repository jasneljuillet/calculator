const log = console.log;
const result = document.getElementById("result");
const keys = document.getElementsByClassName("grid-item");

for (let i = 0; i < keys.length; i++) {
  result.innerText = 0;
  keys[i].addEventListener("click", () => {
    result.innerText = `${result.textContent}${keys[i].textContent}`;
    if (keys[i].textContent == "=") {
      result.innerText = result.innerText.slice(0, result.innerText.length - 1);
      result.innerText = eval(result.innerText);
    }

    if (keys[i].textContent == "c") {
      result.innerText = result.textContent.replace(/c/g, "");

      log(result.textContent.length);
      if (result.innerText.length === 1) {
        result.innerText = 0;
      } else {
        result.innerText = result.innerText.slice(0, -1);
      }
    }
    if (keys[i].textContent == "AC") {
      result.innerText = 0;
    }
  });
}
