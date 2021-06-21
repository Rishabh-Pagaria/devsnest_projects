let contain = document.querySelector(".center");
for (let i = 0; i < 400; i++) {
  let smallBox = document.createElement("div");
  contain.appendChild(smallBox);
  if(i == 129 || i == 130 || i == 148 || i == 149 || i == 150 || i == 151 || i == 167 || i == 168 || i == 169 || i == 170 || i == 171 || i == 172 || i == 186 || i == 187 || i == 189 || i == 190 || i == 192 || i == 193 || i == 206 || i == 207 || i == 208 || i == 209 || i == 210 || i == 211 || i == 212 || i == 213 || i == 228 || i == 231 || i == 247 || i == 249 || i == 250 || i == 252 || i == 266 || i == 268 || i == 271 || i == 273){
    smallBox.className = "white-box";
  }
  else{
    smallBox.className = "red-box";
  }
}

const redBox = document.querySelectorAll(".center .red-box");
const whiteBox = document.querySelectorAll('.center .white-box');
redBox.forEach((bo) => {
  bo.addEventListener("click", () => {
    bo.classList.toggle("white-box");
  });
});
whiteBox.forEach( (po) =>{
  po.addEventListener('click',() => {
    po.classList.toggle('add-class');
  })
})