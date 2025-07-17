
let div2 = document.querySelector('.box')

fetch('https://fakestoreapi.com/products?limit=10')
.then((res)=> res.json())
.then((data)=>{
    console.log(data);
     

    data.map((item)=>{
        div2.innerHTML += `
         <div>
    <img src=${item.image} alt="">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <span>
            <h2>${item.price}</h2>
            <button class="btn2">sotib olish</button>
        </span>
</div>
        `
    })

})