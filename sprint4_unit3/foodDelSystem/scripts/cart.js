let mainCont = document.querySelector('.container');

let data = JSON.parse(localStorage.getItem('cartItems'));
data.forEach(element => {
    let {image,description,price} = data;
    let div = document.createElement('div');
    let img = document.createElement('img');
    let pri = document.createElement('p');
    let desc = document.createElement('p');
    img.src = image;
    desc.textContent = description;
    pri.textContent = price;
    div.append(img,pri,desc)
    container.append(div)
});