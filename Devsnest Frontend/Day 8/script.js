let contain = document.querySelector(".center");
for (let i = 0; i < 400; i++) {
  let smallBox = document.createElement("div");
  smallBox.className = "small-box";
  contain.appendChild(smallBox);
}

const box = document.querySelectorAll(".center .small-box");
box.forEach((bo) => {
  bo.addEventListener("mousemove", () => {
      bo.classList.toggle("click-again");
  });
});
