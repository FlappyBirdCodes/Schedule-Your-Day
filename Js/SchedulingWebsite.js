//Variables that store the attributes on SchedulingWebsite.html
let add_button = document.getElementById("add-button");
let table = document.getElementById("table-data");
let add_incorrect = document.getElementById("add-incorrect-format");
let delete_incorrect = document.getElementById("delete-incorrect-format");
let delete_row = document.getElementById("delete").value;

//Checks if user input is in correct format
function isCorrectFormat() {
    if (document.getElementById("time").value == "" || document.getElementById("activity").value == "") {
        return false;
    } else {
        return true;
    }
}

//Checks if add button has been pressed
add_button.onmousedown = function() {
    //Finds the value to the input
    let insert_row = document.getElementById("insert-row").value;
    let insert_value = parseInt(insert_row);

    if (isCorrectFormat() && insert_row == "" || insert_value >= 1 && insert_value <= table.rows.length) {
        //Values for time and activity
        let time = document.getElementById("time").value;
        let activity = document.getElementById("activity").value;    

        //Sets to row to last or insert value depending on the input
        let row = table.insertRow();
        if (Number.isInteger(insert_value) && insert_value > 0) {
            row = table.insertRow(insert_value);
        }

        //Inserts new cells and sets attributes of new cells
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.align = "center";
        cell2.align = "center";
        cell1.style.backgroundColor = "lightgoldenrodyellow";
        cell2.style.backgroundColor = "lightgreen";
        cell1.innerHTML = time;
        cell2.innerHTML = activity;

        //Resets input boxes to an empty string
        document.getElementById("time").value = "";
        document.getElementById("activity").value = "";
        document.getElementById("insert-row").value = "";
        add_incorrect.style.visibility = "hidden";
    } else {
        //Tells user that their input is invalid
        add_incorrect.style.visibility = "visible";
    }
};


let delete_all_button = document.getElementById("delete-all");
//Checks if delete all button has been pressed
delete_all_button.onmousedown = function() {
    //Deletes all rows in the table
    let i = 1;
    while (i < table.rows.length) {
        table.deleteRow(i);
    }
    //Resets input boxes to an empty string
    document.getElementById("time").value = "";
    document.getElementById("activity").value = "";
}

let delete_button = document.getElementById("delete-button");
//Checks if delete button has been pressed
delete_button.onmousedown = function() {
    //Finds the row that the user wants to delete
    let delete_row = document.getElementById("delete").value;
    delete_row = parseInt(delete_row);

    //Checks if the user input is valid 
    if (Number.isInteger(delete_row) && delete_row + 1 <= table.rows.length && delete_row >= 1) {
        table.deleteRow(delete_row);
        document.getElementById("delete").value = "";
        delete_incorrect.style.visibility = "hidden";
    } else {
        //Tells user that their input is invalid
        delete_incorrect.style.visibility = "visible";
    }
}
