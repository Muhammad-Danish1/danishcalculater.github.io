let string = '';
const input = document.querySelector("#input");
const btns = document.querySelectorAll('.btn');


const container = document.querySelector(".container");
const switchs = document.querySelector(".switch .checkbox");

switchs.addEventListener('click', () =>{
    container.classList.toggle("bg_blue")
});


Array.from(btns).forEach ((btns)=>{
    btns.addEventListener('click', (e)=>{
        try {
            if (e.target.innerHTML == '='){
                string = eval(string)
                input.value = string;
            }else if (e.target.innerHTML=="C"){
                string = '';
                input.value = string
            }
            else if (e.target.innerHTML=="X"){
                string = string + "*";
                input.value = string;
            }
            else if (e.target.innerHTML=="AC"){
                string = string.slice(0 , -1);
                console.log(string);
                input.value = string;
            }
            else if (e.target.innerHTML=="Sqrt"){
                string = Math.sqrt(string);
                console.log(string);
                input.value = string;
            }
            else{
                string = string + e.target.innerHTML;
                input.value = string; 
            }
            
        } catch (error) {
            string = ""
        }
       
        
    })
})