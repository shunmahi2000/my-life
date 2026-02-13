const contentDiv = document.getElementById("content");
const daySelect = document.getElementById("daySelect");
const quotesBg = document.getElementById("quotesBg");

const valentinesWeek = [
  {
    date: "02-07",
    name: "Rose Day 🌹",
    message: "A rose for you, for all the love you bring into my life.",
    image: "images/rose_day.JPG"
  },
  {
    date: "02-08",
    name: "Propose Day 💍",
    message: "If I could propose every day, I would. You mean everything to me.",
    image: "images/propose_day.jpg"
  },
  {
    date: "02-09",
    name: "Chocolate Day 🍫",
    message: "Life is sweeter with you, just like chocolate.",
    image: "images/choco_day.jpg"
  },
  {
    date: "02-10",
    name: "Teddy Day 🧸",
    message: "Sending you the warmest hug through frostu.",
    image: "images/teddy_day.jpg"
  },
  {
    date: "02-11",
    name: "Promise Day 🤝",
    message: "I promise to always profess, provide and protect you. ❣️ and respect you in every situation ☺️",
    image: "images/promise_day.jpg"
  },
  {
    date: "02-12",
    name: "Hug Day 🤗",
    message: "This hug is to remind you you’re never alone ",
    image: "images/hug_day.jpg"
  },
  {
    date: "02-13",
    name: "Kiss Day 💋",
    message: "A kiss to seal all the feelings words can’t express.",
    image: "images/kiss_day.jpg"
  },
  {
    date: "02-14",
    name: "Valentine’s Day ❤️",
    message: "Happy Valentine’s Day Love ♥️. You’re my today and all my tomorrows.",
    image: "images/valentines_day.jpg"
  }
];
const quotesByDay = {
  "02-07": [
    "You are my favorite feeling.",
    "A rose speaks love silently.",
    "Soft hearts bloom quietly.",
    "You make ordinary moments beautiful.",
    "Some feelings never fade.",
    "Love begins gently.",
    "You are warmth.",
    "I smile because of you.",
    "Affection looks like this.",
    "You matter to me.",
    "Romance lives in small things.",
    "This reminds me of you.",
    "Tenderness suits you.",
    "Feelings grow slowly.",
    "You make days softer."
  ],

  "02-08": [
    "I’d choose you again.",
    "If I asked, it would be you.",
    "Every version of forever includes you.",
    "Love feels brave with you.",
    "I already know my answer.",
    "Some promises are unspoken.",
    "You feel like a yes.",
    "I don’t hesitate with you.",
    "My heart leans your way.",
    "Choosing you feels natural.",
    "This is me asking, quietly.",
    "You are my maybe turned sure.",
    "Love stands taller today.",
    "I’d take the chance.",
    "This moment matters."
  ],

  "02-09": [
    "Sweet things remind me of you.",
    "Love melts slowly.",
    "You make life taste better.",
    "Happiness can be simple.",
    "Sharing is sweeter.",
    "A little indulgence is love.",
    "You’re my favorite treat.",
    "Moments like this linger.",
    "Joy comes wrapped in warmth.",
    "Smiles feel richer with you.",
    "Sweetness feels earned.",
    "You feel like comfort.",
    "I savor this feeling.",
    "Warm hearts, full smiles.",
    "This is my kind of sweet."
  ],

  "02-10": [
    "Some comforts are timeless.",
    "I’d hold you a little longer.",
    "Warmth feels familiar.",
    "You make me feel safe.",
    "Softness has a heartbeat.",
    "This feels like care.",
    "A quiet hug means everything.",
    "You are comfort.",
    "Holding on feels right.",
    "Gentle things last.",
    "Peace looks like this.",
    "You calm my noise.",
    "This is what warmth feels like.",
    "I’d stay here.",
    "Still holding you."
  ],

  "02-11": [
    "Consistency is love.",
    "Some promises don’t need words.",
    "I’m here.",
    "You can count on me.",
    "Loyalty feels quiet.",
    "Staying is a choice.",
    "Trust grows slowly.",
    "This matters to me.",
    "I won’t disappear.",
    "Showing up is love.",
    "You’re safe here.",
    "I mean this.",
    "Care is intentional.",
    "I choose you today.",
    "Always trying."
  ],

  "02-12": [
    "Some hugs heal.",
    "Distance fades in closeness.",
    "You fit here.",
    "Comfort lives here.",
    "I’d pull you closer.",
    "This is reassurance.",
    "You’re not alone.",
    "Warm arms, calm heart.",
    "Holding you feels easy.",
    "Breathing feels lighter.",
    "You belong here.",
    "Soft moments matter.",
    "This is care.",
    "Stay a while.",
    "I’ve got you."
  ],

  "02-13": [
    "Affection doesn’t rush.",
    "Some feelings linger.",
    "This is tenderness.",
    "Closeness speaks softly.",
    "I lean in.",
    "A moment says enough.",
    "Love feels near.",
    "Quiet intimacy matters.",
    "This feels personal.",
    "I’m here with you.",
    "Some connections whisper.",
    "This is closeness.",
    "Nothing else exists.",
    "I don’t pull away.",
    "This is gentle."
  ],

  "02-14": [
    "Love is intentional.",
    "You are my person.",
    "I choose you fully.",
    "This is my heart.",
    "You are home.",
    "Forever starts here.",
    "Still choosing you.",
    "You matter deeply.",
    "This love is real.",
    "My today and tomorrow.",
    "You are enough.",
    "Love feels steady.",
    "This is us.",
    "Always you.",
    "Happy Valentine’s Day."
  ]
};



