const nameUser = document.querySelector("#name-input")
const output = document.querySelector("#name-output");



// nameUser.addEventListener("input", (event) => {
//     if(event.target.value!==" "){
//     output.textContent = event.currentTarget.value;
//     }
//     else {
//          output.textContent = "Anonymous";
//      }
//   });

  nameUser.addEventListener('input', event => {
    output.textContent = event.target.value
  
    if (event.currentTarget.value === '') {
    if (event.target.value === '') {
      output.textContent = 'Anonymous'
    }}
  })
  