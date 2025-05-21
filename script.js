let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
        button.addEventListener('click' , (e)=>{
            if(e.target.innerHTML == '='){
                string = eval(string);
                    document.querySelector('input').value = string;  

            }
            else if(e.target.innerHTML == 'C'){
                string = "";
                    document.querySelector('input').value = string;  

            }
            else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string; 
            }
             
            

        })
})



let input = document.querySelector('.input');

input.addEventListener('keypress',(e)=>{
    const allowed = '0123456789+-*/.=';
   if(!allowed.includes(e.key)){
    e.preventDefault(); //block krva mate 
   }
})