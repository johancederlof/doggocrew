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

fetch("http://localhost:3000/doggos")
  .then((response) => response.json())
  .then((data) => {
    let doggoHolder = document.querySelectorAll(".all-doggos")[0].innerHTML;
    data.Doggos.forEach((doggo) => {
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
      doggoHolder = doggoHolder + doggoElement;
    });
    document.querySelectorAll(".all-doggos")[0].innerHTML = doggoHolder;
  })
  .catch((err) => {
    console.warn("Something went wrong.", err);
  });
