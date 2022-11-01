

let calculate = document.forms[0].submit1;
calculate.addEventListener('click',volumeSphere)

function volumeSphere(event){
    event.preventDefault();
   let radius=Number(document.forms[0].radius.value) ;
   let volume = 4/3 * Math.PI * Math.pow(rad, 3);
   document.forms[0].volume.value=volume;
}
volumeSphere()