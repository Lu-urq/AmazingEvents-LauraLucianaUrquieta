const events = data.events;
const date = data.currentDate;
const creartarjeta = createcard;
const eventosfiltrado = data.events.filter(event => event.date < data.currentDate)
const checkdinamico = createcheck;
const filtro = filtradocompleto;


fcrearcard (eventosfiltrado, contenedoreventos);

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
