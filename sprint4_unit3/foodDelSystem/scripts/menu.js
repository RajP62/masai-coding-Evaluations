let container = document.querySelector(`.container`);

fetch(`https://themealdb.com/api/json/v1/1/search.php?s=chicken`)
.then(res=>{
    return res.json();
})
.then(res=>{
    console.log(res)
    let allMeals = res.meals;
    allMeals.forEach(({strMealThumb,strInstructions,idMeal}) => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('class','w-60 my-10')
        let price = document.createElement('p');
        let desc = document.createElement('p');
        img.src = strMealThumb;
        price.textContent = `Price : ${idMeal}`;
        desc.textContent = `Description : ${strInstructions}`;
        let hr = document.createElement('hr');
        hr.setAttribute('class','my-5');
        let btnCart = document.createElement('button');
        btnCart.textContent = "Add to cart";
        btnCart.setAttribute('class','bg-black text-white m-5 rounded ');
        btnCart.addEventListener('click',()=>{
            addToCart(strMealThumb,strInstructions,idMeal);
        })
        div.append(img,price,desc,btnCart,hr);
        container.append(div);

    });
    // in this api there is no description and random dishes data is available so kindly choose api's carefully while giving the assignments now i'll have to use cooking instruction as description and product id as price, that was the same case in earlier evaluation.
});

if(localStorage.getItem('cartItems')===null){
    localStorage.setItem('cartItems',JSON.stringify([]));
}


function addToCart(img,desc,price){
    let prev_data = JSON.parse(localStorage.getItem('cartItems'));
    let newData = {
        image:img,
        description:desc,
        price:price
    }
    prev_data.push(newData);
    localStorage.setItem('cartItems',JSON.stringify(prev_data));
}

