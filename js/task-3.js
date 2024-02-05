const nameUser = document.querySelector("#name-input")

const output = document.querySelector("#name-output");

nameUser.addEventListener("input", (event) => {
    nameUser.innerHTML="";
    const arr=[];
    arr.push(event);
    

    for(const event of arr){
    if(event.data =="" || event.data ==" ") {
        
        output.textContent = "Anonymous";
       
    }
    else {
        nameUser.innerHTML="";
        output.textContent = event.currentTarget.value.trim();
        console.log(event.currentTarget.value.trim()); 
    }}
    
  });
  