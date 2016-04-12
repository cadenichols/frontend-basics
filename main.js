document.addEventListener('DOMContentLoaded', init);

function init() {
  var button = document.getElementById('myButton');
  button.addEventListener('click', buttonClicked);

  var numButtons = document.querySelectorAll('#buttons button');
  for(var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', numButtonClicked);
  }


  // document.getElementById('buttons')
  //   .addEventListener('click', numButtonClicked);


}

function numButtonClicked(event) {
  // if(event.target.matches('button')) {
    console.log(event.target.textContent);
  // }
}


function buttonClicked(event) {
  var numberElement = document.getElementById('number');
  var numString = numberElement.textContent;
  var num = parseInt(numString);
  num++;
  numberElement.textContent = num;
}
