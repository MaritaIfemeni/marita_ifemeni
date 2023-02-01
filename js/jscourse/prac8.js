//Createn html file and name it prac8.html. Copy the following code to the file and save it.

var a = 6;
function test() {
    var a = 7;
    function again() {
        var a = 8;
        alert(a);  // A
    }
    again();
    alert(a);  // B
}
test();
​alert(a);​  // C
