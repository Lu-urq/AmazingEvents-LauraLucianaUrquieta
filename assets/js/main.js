const events = data.events; //listo
const creartarjeta = createcard; //listo
const checkdinamico = createcheck; 
const filtro = filtradocompleto;

creartarjeta (events, contenedoreventos); //listo


checkdinamico(events);

buscar.addEventListener('click', () => {
  filtro(events, textbuscar.value, 'name');

});

document.addEventListener('input', e => {
  if (e.target.classList.contains('category')) {
    filtro (events, textbuscar.value, 'name')
  }
});