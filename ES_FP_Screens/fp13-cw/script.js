const products = [
    {id:1, name:"laptop" , price :19990},
    {id:2, name:"smartphone" , price :29990},
    {id:3, name:"headphones" , price :5990},
    {id:4, name:"tablets" , price :9990},
]
const productListingDiv = document.querySelector('#productList')
const productListHTML =products.map((prd)=>`   
<div>
  <strong>ID:  </strong>   ${prd.id} <br>
  <strong> Name: </strong> ${prd.name}<br>
  <strong> Price </strong> :${prd.price}
  <hr>
</div>`)

productListingDiv.innerHTML =productListHTML.join(" ")