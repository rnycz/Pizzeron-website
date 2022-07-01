const calculate = () =>{
  const billAmount = document.querySelector("#billAmount").value;
  const serviceRate = document.querySelector("#serviceRate").value;
  const peopleNumber = document.querySelector("#peopleNumber").value;
  const infoTip = document.querySelector("#total-tip");
  
  let totalTip = (billAmount * serviceRate) / peopleNumber;
  totalTip = Math.round(totalTip * 100) / 100;
  
  if (peopleNumber > 1) {
    infoTip.innerHTML = `<b>Tip amount: ${totalTip} $ each</b>`;
    infoTip.style.color = "black";
  } else {
    infoTip.innerHTML = `<b>Tip amount: ${totalTip} $</b>`;
    infoTip.style.color = "black";
  }

  if (peopleNumber == "" || peopleNumber <= 0) {
    infoTip.innerHTML = "Enter the number of people";
    infoTip.style.color = "rgb(161, 7, 7)";
  }
  
  if (serviceRate == 1) {
    infoTip.innerHTML = "Choose the quality of service";
      infoTip.style.color = "rgb(161, 7, 7)";
  }
  
  if (billAmount == "" || billAmount <= 0) {
    infoTip.innerHTML = "Enter the value of the bill";
    infoTip.style.color = "rgb(161, 7, 7)";
  }
  
  if (serviceRate == 0) {
    infoTip.innerHTML = "You do not want to tip";
    infoTip.style.color = "black";
  }
}
document.querySelector("#calculate").addEventListener("click", calculate);

const checkTime = (i) =>{
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const showTime = () =>{
  const date = new Date();
  const hours = checkTime(date.getHours());
  const minutes = checkTime(date.getMinutes());
  const seconds = checkTime(date.getSeconds());
  const time = `${hours}:${minutes}:${seconds}`;
    document.querySelector("#timer").innerHTML = `Current time: ${time}`;
    setTimeout("showTime()", 100);
};
showTime();

  
const countdownDate = new Date("Mar 30, 2023 00:00:00").getTime();
const x = setInterval(() =>{
  const now = new Date().getTime();
  const count = countdownDate - now;
  const days = Math.floor(count / (1000 * 60 * 60 * 24));
  const hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((count % (1000 * 60)) / 1000);
  document.querySelector("#expire-coupon1").innerHTML = `Coupon expires in:
    ${days}d ${hours}h ${minutes}m ${seconds}s`;
  document.querySelector("#expire-coupon2").innerHTML = `Coupon expires in:
    ${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (count < 0) {
    clearInterval(x);
    document.querySelector("#expire-coupon1").innerHTML = "Coupon expired";
    document.querySelector("#expire-coupon2").innerHTML = "Coupon expired";
  }
}, 1000);
  
const scrollProgress = () =>{
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (windowScroll / height) * 100;
  document.querySelector("#progressBar").style.width = `${scrolled}%`;
};
  
const stickyMenu = () =>{
  const menu = document.querySelector("#navbar");
  const header = document.querySelector("#image-header");
  const sticky = menu.offsetTop; 
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky-nav")
    header.style.borderBottom = "5px solid black";
  } 
}

window.onscroll = function() {
  scrollProgress();
  stickyMenu();
}
  
const openModal = () =>{
  document.querySelector("#modalDiv").style.display = "block";
}
document.querySelector("#modalBtn").addEventListener("click", openModal)
  
const closeModal = () =>{
  document.querySelector("#modalDiv").style.display = "none";
}
document.querySelector("#closeModal").addEventListener("click", closeModal)
  
const openMobile = () =>{
  document.getElementById("mobile").style.width = "100%";
}
document.querySelector("#openMobile").addEventListener("click", openMobile)
  
const closeMobile = () =>{
  document.getElementById("mobile").style.width = "0%";
}
document.querySelector("#closeMobile").addEventListener("click", closeMobile)
  
const menuItemClicked = () =>{
  const clicked = document.querySelectorAll(".isClicked");
  for (let i = 0; i < clicked.length; i++) {
    clicked[i].onclick = () =>{
      closeMobile();
    }
  }
}
menuItemClicked();