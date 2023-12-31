let btns = document.querySelectorAll(".btn");
let ansDivs = document.querySelectorAll(".ansDiv");
let iconPlus = document.querySelectorAll(".icon-plus");

// function click (index){
// ansDivs[index].classList.toggle("hide");
// if (isClicked) {
//   iconPlus[index].src = "./assets/images/icon-minus.svg";
// } else {
//   iconPlus[index].src = "./assets/images/icon-plus.svg";
// }
// isClicked = !isClicked;
// }


{
  let isClicked = true;
  btns[0].addEventListener("click", () => {
    ansDivs[0].classList.toggle("hide");
    if (isClicked) {
      iconPlus[0].src = "./assets/images/icon-minus.svg";
    } else {
      iconPlus[0].src = "./assets/images/icon-plus.svg";
    }
    isClicked = !isClicked;
  });
}

{
  let isClicked = true;
  btns[1].addEventListener("click", () => {
    ansDivs[1].classList.toggle("hide");
    if (isClicked) {
      iconPlus[1].src = "./assets/images/icon-minus.svg";
    } else {
      iconPlus[1].src = "./assets/images/icon-plus.svg";
    }
    isClicked = !isClicked;
  });
}

{
  let isClicked = true;
  btns[2].addEventListener("click", () => {
    ansDivs[2].classList.toggle("hide");
    if (isClicked) {
      iconPlus[2].src = "./assets/images/icon-minus.svg";
    } else {
      iconPlus[2].src = "./assets/images/icon-plus.svg";
    }
    isClicked = !isClicked;
  });
}

{
  let isClicked = true;
  btns[3].addEventListener("click", () => {
    ansDivs[3].classList.toggle("hide");
    if (isClicked) {
      iconPlus[3].src = "./assets/images/icon-minus.svg";
    } else {
      iconPlus[3].src = "./assets/images/icon-plus.svg";
    }
    isClicked = !isClicked;
  });
}
