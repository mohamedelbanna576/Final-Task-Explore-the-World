const destinations = [
    {
        name: "Paris",
        country: "FRANCE",
        continent: "Europe",
        food: "Croissant, Macarons",
        place: "Eiffel Tower",
        language: "French",
        description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        image: "images/paris.jpg"
    },
    {
        name: "Tokyo",
        country: "JAPAN",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Tokyo Tower",
        language: "Japanese",
        description: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
        image: "images/tokyo.jpg"
    },
    {
        name: "Rome",
        country: "ITALY",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",
        description: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
        image: "images/roma.jpg"
    },
    {
        name: "Cairo",
        country: "EGYPT",
        continent: "Africa",
        food: "Koshari, Foul",
        place: "Pyramids",
        language: "Arabic",
        description: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
        image: "images/cairo.jpg"
    }
];

const cityName = document.getElementById("cityName");
const country = document.getElementById("country");
const continent = document.getElementById("continent");
const food = document.getElementById("food");
const place = document.getElementById("place");
const language = document.getElementById("language");
const description = document.getElementById("cityDescription");
const cityImage = document.getElementById("cityImage");
const cityNumber = document.getElementById("cityNumber");
const imageNumber = document.getElementById("imageNumber");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;

const dots = destinations.map((destination, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.setAttribute("aria-label", destination.name);
    dot.addEventListener("click", () => showDestination(index));
    return dot;
});

function showDestination(index) {
    currentIndex = (index + destinations.length) % destinations.length;

    const destination = destinations[currentIndex];
    const number = String(currentIndex + 1).padStart(2, "0");
    const total = String(destinations.length).padStart(2, "0");

    cityName.textContent = destination.name;
    country.textContent = destination.country;
    continent.textContent = destination.continent;
    food.textContent = destination.food;
    place.textContent = destination.place;
    language.textContent = destination.language;
    description.textContent = destination.description;
    cityNumber.textContent = `${number} / ${total}`;
    imageNumber.textContent = number;
    cityImage.src = destination.image;
    cityImage.alt = destination.name;

    dots.forEach((dot, dotIndex) => {
        dot.setAttribute("aria-pressed", String(dotIndex === currentIndex));
    });
}

document.getElementById("prevBtn").addEventListener("click", () => {
    showDestination(currentIndex - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    showDestination(currentIndex + 1);
});

document.getElementById("exploreBtn").addEventListener("click", () => {
    const destination = destinations[currentIndex];
    alert(`Discover ${destination.name} in ${destination.country}!\nFamous Place: ${destination.place}`);
});

dotsContainer.append(...dots);
showDestination(0);
