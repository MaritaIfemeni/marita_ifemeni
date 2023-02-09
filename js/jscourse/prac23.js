
const viikonPaiva = (function() {
    const nimet = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];
// lkm() palauttaa viikonpäivien lukumäärän
    function lkm() {
        return nimet.length;
    }
// nimi() palauttaa viikonpäivän nimen annetulla indeksillä
    function nimi(indeksi) {
        return nimet[indeksi];
    }
// numero() palauttaa viikonpäivän indeksin annetulla nimellä
    function numero(nimi) {
        return nimet.indexOf(nimi);
    }
    return {
        lkm: lkm,
        nimi: nimi,
        numero: numero
    };

})();

var num = 0;
console.log("Viikossa on " + viikonPaiva.lkm() + " päivää.");
console.log("Ohjelmoinnissa päivän " + viikonPaiva.nimi(num) + " indeksi on yleensä " + viikonPaiva.numero(viikonPaiva.nimi(num)));
