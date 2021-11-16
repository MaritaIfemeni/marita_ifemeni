function getResult() {
    var fullname = document.getElementById('fullname').value;
    var password = document.getElementById('pword1').value;
    var password_2 = document.getElementById('pword2').value;

    if (password != password_2) { alert ("Check passwords!"); return false; }


    var gender  = selectGender();
    var hobby = selectHobby();
    var birthday = document.getElementById('birthday').value;
    var height = document.getElementById('height').value;
    var color = document.getElementById('favcolor').value;
    var country = document.getElementById('country').value;
    var job = document.getElementById('job').value;
    var message = selectMessage();

    let result = `Full name: ${fullname} 
                 <br>Password: ${password} 
                 <br>Password again: ${password_2} 
                 <br>Gender: ${gender} 
                 <br>Hobbies: ${hobby}
                 <br>Birthday: ${birthday}
                 <br>Height: ${height}
                 <br>Favourite color: ${color}
                 <br>Country: ${country} 
                 <br>Profession: ${job}
                 <br>Message: ${message}`;

    document.getElementById('result').innerHTML = result;

    return true;
}

var selectHeight= document.getElementById("height");
var output = document.getElementById("heightvalue");
output.innerHTML = `${selectHeight.value} cm`;

selectHeight.oninput = function() {
    output.innerHTML = `${this.value} cm`;
}

function selectGender() {
    let gender = document.getElementsByName('gender');
    var checked = "";
    for (var i = 0; i < gender.length; i++)
    {
        if (gender[i].checked) {
            checked = gender[i].value;
        }
    }

    return checked;
}
function selectHobby() {
    let hobby  = document.getElementsByName('hobby');
    var selected = "";
    var selected_n = "";
    for (var i = 0; i < hobby.length; ++i)
    {
        if (hobby[i].selected) {
            selected += `${hobby[i].value}, `;
        }
    }
    if (selected != "") {
        selected_n = selected.substring(0, selected.length - 2);
    }

    return selected_n;
}

function selectMessage() {
    let message = document.getElementById('message').value;
    message_style = message.replace(/(\r\n|\n)/g, "<br/>")
    return message_style; 
}