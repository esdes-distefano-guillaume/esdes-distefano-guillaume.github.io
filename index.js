console.log(document);

var name = "françois";

function changeName(newName) {
    name = newName;
    alert("Wow!")
}

function changeClass(newName) {
    var button = document.getElementById("myButton");
    if (button.className =="rotate"){
    button.className = "";

    }else{
        button.className = "rotate";
    }
}