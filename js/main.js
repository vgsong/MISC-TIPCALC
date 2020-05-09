function calctip(amt,squa,tg){
  
  let fim = "The total is " ((amt * squa)/tg).toFixed(2);

    return document.getElementById("result").innerHTML = fim;
}

