//Time controll/---------------------------------

let timeStorage = localStorage;
let time;

if (timeStorage.getItem("time") != null) {
  time = parseInt(timeStorage.getItem("time"));
} else {
  time = 300;
  timeStorage.setItem("time", time);
}

//------------------------------------------------

let firstCard = null;
let secondCard = null;

// https://www.flaticon.com/search?word=web&color=color
let cards = [
  {
    name: "php",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
    id: 1,
  },
  {
    name: "html",
    img: "html.png",
    id: 2,
  },
  {
    name: "css",
    img: "css.png",
    id: 3,
  },
  {
    name: "js",
    img: "js.png",
    id: 4,
  },
  {
    name: "c#",
    img: "hashtag.png",
    id: 5,
  },
];

let progress = 0;

$(document).ready(function () {
  $("#rules").hide();
  $(".progress").knob({
    min: 0,
    max: 12,
    angleOffset: -60,
    angleArc: 120,
    readOnly: true,
    width: "100%",
    thickness: 0.2,
    lineCap: "round",
    displayInput: false,
    bgColor: "#38A3A5",
    fgColor: "#22577A",
  });
  $(".time").knob({
    min: 0,
    max: 300,
    angleOffset: 0,
    angleArc: 360,
    readOnly: true,
    width: "100%",
    thickness: 0.2,
    lineCap: "butt",
    displayInput: false,
    bgColor: "#38A3A5",
    fgColor: "#22577A",
  });

  $(".slideRules").click(function () {
    $("#rules").slideToggle();
  });

  $("#start").click(function () {
    $("#start").css("display", "none");
    $(".gameBoard").css("display", "grid");
    fillBoard();
    $(".card").on("click", cardClicked);
    startTime();
  });
});

function fillBoard() {
  let board = [...cards, ...cards];
  for (let i = 0; i < board.length; i++) {
    let cardHtml = `<div class="card" data-id="${board[i].id}">
			<div class="front">R0B0C0DE</div>
			<div class="back"><img src="${board[i].img}" alt="${board[i].name}"></div>
		</div>`;
    $(".gameBoard").append(cardHtml);
  }
}

function cardClicked(event) {
  if (secondCard || $(this).hasClass("matched")) {
    return;
  }
  if (!firstCard) {
    firstCard = $(this);
    firstCard.addClass("flip");
    return;
  }
  if (firstCard) {
    secondCard = $(this);
    secondCard.addClass("flip");
    if (firstCard.attr("data-id") == secondCard.attr("data-id")) {
      firstCard.addClass("matched");
      secondCard.addClass("matched");
      firstCard = null;
      secondCard = null;
      progress++;
      $(".progress").val(progress).trigger("change");
      if (progress == 12) {
        win();
      }
      return;
    } else {
      setTimeout(function () {
        firstCard.removeClass("flip");
        secondCard.removeClass("flip");
        firstCard = null;
        secondCard = null;
      }, 600);
    }
  }
}

function win() {
  $(".gameBoard").css({
    display: "none",
  });
  $("#win").css({
    display: "flex",
  });
  localStorage.removeItem("time");
}

function startTime() {
  setInterval(function () {
    time = parseInt(localStorage.getItem("time")) - 1;
    $(".time").val(time).trigger("change");
    if (time == 0) {
      alertify.error("Time is out!");
      setTimeout(
        () => window.open("../Task1/task1.html", "_self", false),
        2000
      );
      localStorage.removeItem("time");
    } else if (time > 0) {
      localStorage.setItem("time", time);
    }
  }, 1000);
}
