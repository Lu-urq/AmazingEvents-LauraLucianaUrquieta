let textbuscar = document.querySelector('input[id=tbuscar]');
let buscar = document.querySelector('button[id=buscar]');
let contenedoreventos = document.querySelector('#contenedoreventos');
let contenedordetails = document.getElementById ('contenedordetails');



let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing';


async function getDataFromApi() {
  try {
    let respuesta = await fetch(urlApi); 
    let apiData = await respuesta.json();
    return apiData;
  } catch (error) {
    console.log(error);
    return null; 
  }
}

async function Data(callback){
 try {
    let apiData = await getDataFromApi(); 
    const events = apiData ? apiData.events : data.events;
    const currentDate = apiData ? apiData.currentDate : data.currentDate;
    
    callback(events, currentDate )
    
  } catch (error) {
   console.log(error)
   
  }
  
};


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
