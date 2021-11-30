var datainfo = document.getElementById("datainfo");

function selection(i) {
    var card = document.getElementById(i);
    card.style.backgroundColor = "#ADFF2F";
    card.setAttribute("selected", "1");
}

function requestjson() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var content = JSON.parse(this.responseText);
            var out = "";
            for (var i = 0; i < content.length; i++) {
                var color = "";
                var userid = content[i].userId;
                if (userid % 2 == 0) { color = "background-color: antiquewhite;"; }
                var id = content[i].id;
                var title = content[i].title;
                out += `
                <div class="col pb-2"><div onclick='selection(${i});' class="card" style="${color}" slected="0" id="${i}">
<div class="card-body">
<h1 class="card-title text-center pb-1 h5">User: ${userid}</h1>
<span class="card-text">
${title}
</span>
</div>
</div></div>
                `;
            }
            datainfo.innerHTML = "<div class='mb-3 text-center '>Click on card to select tasks which are completed.</div><div class='d-flex justify-content-center'><div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>" + out + "</div></div>";

        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}
requestjson();



// var card = document.getElementsByClassName('card');
// var selected = document.getElementsByTagName("selected");

// console.log(card.length);
// card.onclick = function() {
//     card.innerHTML = "antiquewhite";

// }