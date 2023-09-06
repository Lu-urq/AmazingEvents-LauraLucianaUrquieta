const events = data.events;
const date = data.currentDate;
const creartarjeta = createcard;
const eventosfiltrados = data.events.filter(event => event.date >= data.currentDate);
const checkdinamico = createcheck;
const filtro = filtradocompleto;

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