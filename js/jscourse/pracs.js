const nelio = function(x) {
    return x * x;
    };

    console.log(nelio(12));

    var lopputulos = (function(alku, loppu) {
        var summa = 0;
        for (var i = alku; i < loppu; i++) {
           summa += i;
        }
        return summa;
        })(2, 5);
    
    console.log(lopputulos);

    const kilauta = function() {
        console.log("Pling!");
      };
      
      kilauta(); 

      const potenssi = function(kanta, eksponentti) {
        var tulos = 1;
        for (var laskuri = 0; laskuri < eksponentti;   laskuri++) {
          tulos *= kanta;
        }
        return tulos; 
      };
      
      console.log(potenssi(2, 10)); 

      function f() {
        var a=1, b=2;
        function ff() {
          var a = 11; 
          console.log(a+" "+b); 
        }
        ff();
        console.log(a+" "+b);
      }
      
      f();

      function jokuFunktio() {
        console.log("Olen funktio!");
      }

      jokuFunktio();

      function fun() {
        var a = 10;
        if(a > 5) {
            a = 7;
        }
        
        console.log(a);
    }
  fun();
  function funfun() {
    if(true) {
        var a = 5;
    }
    console.log(a);
}
funfun();

var a = 5;
function first() {
    a = 6;
}

function second() {
    console.log(a);
}

first();
second();



