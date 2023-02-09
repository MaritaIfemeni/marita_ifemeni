var lause = "Hauki on kala hauki ei ole KANA hauki on kala"

function spottaaSiipielain(){
    //find word "KANA" usinf regEx and its index from the string
    // replase kana with regex wich is not saying kana
    var kaa = lause.match(/kana/gi);
    var wordIndex = lause.indexOf(kaa);

    //print only word "KANA" from the string and add spaces on the front as many as teh index of the word
    let tuloste = "";
    for (let i = 0; i < wordIndex; i++) {
      tuloste += " ";
    }

    tuloste += kaa;
    tuloste = tuloste.toLowerCase();
    
    console.log(lause);
    console.log(tuloste)
}

spottaaSiipielain();