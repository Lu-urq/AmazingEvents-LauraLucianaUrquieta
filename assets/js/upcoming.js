const events = data.events;
const creartarjeta = createcard; 
const checkdinamico = createcheck; 
const filtro = filtradocompleto;


Data(proximosEventos)

function proximosEventos (events, currentDate){
    const eventosfiltrado = events.filter(event => event.date > currentDate)
    createcard (eventosfiltrado, contenedoreventos);

    buscar.addEventListener('click', () => {
     Actualizar(contenedoreventos, eventosfiltrado , textbuscar.value, 'name');

    });

    checkdinamico (eventosfiltrado)

    buscar.addEventListener('click', () => {
     filtro(eventosfiltrado, textbuscar.value, 'name');
  
    });
  
    document.addEventListener('input', e => {
     if (e.target.classList.contains('category')) {
         filtro (eventosfiltrado, textbuscar.value, 'name')
        }
    });


}