// Get today's date in MM-DD
const today = new Date();
const todayKey =
  String(today.getMonth() + 1).padStart(2, "0") +
  "-" +
  String(today.getDate()).padStart(2, "0");

// Find index of today
const todayIndex = valentinesWeek.findIndex(d => d.date === todayKey);

// Populate dropdown (only past & today)
valentinesWeek.forEach((day, index) => {
  if (index <= todayIndex) {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = day.name;
    daySelect.appendChild(option);
  }
});

// If today not in range → Stay tuned
if (todayIndex === -1) {
  contentDiv.innerText = "Stay tuned 💌 Valentine week  is coming soon!";
} else {
  daySelect.value = todayIndex;
  showContent(todayIndex);
}

// On dropdown change
daySelect.addEventListener("change", (e) => {
  showContent(e.target.value);
});



// function renderQuotes(dateKey) {
//   quotesBg.innerHTML = "";

//   const quotes = quotesByDay[dateKey] || [];
//   const quoteCount = Math.min(quotes.length, 15);

//   for (let i = 0; i < quoteCount; i++) {
//     const span = document.createElement("span");
//     span.textContent = `"${quotes[i]}"`;

//     span.style.top = Math.random() * 90 + "%";
//     span.style.left = Math.random() * 90 + "%";

//     quotesBg.appendChild(span);
//   }
// }
function renderQuotes(dateKey) {
  quotesBg.innerHTML = "";

  const quotes = quotesByDay[dateKey] || [];
  const quoteCount = Math.min(quotes.length, 16);

  // Zones around the card
  const zones = [
    { top: "5%", left: "10%" },   // top-left
    { top: "5%", right: "10%" },  // top-right
    { top: "20%", left: "5%" },   // left-top
    { top: "40%", left: "5%" },   // left-middle
    { bottom: "20%", left: "5%" },// left-bottom
    { top: "20%", right: "5%" },  // right-top
    { top: "40%", right: "5%" },  // right-middle
    { bottom: "20%", right: "5%" },// right-bottom
    { bottom: "5%", left: "10%" }, // bottom-left
    { bottom: "5%", right: "10%" } // bottom-right
  ];

  for (let i = 0; i < quoteCount && i < zones.length; i++) {
    const span = document.createElement("span");
    span.textContent = `"${quotes[i]}"`;

    Object.assign(span.style, zones[i]);

    quotesBg.appendChild(span);
  }
}


// function showContent(index) {
//   const day = valentinesWeek[index];

//   contentDiv.innerHTML = `
//     <div class="day-title">${day.name}</div>
//     <div class="day-message">${day.message}</div>
//     <img src="${day.image}" alt="${day.name}" class="day-image">
//   `;

//   renderQuotes(day.date);
// }
function showContent(index) {
  const day = valentinesWeek[index];

  let extraHtml = "";

  // Only for Valentine's Day
//   if (day.date === "02-14") {
    extraHtml = `
      <div class="love-question">
        <h3>Do you love me? ❤️</h3>
        <div class="love-actions">
          <button id="yesBtn">Yes</button>
        </div>
      </div>
    `;
//   }

  contentDiv.innerHTML = `
    <div class="day-title">${day.name}</div>
    <div class="day-message">${day.message}</div>
    <img src="${day.image}" alt="${day.name}" class="day-image">
    ${extraHtml}
  `;

  renderQuotes(day.date);

  // Button behavior (only if buttons exist)
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const modal = document.getElementById("loveModal");

  if (noBtn) {
    noBtn.addEventListener("mouseenter", () => {
      const x = Math.random() * 160 - 80;
      const y = Math.random() * 40 - 20;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }
}

