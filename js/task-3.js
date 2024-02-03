const nameUser = document.querySelector("#name-input")

//nameUser.addEventListener("input", addNameUser)
const output = document.querySelector("#name-output");



// nameUser.addEventListener("input", (event) => {
//     if(event.target.value!==" "){
//     output.textContent = event.currentTarget.value;
//     }
//     else {
//          output.textContent = "Anonymous";
//      }
//   });

nameUser.addEventListener("input", (event) => {
    if(event.target.elements.nameUser.value!=="" || event.target.element.nameUser.value!==" "){
    output.textContent = event.currentTarget.value;
    }
    else {
        output.textContent = "Anonymous";
    }
  });