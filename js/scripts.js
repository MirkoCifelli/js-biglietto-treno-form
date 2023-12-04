// Ciao ragazzi,
// esercizio di oggi: calcolo del prezzo del biglietto del treno
// cartella/repo: js-biglietto-treno-form
// Descrizione:
// Scrivere un programma che chieda all'utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
const buttonGenera = document.getElementById(`genera`);
buttonGenera.addEventListener(`click`, 
function(){
    const inputNome = document.getElementById(`nome-utente`);
    const nomeUtente = inputNome.value;
    console.log(nomeUtente);

    const inputKm = document.getElementById(`km`);
    const kmPercorsi = parseInt(inputKm.value);
    console.log(kmPercorsi);
    
    const inputEta = document.getElementById(`age`);
    const age = parseInt(inputEta.value);
    console.log(age);
    

    const prezzo = kmPercorsi * 0.21;
    console.log (prezzo);

    if ( age > 65 ){
        full = (prezzo * 0.6).toFixed(2);
    }
    else if ( age < 18){
        full = (prezzo * 0.8).toFixed(2);
    }
    else{
        full = prezzo.toFixed(2);
    }
    const carozza = Math.floor(Math.random() * 9) +1;
    const cp = Math.floor(Math.random() * (100000-90000 +1)) +90000;
    console.log(full);

    document.getElementById('carrozza').innerHTML = carozza ;
    document.getElementById('codice-cp').innerHTML = cp ;
    document.getElementById(`costo-biglietto`).innerHTML += full + ' $'

});


const buttonAnnulla  = document.getElementById(`annulla`);
buttonAnnulla.addEventListener(`click`,
function(){
    document.getElementById('carrozza').innerHTML = `` ;
    document.getElementById('codice-cp').innerHTML = `` ;
    document.getElementById(`costo-biglietto`).innerHTML = `` ;
});