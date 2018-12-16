function push(obj){
  var pushed = obj.innerHTML;
  var input = document.getElementById('active');

  if (pushed == '='){
    if (eval(input.innerHTML) % 1 != 0)
      {
        input.innerHTML = eval(input.innerHTML).toFixed(3);
      }
    else
      {
        input.innerHTML = eval(input.innerHTML);
      }

  }
  else if (pushed == 'AC' || pushed == 'CE'){
    input.innerHTML = '0';
  }
  else {
    if (input.innerHTML == '0'){
      input.innerHTML = pushed;
    }
    else {
      input.innerHTML += pushed;
    }
  }
}
