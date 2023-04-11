const input = document.querySelector("#validation-input");

const inputBlur = (event) => {
  const value = event.target.value.trim();
  const length = Number(input.dataset.length);

  if (value.length === length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", inputBlur);
