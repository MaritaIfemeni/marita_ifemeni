// tämä on kommentti, joka on yhdellä rivillä

/* tämä on kommentti, 
    joka
    on
    neljällä rivillä */

    // Java skript tietotyypit: undefined, null, boolean, string, symbol, number ja object
    // muuttuja = variable on se mihin tietokone tallentaa ja manipuloi dataa dynaamisesti
    // tietokone kutsuu muuttujia niiden nimillä sen sijaan, että osoittaisi suoraan itse dataan,
    // toisin sanoen muuttujat ovat vain viitteitä dataan, johon haluamme viitata.
    // muuttujien arvot voivat muuttua

    // esimerkki muuttujista

    var omaNimi;
    // var tarkoittaa että kyseessä on globaali muuttuja, joka on käytettävissä kaikissa funktioissa ja 
    // sana omaNimi on muuttujan nimi
    // JavaScript on merkkiriippuvainen kieli, joten muuttujien nimet ovat case-sensitive
    // null ja undefined ovat muuttujien arvoja, jota eivät käyttäydy oliomaisesti.

    /*
    Useissa ohjelmointikielissä luvuille voidaan tehdä erilaisia tilanvarauksia. 
    Esimerkiksi C-kielessä luvuille on olemassa 8-bittinen ja 16-bittinen muuttujamäärittely. 
    Sen sijaan JavaScriptissä numerotietoa tallentavat muuttujat ovat aina 64 bittisiä. 
    Tämä merkitsee sitä, että jos tallennetaan esimerkiksi luku 240, se vaatii oikeasti vain kahdeksan 
    bitin tilanvarauksen, JavaScriptissa kuitenkin varataan aina 64 bitin verran.

    JavaScript-muuttujien tietotyyppiä ei erikseen määritellä. 
    Muuttujien arvojen tietotyyppiäkin voidaan vaihtaa dynaamisesti, ohjelman suorituksen aikana.
    */

    console.log("Hello World!");

    // Operaattori (operator) on symbolinen merkki tai merkkiyhdistelmä lausekkeessa, joka suorittaa 
    // tietyn toimenpiteen.
    // Operaattorien avulla suoritetaan laskutoimituksia, verrataan lukuja toisiinsa ja tehdään sijoituksia 
    // muuttujiin. Yleisin operaattori on sijoitusoperaattori eli yhtäsuuruus-merkki (=). Sen avulla 
    // sijoitetaan muuttujalle uusi arvo. Sitä ei kuitenkaan missään 
    // nimessä tule sekoittaa vertailuoperaattoriin ==, jonka avulla tarkistetaan ovatko arvot yhtä suuria.

    console.log("saippuakauppias" === "saippuakauppias");

    var henkilo= {
        nimi: 'jussi',
        ika: 20,
        driver: null
      };
      
      henkilo.driver = ((henkilo.ika >=18) ? 'Yes' : 'No');
      console.log(henkilo.driver);

    var muuttuja = 5
    console.log("Muuttujan arvo on:" + muuttuja)

    var  luku1 = 17
    var luku2 = 3
    var summa = luku1 + luku2
    var erotus = luku1 - luku2
    var tulo = luku1 * luku2
    var osamaara = luku1 / luku2
    var jakojaannos = luku1 % luku2 



    console.log("Luvut ovat " + luku1 + " ja " + luku2)
    console.log("Summa on " + summa)
    console.log("Erotus on " + erotus)
    console.log("Tulo on " + tulo)
    console.log("Osamäärä on " + osamaara)
    console.log("Jakojäännös on " + jakojaannos)

    

    a = 8 + "8"
    console.log(a)

    var a = "GeeksforGeeks"
    var x = a.lastIndexOf("G")
    console.log(x)

    var result = a.substring(4, 5)
    console.log(result)

    console.log(3>2>1===false)

    var t = 5
    var k = 4
    console.log(Math.min(t,k))
    console.log(Math.round(7.25))

    var sum = 0.1 + 0.7
    console.log(sum)







            //create function called tulostaLuvut that prints out the array lenght and the average of the numbers in the array
            function tulostaTiedot() {
              var summa = 0;
              for (var i = 0; i < luvut.length; i++) {
                  summa += luvut[i];
              }
              var keskiarvo = summa / luvut.length;
              document.getElementById("tulos").innerHTML = "Taulukossa on " + luvut.length + " arvoa. \n Lukujen keskiarvo on " + keskiarvo;
          }

          var arrayyyy = [1,2,3,4,5,"jaa",7,8,"joo",10]
          function tulostaTaulukko() {
              var tulos = "";
              for (var i = 0; i < arrayyyy.length; i++) {
                  tulos += arrayyyy[i] + " ";
              }
              console.log(tulos);
          }
          tulostaTaulukko();