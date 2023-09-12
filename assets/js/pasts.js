const events = data.events;
const creartarjeta = createcard;
const checkdinamico = createcheck;
const filtro = filtradocompleto;
Data(eventosPasados)

function eventosPasados (events, currentDate){
    const eventosfiltrados = events.filter(event => event.date <= currentDate);

    createcard (eventosfiltrados, contenedoreventos);


    buscar.addEventListener('click', () => {
     Modificarcamposdefiltro(contenedoreventos, eventosfiltrados , textbuscar.value, 'name');

    })

    checkdinamico(eventosfiltrados)

    buscar.addEventListener('click', () => {
        filtro(eventosfiltrados, textbuscar.value, 'name');
  
    });
  
    document.addEventListener('input', e => {
        if (e.target.classList.contains('category')) {
            filtro (eventosfiltrados, textbuscar.value, 'name')
        }
    });
}