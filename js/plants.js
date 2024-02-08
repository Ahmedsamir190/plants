// btn in landing one scroll

let updown = document.querySelector(".upanddown");

updown.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 650,
    behavior: "smooth",
  });
};

// counter landing-page-six (6) (latest-event)
let counterdown = new Date("FEB 6, 2024 11:26:00").getTime();

let counter = setInterval(function () {
  // get time by milliseconds
  let datenow = new Date().getTime();
  //           get diffr
  let diffdate = counterdown - datenow;

  if (diffdate <= 0) {
    clearInterval(counter);

    document.querySelector(".days").innerHTML = "00";
    document.querySelector(".hours").innerHTML = "00";
    document.querySelector(".minutes").innerHTML = "00";
    document.querySelector(".seconds").innerHTML = "00";
  } else {
    let days = Math.floor(diffdate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (diffdate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((diffdate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffdate % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML =
      seconds < 10 ? `0${seconds}` : seconds;
  }
}, 1000);

// landing page (7) (Our Awesome Stats (Increase Numbers On))
let landingseven = document.querySelector(".section-seven");
let spansseven = document.querySelectorAll(".numberseven");
let started = false;
// width for (Growth Stages)landing  page five
let section = document.querySelector(".section-five");
let spans = document.querySelectorAll(".the-progress span");
let contspan = document.querySelectorAll(".container-five span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 150) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
    contspan.forEach((span) => {
      span.style.color = "white";
      span.style.background = "#0080008c";
    });
  }
  // End of width for (Growth Stages)landing  page five
  // start landing page (7) (Our Awesome Stats (Increase Numbers On))
  if (window.scrollY >= landingseven.offsetTop - 250) {
    if (!started) {
      spansseven.forEach((numberseven) => startcountnumber(numberseven));
    }
    started = true;
  }
};
function startcountnumber(element) {
  let target = element.dataset.number;
  let countseven = setInterval(() => {
    element.textContent++;
    if (element.textContent == target) {
      clearInterval(countseven);
    }
  }, 2000 / target);
}
// start section eight (8) (list videos)
let list = document.querySelectorAll(".videos-list .vid");
let mainvideo = document.querySelector(".main-video video");
let title = document.querySelector(".main-video .titlee");

list.forEach((video) => {
  video.onclick = () => {
    list.forEach((vid) => {
      vid.classList.remove("active");
    });
    video.classList.add("active");
    if (video.classList.contains("active")) {
      let src = video.children[0].getAttribute("src");
      mainvideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  };
});
// copyrright
let time = new Date().getFullYear();
let elment = document.createElement("p");
let text = document.createTextNode(
  `Copy right © ${time} by Name all rights reserved`
);
elment.appendChild(text);
document.body.appendChild(elment);
elment.style.cssText =
  "background-color:#c8c7cc; padding:15px ;width:100% ; margin:0 auto; text-align: center";
