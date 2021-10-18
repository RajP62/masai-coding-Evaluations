let showData = JSON.parse(localStorage.getItem("dataForNews"));
let displayData = showData[0];

let mainCont = document.getElementById("showInDetail")
function showNews({author,title,description,content,urlToImage,publishedAt}){
    let aut = document.createElement("p");
    let img = document.createElement("img");
    let head = document.createElement("h1");
    let desc = document.createElement("p");
    let pubAt = document.createElement("p");
    let cont = document.createElement("p");
    aut.textContent = author;
    img.src = urlToImage;
    img.alt = "Image not available";
    head.textContent = title;
    desc.textContent = description;
    pubAt.textContent = publishedAt;
    cont.textContent = content;
    mainCont.append(aut,img,head,desc,pubAt,cont);
}


function redToSearch(){
    window.location.href = "search.html";
}
showNews(displayData);