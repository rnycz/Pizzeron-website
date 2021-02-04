function Calculate() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceRate = document.getElementById("serviceRate").value;
    var peopleNumber = document.getElementById("peopleNumber").value;
    var infoTip = document.getElementById("total-tip");
  
    var totalTip = (billAmount * serviceRate) / peopleNumber;
    totalTip = Math.round(totalTip * 100) / 100;
  
    if (peopleNumber > 1) {
      infoTip.innerHTML = "<b>Tip amount: " + totalTip + " $ each</b>";
      infoTip.style.color = "black";
    } else {
      infoTip.innerHTML = "<b>Tip amount: " + totalTip + " $</b>";
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
    console.log(innerWidth);
  };
  /*function BlinkText(val){
      setInterval(function(){
          val.style.color = (val.style.color == 'black' ? 'red' : 'black');
      }, 1000);
      return;
  }*/
  function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("timer").innerHTML = "Current time: " + time;
    setTimeout("showTime()", 100);
  };
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  var countDownDate = new Date("Mar 30, 2021 00:00:00").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var count = countDownDate - now;
    var days = Math.floor(count / (1000 * 60 * 60 * 24));
    var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((count % (1000 * 60)) / 1000);
    document.getElementById("expire-coupon1").innerHTML = "Coupon expires in: " +
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    document.getElementById("expire-coupon2").innerHTML = "Coupon expires in: " +
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (count < 0) {
      clearInterval(x);
      document.getElementById("expire-coupon1").innerHTML = "Coupon expired";
      document.getElementById("expire-coupon2").innerHTML = "Coupon expired";
    }
  }, 1000);
  
  function scrollProgres() {
    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (windowScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  };
  
  window.onscroll = function() {
    scrollProgres();
    stickyMenu();
  };
  
  var menu = document.getElementById("navbar");
  var sticky = menu.offsetTop;
  
  function stickyMenu() { 
    if (window.pageYOffset >= sticky) {
      menu.classList.add("sticky-nav")
    } else {
      menu.classList.remove("sticky-nav");
    }
  }
  
  function openModal() {
    document.getElementById("modalDiv").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modalDiv").style.display = "none";
  }
  
  function closeModalOnWindowClick(event) {
    if (event.target == document.getElementById("modalDiv")) {
      document.getElementById("modalDiv").style.display = "none";
    }
  }
  
  function openMobile() {
    document.getElementById("mobile").style.width = "100%";
  }
  
  function closeMobile() {
    document.getElementById("mobile").style.width = "0%";
  }
  
  function menuItemClicked() {
    var i;
    var clicked = document.getElementsByClassName("isClicked");
    for (i = 0; i < clicked.length; i++) {
      clicked[i].onclick = function() {
        closeMobile();
      }
    }
  }
  window.onclick = function() {
    menuItemClicked();
    closeModalOnWindowClick();
  }
  