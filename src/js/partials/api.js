var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", url);
httpRequest.send();
httpRequest.onreadystatechange = function(data) {
    if(httpRequest.readyState === 4 && httpRequest.status === 200) {
    console.log(httpRequest.responseText);
    }
};
