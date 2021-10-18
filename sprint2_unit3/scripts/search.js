async function getTheData(search){
    let body = fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=01420e1a7bfd4618af006747c28399be`);
    body.then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res.articles)
        appendTheData(res.articles);
    })
    .catch((err)=>{
        console.log(err)
    })
}

function goToHome(){
    window.location.href = "home.html";
}

let mainCont = document.getElementById("showResult");
function appendTheData(data){
    mainCont.innerHTML = null;

    data.forEach(({description,publishedAt,title,urlToImage}) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let heading = document.createElement("h1");
        let desc = document.createElement("p");
        let pubDate = document.createElement("p");
        img.src = urlToImage;
        heading.style.cursor = "pointer";
        heading.textContent = title;
        desc.textContent = description;
        pubDate.textContent = `Published At: ${publishedAt}`;
        div.append(img,heading,desc,pubDate);
        mainCont.append(div);
    });
}

function searchData(ev){
    ev.preventDefault();
    let form = document.getElementById("searchData");
    let article = form.article.value;
    console.log(article)
    getTheData(article);
    document.getElementById("moviesearch").value = ""

}


/*author: "Mariella Moon"
content: "Netflix has started offering potential paying subscribers in Kenya access to some of its content at no cost. The streaming service has launched a free tier in the country that offers around one-fourt… [+1483 chars]"
description: "Netflix has started offering potential paying subscribers in Kenya access to some of its content at no cost. The streaming service has launched a free tier in the country that offers around one-fourth the content available to paying subscribers. It has no ads…"
publishedAt: "2021-09-21T04:36:16Z"
source: {id: 'engadget', name: 'Engadget'}
title: "Netflix debuts free tier for Android users in Kenya"
url: "https://www.engadget.com/netflix-free-tier-android-kenya-043616484.html"
urlToImage: "https://s.yimg.com/os/creatr-images/2019-10/1ce28ae0-eb5f-11e9-97bd-b29ac30a725a"*/