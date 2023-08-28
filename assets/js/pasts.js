let events = [
    {
        _id: 1,
        image: './assets/img/food_fair.jpg',
        name: "Festival of the collectivities",
        date: "2022-12-12",
        description: "Enjoy your favorite dishes from different countries in a unique event for the whole family.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        assistance: 42756,
        price: 5
    },
    {
        _id: 2,
        image: './assets/img/outing_to_the_museum.jpg',
        name: "Art Exhibition",
        date: "2022-11-02",
        description: "Let's go to the art museum for an incredible tour to learn about the largest dinosaurs.",
        category: "Museum",
        place: "Field",
        capacity: 82000,
        assistance: 65892,
        price: 15
    },
    {
        _id: 3,
        image: './assets/img/costume_party.jpg',
        name: "Halloween Night",
        date: "2024-02-12",
        description: "Come in your scariest costume character to win amazing prizes.",
        category: "Costume Party",
        place: "Room C",
        capacity: 12000,
        estimate: 9000,
        price: 12
    },
    {
        _id: 4,
        image: './assets/img/music_concert.jpg',
        name: "Metallica in concert",
        date: "2024-01-22",
        description: "The only concert of the most emblematic band in the world",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        estimate: 138000,
        price: 150
    },
    {
        _id: 5,
        image: './assets/img/marathon.jpg',
        name: "10K for life",
        date: "2022-03-01",
        description: "Come and exercise, improve your health and lifestyle.",
        category: "Race",
        place: "Soccer Field",
        capacity: 30000,
        assistance: 25698,
        price: 3
    },
    {
        _id: 6,
        image: './assets/img/books.jpg',
        name: "School Book Fair",
        date: "2022-10-15",
        description: "Bring your unused school book and bring the one you need.",
        category: "Book Exchange",
        place: "Room D1",
        capacity: 150000,
        assistance: 123286,
        price: 1
    },
    {
        _id: 7,
        image: './assets/img/cinema.jpg',
        name: "Avengers",
        date: "2023-10-15",
        description: "Marvel's Avengers 3d premiere the start of an epic saga with your best superheroes",
        category: "Let's go to the cinema",
        place: "Room D1",
        capacity: 9000,
        estimate: 9000,
        price: 250
    }
];

let contenedoreventos = document.getElementById('contenedoreventos');

for (const event of events) {
    if (new Date (event.date) < new Date("2023-08-15")) {
        let card =`<div class="col col-sm-6 col-lg-3">
        <div class="card h-100">
            <img src="${event.image}" class="card-img-top" alt="${event.name}">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
            </div>
            <div class="card-footer">
                <div class="text-body-secondary text-end container-fluid"
                    style="padding-left: 0px;padding-right: 0px;">
                    <div class="card-body row align-items-center">
                        <div class="col-md-8">
                            <h5 class="card-title">Price: ${event.price}</h5>
                        </div>
                        <div class="col-md-4 d-block">
                            <a href="./detailsbook.html" class="btn btn-primary border-dark">Details</a>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    
    contenedoreventos.innerHTML += card;

    }
}