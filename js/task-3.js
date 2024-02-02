const nameUser = document.querySelector("#name-input");

//nameUser.addEventListener("input", addNameUser)
const output = document.querySelector("#name-output");

// const addNameUser = ((event) => {
//     output.textContent = event.currentTarget.value;
//       });

// nameUser.addEventListener("input", (event) => {
//   if (event.currentTarget.value) {
//     console.log(event.currentTarget.value);
//     output.textContent = event.currentTarget.value.trim();
//   }
// });
nameUser.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    output.innerHTML = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value.trim();
  }
});
