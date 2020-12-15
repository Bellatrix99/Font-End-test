const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('键入一个新的名称：');
  para.textContent = '何芯其是：' + name;
}