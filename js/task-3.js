const nameUser = document.querySelector("#name-input")

const output = document.querySelector("#name-output");

nameUser.addEventListener("input", (event) => {
        
    if(event.data.trim() ==="") {
        
        output.textContent = "Anonymous";
       
    }
    else {
        
        output.textContent = event.currentTarget.value.trim();
        console.log(event.currentTarget.value.trim()); 
    }
    
  });
  nameUser.addEventListener("change", () => {
    nameUser.value = "";
  });

