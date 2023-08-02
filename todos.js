function todo(){
    console.log("get data clicked")

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
    if(xhttp.readyState == 4 && xhttp.status == 200)
    {
        var data = JSON.parse(this.responseText);
        console.log(data);
        var output=`<tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>COMPLETED</th>
        </tr>`;
    for(let i=0;i<data.length;i++)
    {
        let status=data[i].completed?"checked":"";
        let disabl=data[i].completed?"disabled":"";

        output+=
        `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].title}</td>
        <td><input type="checkbox" ${status} ${disabl} onclick="count()"/</td>
        </tr>`;
    }
     document.getElementById("tr").innerHTML=output
    }
}

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}
let n=0;
function count(){
    n++;
    new Promise((resolve,reject)=>{
        if(n===5){
            resolve("Congrats,5 tasks have be sucessfully completed");
        }
    })
    .then((val)=>{
        alert(val);
    })
}