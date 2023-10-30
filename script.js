//Ввод данных
let userName = prompt("Введите Ваше имя, пожалуйста","");

//Обработка данных
function showMessage() {
  let message = userName;
  alert(message);
}
//Вывод данных
showMessage();

  
 function addMessage() {
  //Ввод данных
 // let message = prompt("Введите сообщение", "Сообщение")
 let message = document.getElementById("message").value

 //валидация данных
 if (message == '') {
  document.getElementById("error").innerText = 'Ошибка. Введите сообщение'
  return
 } 

  //Обработка данных
  str = `${message}`

  //Вывод данных
 // alert(str)
  document.getElementById("resultMessage").innerText = str
  document.getElementById("error").innerText = ''
}
