var sname = document.getElementById("name");
var sroll = document.getElementById("roll");
var sdep = document.getElementById("dep");
var scgpa = document.getElementById("cgpa");
var btn = document.getElementById("btn");

btn.addEventListener('click', function(pera) {
    pera.preventDefault();
    if (name.value == '') {
        alert('no name enter');
    } else if (roll.value == '') {
        alert('no roll enter');
    } else if (dep.value == '') {
        alert('no depertment enter');
    } else if (cgpa.value == '') {
        alert('no cgpa enter');
    } else {
        var tbody = document.getElementById("tbody");
        var tr = document.createElement('tr');

        var td = document.createElement('td');
        td.innerHTML = sname.value;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.innerHTML = sroll.value;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.innerHTML = sdep.value;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.innerHTML = scgpa.value;
        tr.appendChild(td);

        tbody.appendChild(tr);
    }
});