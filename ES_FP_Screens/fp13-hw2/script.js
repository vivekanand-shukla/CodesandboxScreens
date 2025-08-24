const outputDiv = document.getElementById('output')
const obj = [
    {id:1,title:"The Shawshank Redemption ",Genre:"Drama",year:1994},
    {id:2,title:"The Godfather",Genre:"Crime",year:1972},
    {id:3,title:"the Dark knight",Genre:"Action",year:2008},
    {id:4,title:"plup Function",Genre:"Crime",year:1994}
]
const outputContent = obj.map((a)=> `<div>
<strong>ID:  </strong>   ${a.id} <br>
<strong> Title: </strong> ${a.title}<br>
<strong> Genre : </strong> :${a.Genre}<br>
<strong> year : </strong> :${a.year}
<hr>
</div>`)

outputDiv.innerHTML =outputContent.join(" ")

