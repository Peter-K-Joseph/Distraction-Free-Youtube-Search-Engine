function search(){
    let a = "https://www.youtube.com/results?search_query=" + document.getElementById("Search").value;
    window.location.replace(a);
}