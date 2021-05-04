const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector("#header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

$(document).ready(function () {
  if (Notification.permission === "granted") {
    new Notification("Woff!");
  } else if (Notification.permission === "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Woff!");
      } else {
        console.error("No permission for notifications");
      }
    });
  } else {
    Notification.requestPermission();
  }

  window.addEventListener("unload", function (event) {
    console.log("Thanks for visiting doggo crew");
  });

  const showPosition = (position) => {
    $(".lat").html("Latitude: " + position.coords.latitude);
    $(".lng").html("Longitude: " + position.coords.longitude);
  };

  $("#cookiesokay").click(() => {
    $("#cookies").css("display", "none");
  });
  $.ajax({
    url: "http://localhost:3000/doggos",
    success: function (result) {
      result.Doggos.forEach((doggo) => {
        const doggoPerksElement = doggo.perks.map((perk) => ` ${perk}`);
        const doggoBirthDay = moment(doggo.dateOfBirth).format("YYYY-MM-DD");
        const doggoElement = `
        <div class="doggos-item">
          	<div class="doggos-info">
          		<h1>${doggo.name}</h1>
          		  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
				  <p class="doggo-perks"><span>Perks: </span>${doggoPerksElement}</p>
          <p class="doggo-birthday"><span>Birthday: </span>${doggoBirthDay}</p>
			  </div>
          	<div class="doggos-img">
          		<img src="${doggo.photo}">
          	</div>
        </div>`;
        $(".all-doggos").append(doggoElement);
      });
      $("#cookies").css("display", "block");
      navigator.geolocation.getCurrentPosition(showPosition);
    },
  });
});
