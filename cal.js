const math = require('mathjs')


let calarea = document.querySelector(".calculator");
let calInputArea = document.querySelector(".cal-input")
calarea.addEventListener("click", calulate);



function calulate(event){
   let button_value = event.target.id;

   if (button_value === 'equals'){
      evaluateMath();
      return;
   }

   if(button_value === 'clear'){
      calInputArea.value = ''
      return;
   }

   calInputArea.value += button_value;
} 


function evaluateMath(){
   let expression = calInputArea.value;
   console.log(expression);

   try{
      let answer = math.evaluate(expression);
      calInputArea.value = answer;
   }catch{
      alert('invalid expression');
   }

}