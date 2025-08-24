const outputDiv = document.getElementById('output')
const obj = [
    {id:1,name:"Alice",position:"Developer"},
    {id:2,name:"Bob",position:"Designer"},
    {id:3,name:"Charlie",position:"Manager"},
    {id:4,name:"David",position:"Tester"}
]
const outputContent = obj.map((a)=> `<div>
<strong>ID:  </strong>   ${a.id} <br>
<strong> Name: </strong> ${a.name}<br>
<strong> Position : </strong> :${a.position}
<hr>
</div>`)

outputDiv.innerHTML =outputContent.join(" ")

