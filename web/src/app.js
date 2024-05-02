const doc = {
    empBody: document.querySelector("#empBody")
}
// const state = {
//     employeeList: []
// }
var employeeList = []  // ha a const state van akkor ez nem kell

function getEmployees() {
    const url = "http://localhost:8000/employees";
    fetch(url)
    .then(response => response.json())
    .then(result => {
        employeeList = result
        // console.log(employeeList)
        renderTable();
        
    });  
}

function renderTable(){
    employeeList.forEach( emp => {
        var tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>
        `;
        // console.log(emp.city)
        doc.empBody.appendChild(tr);

    })
}

getEmployees()
