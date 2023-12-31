// Code by @AK
const plusClass = "plus-icon";
const minusClass = "minus-icon";
const plusIconPath = "assets/images/icon-plus.svg";
const minusIconPath = "assets/images/icon-minus.svg";

function load(){
    const iconClass = document.querySelectorAll(".accordian-heading img");
    for (const val of iconClass) {
        if(val.classList.value == plusClass){
          let paraTag = val.parentNode.nextElementSibling;
          paraTag.classList.add("collapse");
        }
        else{
          let paraTag = val.parentNode.nextElementSibling;
          paraTag.classList.add("collapse");
          paraTag.style.maxHeight = paraTag.scrollHeight + "px";
        }
      }
}

function toggleAccordian(icon){
  const currClass = icon.classList.value;
  if(currClass == minusClass){
    let paraTag = icon.parentNode.nextElementSibling;
    icon.classList.remove(minusClass);//toggle and remove minus class for changing icons
    icon.classList.add(plusClass);
    icon.src = plusIconPath;
    paraTag.style.maxHeight = null;
  }
  else{
    let paraTag = icon.parentNode.nextElementSibling;
    icon.classList.remove(plusClass);//toggle and remove plus class for changing icons
    icon.classList.add(minusClass);
    icon.src = minusIconPath;
    paraTag.style.maxHeight = paraTag.scrollHeight + "px";
  }
}

