const quoteText = document.querySelector(".quote"),
    quoteBtn = document.getElementById("new-quote-btn"),
    authorName = document.querySelector(".name"),
    speechBtn = document.querySelector(".speech"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter"),
    synth = window.speechSynthesis;

// List of quotes
const quotes = [
    { text: "Don't be afraid to take risks; remember, the first pancake is always weird, but the stack still gets eaten.", author: "Chef Charlie" },
    { text: "Success is 99% determination and 1% not screaming when WiFi dies during a deadline.", author: "Techy Tim" },
    { text: "Life gives you lemons? Start a lemonade empire; just don’t overthink the branding.", author: "Entrepreneur Ellie" },
    { text: "Never let anyone dull your sparkle... or steal your fries.", author: "Glitter Gary" },
    { text: "Be like a duck. Calm on the surface but paddling like crazy underneath.", author: "Duck Dan" },
    { text: "Your goals are valid, even if step one is finding matching socks.", author: "Casual Chris" },
    { text: "Chase your dreams like you're chasing a balloon in the wind — frantic but determined.", author: "Windy Wendy" },
    { text: "Sometimes you’re the bug, sometimes you’re the windshield; either way, you’re moving forward.", author: "Philosopher Phil" },
    { text: "Wake up every morning determined… and maybe a little confused, but that’s okay.", author: "Alarm Annie" },
    { text: "Think outside the box — especially if you’re too broke to afford one.", author: "Budget Brian" },
    { text: "You don’t have to be the best; just be better than the person who gave up.", author: "Tryhard Terry" },
    { text: "Take life with a pinch of salt… and a margarita on the side.", author: "Vacation Vicky" },
    { text: "Don't wait for opportunity to knock — kick the door down and act like you own it.", author: "Bold Bobby" },
    { text: "You don’t need a cape to be a hero, just enough coffee to function.", author: "Java Jamie" },
    { text: "Be the plot twist everyone wishes they saw coming.", author: "Twisty Tina" },
    { text: "The road to success is bumpy, so wear comfy shoes.", author: "Sneaker Sam" },
    { text: "If you're going to fail, at least fail fabulously.", author: "Sassy Susan" },
    { text: "Progress is progress, even if you’re crawling like you’ve just run a marathon.", author: "Marathon Marty" },
    { text: "Why fit in when you were born to stand out… preferably on a day your hair cooperates.", author: "Unique Uma" },
    { text: "Work hard until your bank account looks like a phone number… with fewer zeros at the start.", author: "Richie Rick" },
  
    { text: "Celebrate the small wins, like when your phone battery lasts the whole day.", author: "Charger Charlie" },
    { text: "The grass is greener where you water it… unless you forget and it’s a desert now.", author: "Dry Dave" },
    { text: "Keep your head up, but not so high you miss the low-hanging fruit.", author: "Fruitful Fiona" },
    { text: "Be brave enough to suck at something new — it’s how pros are born.", author: "Amateur Andy" },
    { text: "Treat every day like it’s Taco Tuesday, because enthusiasm is everything.", author: "Spicy Sally" },
    { text: "Overthinking is a waste of creativity. Use those brain cells to plan a snack break.", author: "Hungry Holly" },
    { text: "Success isn’t final, failure isn’t fatal, but snacks are always mandatory.", author: "Snacky Steve" },
    { text: "Don't put off till tomorrow what you can cancel entirely today.", author: "Cancel Carl" },
    { text: "Be stubborn about your goals but flexible about your methods — like yoga with a purpose.", author: "Stretchy Stella" },
    { text: "Aim for progress, not perfection… and maybe aim to show up with matching socks.", author: "Mismatched Molly" },
    { text: "Start somewhere — even if it’s at the snack aisle in the grocery store.", author: "Foodie Fiona" },
    { text: "Take on life’s challenges like a gamer on level one: with curiosity and infinite lives.", author: "Pixel Pete" },
    { text: "The sun always shines after the storm, but pack a raincoat just in case.", author: "Prepared Patty" },
    { text: "When opportunity doesn’t knock, build your own door, preferably with WiFi.", author: "Builder Bobbie" },
    { text: "The road to greatness is long, so bring snacks and a good playlist.", author: "Traveler Tina" },
    { text: "It’s not about how fast you run but how stylish you look crawling to the finish line.", author: "Stylish Sid" },
    { text: "You don’t have to be fearless, just be brave enough to show up anyway.", author: "Brave Brenda" },
    { text: "Chase your dreams with the tenacity of a cat chasing a laser pointer.", author: "Catty Cathy" },
    { text: "You can’t pour from an empty cup, but you can fill it with coffee first.", author: "Barista Barry" },
    { text: "Don’t just think outside the box; dance around it and call it a new idea.", author: "Dancing Danny" },
    { text: "Be like glue. Stick to your goals and hope they don’t involve glitter.", author: "Sticky Suzy" },
    { text: "Find what sets your soul on fire — just don’t burn the kitchen down.", author: "Chef Chloe" },
    { text: "Life’s short, so smile while you still have teeth.", author: "Grinning Greg" },
    { text: "Take life one step at a time, unless you’re on an escalator, then enjoy the ride.", author: "Lazy Liam" },
    { text: "If plan A doesn’t work, remember there are 25 more letters in the alphabet.", author: "Alphabet Abby" },
    { text: "Embrace the chaos — it means you’re doing something right.", author: "Chaotic Chris" },
    { text: "Keep moving forward, even if it’s at the pace of a penguin with a purpose.", author: "Waddling Wendy" },
    { text: "Opportunities are like sunrises — beautiful but make you get up early.", author: "Morning Mike" },
    { text: "Success doesn’t come overnight, but pizza delivery does. Enjoy the journey!", author: "Cheesy Charlie" },
    { text: "Shoot for the stars — just avoid space junk on the way up.", author: "Astronaut Andy" },
  
    { text: "Run your race, not someone else's — unless there’s free pizza at the finish line.", author: "Racing Ryan" },
    { text: "Be like a boomerang: come back stronger every time you’re thrown.", author: "Bouncing Billie" },
    { text: "Every setback is a setup for an epic comeback, just like in movies with bad sequels.", author: "Sequel Sandy" },
    { text: "The ladder of success is steep, so climb it like you’re wearing climbing boots, not flip-flops.", author: "Mountaineer Max" },
    { text: "Learn from the past, live in the present, but don’t forget to prepare snacks for the future.", author: "Time Traveler Tessa" },
    { text: "Good things come to those who hustle — and to those who figure out microwave popcorn timing perfectly.", author: "Popping Pete" },
    { text: "Be like water: adaptable, persistent, and able to find your way through the smallest cracks.", author: "Flowing Fiona" },
    { text: "Life’s too short for boring goals; add a little glitter to your ambition.", author: "Shiny Shane" },
    { text: "Turn your failures into stepping stones… or at least sturdy coasters for your coffee cup.", author: "Building Bob" },
    { text: "Find a reason to laugh every day, even if it’s just at your own reflection before coffee.", author: "Laughing Larry" },
    { text: "Keep climbing, even if the only view at the top is your cat judging you.", author: "Pet Lover Paula" },
    { text: "Start your mornings with determination and at least three alarms.", author: "Oversleeper Oscar" },
    { text: "Be your biggest cheerleader, especially when the crowd is busy scrolling Instagram.", author: "Pep Talk Patty" },
    { text: "Celebrate your uniqueness — there’s nobody else like you, and that’s probably for the best.", author: "Quirky Quinn" },
    { text: "Success is the ability to go from one pizza slice to another without losing motivation.", author: "Cheese Lover Lisa" },
    { text: "Be so good at what you do that even WiFi can’t disconnect your brilliance.", author: "Connection Carla" },
    { text: "Mistakes are proof that you’re trying, so keep trying — unless it’s skydiving without a parachute.", author: "Risky Rachel" },
    { text: "Turn your can'ts into cans and your dreams into memes for motivation.", author: "Digital Dave" },
    { text: "Remember, every master was once a beginner, even Picasso probably doodled stick figures.", author: "Artsy Alice" },
    { text: "Take breaks to refuel — even rockets pause to get their launch right!", author: "Spacey Sam" },
    { text: "Life is a game of Tetris. Make sure to fit in all the quirky pieces uniquely.", author: "Gamer Gabby" }
  ];
  


// Function to fetch a random quote from the list
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

quoteBtn.addEventListener("click", () => {
    console.log("Button clicked! Fetching new quote...");
    try {
        const quote = getRandomQuote();
        console.log("Fetched quote:", quote);
        quoteText.innerText = quote.text;
        authorName.innerText = quote.author;
    } catch (error) {
        console.error("Failed to fetch quote:", error);
        quoteText.innerText = "Oops! Couldn't fetch a quote.";
        authorName.innerText = "";
    }
});

// Speech synthesis functionality
if (speechBtn) {
    speechBtn.addEventListener("click", () => {
        if (!quoteBtn.classList.contains("loading")) {
            let utterance = new SpeechSynthesisUtterance(
                `${quoteText.innerText} by ${authorName.innerText}`
            );
            synth.speak(utterance);
            speechBtn.classList.add("active");
            utterance.onend = () => {
                speechBtn.classList.remove("active");
            };
        }
    });
}

// Copy to clipboard functionality
if (copyBtn) {
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(`${quoteText.innerText} - ${authorName.innerText}`);
        alert("Quote copied to clipboard!");
    });
}

// Share on Twitter functionality
if (twitterBtn) {
    twitterBtn.addEventListener("click", () => {
        let tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quoteText.innerText}" - ${authorName.innerText}`
        )}`;
        window.open(tweetUrl, "_blank");
    });
}

// Fetch an initial quote on page load
document.addEventListener("DOMContentLoaded", () => {
    try {
        const quote = getRandomQuote();
        console.log("Fetched quote on load:", quote);
        quoteText.innerText = quote.text;
        authorName.innerText = quote.author;
    } catch (error) {
        console.error("Failed to fetch quote:", error);
        quoteText.innerText = "Oops! Couldn't fetch a quote.";
        authorName.innerText = "";
    }
});

  