//chiediamo all'utente di inserire una parola
const word = prompt("inserisci una parola")

let result = ""


//creare una funzione per capire se la parola inserita dall'utente è palindroma  

function isPalindrome (word){

    //dichiariamo una variabile alla quale assegnamo come valore la lunghezza della parola inserita dall'utente
    const wordLength = word.length;

    //creiamo un ciclo per iterare solamente metà della stringa rappresentata dalla parola inserita dall'utente
    for (let i = 0; i < wordLength / 2; i++){
 
        //SE una lettera della prima metà della parola è uguale alla sua corrispondente nella seconda metà
        if (word[i] === word[wordLength - 1 - i]){
            result = "La parola è palindroma"
            //la funziona ci restituirà true 
            return true
            
        }else{
            //altrimenti ci restituirà false
            result = "La parola non è palindroma"
            return false
        }

    }
}

//dichiaro una variabile dove le assegno la funzione appena creata
const checkPalindrome = isPalindrome(word)

//stampo in console un messaggio per comunicare all'utente il risultato del controllo    
console.log(result)
