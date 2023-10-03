const key= "bztDnzUVT0FVJaXgC12F_TkG-ZJem5TWfOBMiO9QfIA"

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const searchResults = document.getElementById("search-results");
const showMore = document.getElementById("show-More");


let input = "";
let page = 1

async function showResult(){

    input = searchInput.value;

    url = `http://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${key}`

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1){
        searchResults.innerHTML= ""
    }


    results.forEach((result)=>{

        const container = document.createElement("div")
        container.classList.add('search')
        const image = document.createElement('img');
        image.src = result.urls.small
        const anchor = document.createElement('a')
        anchor.href=result.links.html
        anchor.target ="_blank"
        anchor.textContent=result.alt_description;

        
        container.appendChild(image); 
        container.appendChild(anchor); 
        searchResults.appendChild(container);
    })

    page++

    if(page > 1){
        showMore.style.display="block"
    }


}

searchBtn.addEventListener('click', (event)=>{
event.preventDefault()
showResult();
page=1;



})

showMore.addEventListener('click',()=>{
    showResult();
})



