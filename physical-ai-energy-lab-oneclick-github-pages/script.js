
function searchIEEE(){
let q=document.getElementById("searchbox").value;
window.open("https://ieeexplore.ieee.org/search/searchresult.jsp?queryText="+encodeURIComponent(q));
}

function searchScienceDirect(){
let q=document.getElementById("searchbox").value;
window.open("https://www.sciencedirect.com/search?qs="+encodeURIComponent(q));
}
