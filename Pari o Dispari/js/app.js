//recupero dal DOM il pulsante invia al quale poi aggiungo l'event listener "click" per prendere i value precedentemente recuperati dal DOM

const sendButton = document.getElementById("button")

//resto in ascolto del click sul bottone sendButton

sendButton.addEventListener("click", function(){

    //fare scegliere all'utente tra pari e dispari
    //recupero dal DOM la value dell'input text con la scelta dell'utente tra pari e dispari
    const evenOdd = document.getElementById("even_odd").value
    console.log("Your choice is " + evenOdd)
    
    
    //l'utente inserisce un numero da 1 a 5
    //recupero dal DOM il value dell'input per la scelta del numero con getElementById
    const userNumber = parseInt(document.getElementById("number").value)
    console.log("Your number is " + userNumber)
    


    //generiamo un numero random (sempre da 1 a 5) usando una funziona che può essere la math.random
    const cpuNumber = Math.floor(Math.random() * 5) + 1;
    console.log("CPU number is " + cpuNumber)
    
    
    //sommiamo i 2 numeri (quello inserito dall'utente e quello generato randomicamente)
    const numbersSum = userNumber + cpuNumber
    console.log("The sum is " + numbersSum)
    

    //stabiliamo se la somma dei 2 numeri è pari o dispari usando una funzione (che potremmo chiamara isNumberEven)
    function isnumbersSumEven (number){

        const rest = number % 2;

        if(rest === 0){
            return "even";
        }else{
            return "odd";
        } 
    }

    const result = isnumbersSumEven(numbersSum)
    console.log("The sum is " + result)


    //SE l'utente indovina che il numero è pari o dispari, avrà vinto
    if(evenOdd === result){
        console.log("You win!")

        //ALTRIMENTI avrà vinto il computer
    }else{
        console.log("You lose!")
    }





})
