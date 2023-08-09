function fnct(){
    for(var i =0;i<16;i++){
        document.getElementsByTagName('button')[i].addEventListener('click',clickFun);

    }


}

fnct();
var result ='';
function clickFun(e){
    e.preventDefault();
    let inpt = document.getElementById('input');
    let btnInp = e.target;

    btnInp.classList.add('pressed');

    setTimeout(()=>{
        btnInp.classList.remove('pressed')

    },90);

    if(btnInp.textContent !== "=" && btnInp.textContent !=="c"){
        inpt.value += btnInp.textContent;
    }else if(btnInp.textContent === "="){
        result = inpt.value;
        inpt.value = eval(result);
    }else{
        result = " ";
        inpt.value = " ";

    }

}