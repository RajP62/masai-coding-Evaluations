// https://newsapi.org/v2/top-headlines?country=in&apiKey=01420e1a7bfd4618af006747c28399be
let mainCont = document.getElementById("mainCont");

async function getTopStories(){
    let body = fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=01420e1a7bfd4618af006747c28399be`);
    body.then((res)=>{
        return res.json();
    })
    .then(({articles})=>{
        console.log(articles);
        appendTopStories(articles)
    })
    .catch((err)=>{
        console.log("Error is ",err)
    })
}

function appendTopStories(data){
    mainCont.innerHTML = null;
    data.forEach(({author,title,description,content,urlToImage,publishedAt}) => {
        // console.log(element)
        let div = document.createElement("div");
        let aut = document.createElement("p");
        let img = document.createElement("img");
        let tit = document.createElement("h1");
        let desc = document.createElement("p");
        let pubAt = document.createElement("p");
        aut.textContent = `By ${author}`;
        img.src = urlToImage;
        img.alt = "Image not available"
        tit.textContent = title;
        tit.style.cursor = "pointer";
        tit.onclick = ()=>{
            showInDetail({author,title,description,content,urlToImage,publishedAt});
        }
        desc.textContent = description;
        pubAt.textContent == publishedAt;
        div.append(img,aut,tit,desc,pubAt);
        mainCont.append(div)
    });
}

if(localStorage.getItem("dataForNews"===null)){
    localStorage.setItem("dataForNews",JSON.stringify([]));
}
function showInDetail(article){
    localStorage.setItem("dataForNews",JSON.stringify([]));
    let dataTillNow = JSON.parse(localStorage.getItem("dataForNews"));
    dataTillNow.push(article);
    localStorage.setItem("dataForNews",JSON.stringify(dataTillNow));
    window.location.href = "news.html";
}

getTopStories()

