const btnCreate = document.querySelector('button[data-create]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes')
const btnDestroy = document.querySelector('button[data-destroy]');

btnCreate.addEventListener("click", (event) => {
  destroyBoxes(); 
  const textValue = input.value.trim();
   
  if (textValue > 0 && textValue <= 100) {
    createBoxes(textValue);
  }
  input.value = "";
});

btnDestroy.addEventListener("click", (evDestroy) => {
  destroyBoxes();  
 }
);

function createBoxes(amount) {
  let length = 30;

  for (let i = 0; i < amount; i++) {
    const box = `<div style="width: ${length}px; height: ${length}px; display:inline-block; margin-right: 28px; margin-top: 32px; background-color: ${getRandomHexColor()};"></div>`;
    boxes.insertAdjacentHTML("beforeend", box);
    length += 10;
  }
};

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};




