
const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-input");
const searchResult=document.getElementById("search-results");
const searchShowmore=document.getElementById("show-more-button");

let keyword="";
const accesskey="XLuqTj-rOm705Bhdxq5IjyUbXXyleotOcDQ5II6m4v0"
let page=1;
async function searchImages(){
    keyword=searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response= await fetch(url);
    const data= await response.json();
  
    const  results= data.results;
   searchResult.innerHTML = '';
    
  
    results.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement('a');
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        const searchResultItem = document.createElement('div');
        searchResultItem.className = 'search-result';
        searchResultItem.appendChild(imagelink);
        searchResult.appendChild(searchResultItem);
    });
    searchShowmore.style.display="block";
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page= 1;
    searchImages();
})

searchShowmore.addEventListener("click",()=>{
    page++;
    searchImages();

})

