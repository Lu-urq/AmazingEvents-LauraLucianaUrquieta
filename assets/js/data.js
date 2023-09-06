const data = {
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};

let textbuscar = document.querySelector('input[id=tbuscar]');
let buscar = document.querySelector('button[id=buscar]');
let contenedoreventos = document.querySelector('#contenedoreventos');

function createcard(array, contenedoreventos) {
  let re = ""
  array.forEach(event => {
    re += `<div class="col col-sm-6 col-lg-3">
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
                            <a href="./details.html?id=${event._id}" class="btn btn-primary border-dark">Details</a>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    contenedoreventos.innerHTML = re

  });
};


function createcheck(array) {
  const categoryevents = array.map(event => event.category);

  const categoriasUnicas = categoryevents.reduce((categoriasUnicas, categoria) => {
    if (!categoriasUnicas.includes(categoria)) {
      categoriasUnicas.push(categoria);
    }
    return categoriasUnicas;
  }, []);

  let checks = "";
  categoriasUnicas.forEach(categoria => {
    checks += `
      <label class="col col-sm-6 col-lg-4">
        <input type="checkbox" id="checkboxs" class="category" name="categoria" value="${categoria}">
        <span>${categoria}</span>
      </label>
    `;

  });

  document.getElementById('contcheck').innerHTML = checks;
};

function filtradocompleto(array, criterio, campo) {
  let busqueda = criterio.toLowerCase();
  let filtro = array.filter(item => item[campo].toLowerCase().includes(busqueda));
  let categ = document.querySelectorAll('.category');
  let chequeados = [];
  for (input of categ) {
    if (input.checked) {
      chequeados.push(input.value);
    }

  }
  if (chequeados.length > 0) {
    filtro = filtro.filter(event => chequeados.includes(event.category));
  }
  if (filtro.length > 0) {
    createcard(filtro, contenedoreventos);
  } else {
    contenedoreventos.innerHTML = `
      <p class="card-title" id="resultado">¡No existe resultado! Intente nuevamente :(</p>
      <div class="d-grid gap-2 col-6 mx-auto" >
      <button class="btn btn-primary mx-auto btn-lg" type="button" onclick="window.location.reload()" style=" height:43px; width:184px;">Volver atrás</button>
      <div>
    `;
  }

}

//para details
function createDetailCard(eventId) {
  const contenedordetails = document.querySelector('#contenedordetails');
  const event = data.events.find(event => event._id === eventId);

  if (event) {
    const tarjeta = `

    <div class="row g-0">
    <div class="col-md-4 ">
      <img src="${event.image}" class="img-fluid rounded-start" alt="${event.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-center">${event.name}</h5>
        <ul class="card-text list-group">
          <li class="list-group-item">Categoría: ${event.category}</li>
          <li class="list-group-item">Fecha: ${event.date}</li>
          <li class="list-group-item">${event.description}</li>
          <li class="list-group-item">Precio: ${event.price}</li>
          <li class="list-group-item">Lugar: ${event.place}</li>
          <li class="list-group-item">Capacidad: ${event.capacity}</li>
        </ul>
      </div>
    </div>
  </div>`;

    // Inserta la tarjeta de detalle en el elemento contenedordetails
    contenedordetails.innerHTML = tarjeta;
  } else {
    contenedordetails.innerHTML = '<p>No se encontró el evento.</p>';
  }
}

