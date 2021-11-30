var datainfo = document.getElementById("datainfo");

function requestjson() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechage = function() {
        if (this.readyState == 4 && this.status == 200) {
            var content = JSON.parse(this.responseText);
            datainfo.innerHTML = content;
        }
        datainfo.innerHTML = "content";
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}
requestjson();