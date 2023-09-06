// Obtener el ID del evento de la URL
const queryString = document.location.search;
const parametros = new URLSearchParams(queryString);
const eventId = parametros.get('id');

// Llama a la función createDetailCard con el ID del evento seleccionado
createDetailCard(eventId);


