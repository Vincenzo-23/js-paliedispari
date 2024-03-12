//fare scegliere all'utente tra pari e dispari
    //recupero dal DOM i value degli input pari e dispari con getElementById

const even = document.getElementById("even").value

const odd = document.getElementById("odd").value


//recupero dal DOM il pulsante invia al quale poi aggiungo l'event listener "click" per prendere i value precedentemente recuperati dal DOM

const sendButton = document.getElementById("button")

//resto in ascolto del click sul bottone sendButton

sendButton.addEventListener("click", function(){
    
    //l'utente inserisce un numero da 1 a 5
    //recupero dal DOM il value dell'input per la scelta del numero con getElementById
    const userNumber = document.getElementById("number").value
    


    //generiamo un numero random (sempre da 1 a 5) usando una funziona che può essere la math.random
    
    //sommiamo i 2 numeri (quello inserito dall'utente e quello generato randomicamente)
    
    //stabiliamo se la somma dei 2 numeri è pari o dispari usando una funzione (che potremmo chiamara isNumberEven)
    
    //SE l'utente indovina che il numero è pari o dispari, avrà vinto
    //ALTRIMENTI avrà vinto il computer





})
