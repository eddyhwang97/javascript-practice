// local reviews data
const reviews = [
  {
    id: 1,
    name: "주지훈",
    job: "actor",
    img: "../img/profile.jpeg",
    text: "Ju Ji-hoon is a South Korean actor and model. His first leading role was in the Princess Hours. His other notable works include Lucifer, Antique, Mask, Along with the Gods: The Two Worlds, Along with the Gods: The Last 49 Days, The Spy Gone North, Dark Figure of Crime, Kingdom and Jirisan.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
// 변수들을 선언한다.
const img = document.getElementById(
  "person-img"
);
const autor =
  document.getElementById("autor");
const job =
  document.getElementById("job");
const info =
  document.getElementById("info");

const prevBtn = document.querySelector(
  ".prev-btn"
);
const nextBtn = document.querySelector(
  ".next-btn"
);
const randomBtn =
  document.querySelector(".random-btn");

// set starting item
// 변수에 데이터(index)를 할당한다.
let currentItem = 0;

// load initial item
// 변수 showPerson(currentItem)으로 화면에 이벤트를 등록한다.
// 이 이벤트는 item을 콜백한다.
// item은 reviews[currentItem]에서 data를 가져온다.

window.addEventListener(
  "DOMContentLoaded",
  function () {
    const item = reviews[currentItem];
    img.src = item.img;
    autor.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
);

// show person based on item
//
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  autor.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener(
  "click",
  function () {
    currentItem++;
    if (
      currentItem >
      reviews.length - 1
    ) {
      currentItem = 0;
    }
    showPerson(currentItem);
  }
);

// show prev person
prevBtn.addEventListener(
  "click",
  function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  }
);

// show random person
// 랜덤버튼에 클릭이벤트를 수신한다.
// 이 이벤트내 기능을 콜백받는다.
randomBtn.addEventListener(
  "click",
  function () {
    // index 0~3사이의 난수를 생성해야함
    currentItem = Math.floor(
      Math.random() * reviews.length
    );
    showPerson(currentItem);
  }
);
