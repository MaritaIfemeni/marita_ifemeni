// make regex usin /abc|xyz/
//  and then use it in match method

var testi = "abbcccdddd"

function testiFunk(){
    var testi2 = testi.match(/ab+c?/);
    console.log(testi2)
}

testiFunk();

var text = "testing: 1, 2, 3"; 
var pattern = /\d+/g;

console.log(pattern.test(text));  
System.out.console.log(Pattern.matches("[amn]", "abcd"));