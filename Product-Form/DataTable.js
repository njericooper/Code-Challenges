 function tableUpdate() {
    var table = document.getElementById("table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById("input").value;
    cell2.innerHTML = document.getElementById("input2").value;
    cell3.innerHTML = document.getElementById("input3").value;
    //var items = [];
    //items.push(cell1.innerHTML, cell2.innerHTML, cell3.innerHTML);
    //localStorage.setItem(row, JSON.stringify(items));
    //storedItems = JSON.parse(localStorage.getItem(item));
    //return storedItems;
    
    var theTable = document.getElementById('table');
    for (var r = 0, n = theTable.rows.length; r < n; r++) {
        for (var c = 0, m = theTable.rows[r].cells.length; c < m; c++) {
            const items = [];
            items.push(theTable.rows[r].cells[c].innerHTML);
            localStorage.setItem(JSON.stringify(items));
            storedItems = JSON.parse(localStorage.getItem(items));
            var tableContents = document.getElementById("output").innerHTML = items;
            alert(tableContents);
        }
        
    }
   
   
}




    
