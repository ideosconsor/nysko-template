function getCommunes(url, selectorId) {
    var selector = document.querySelector(selectorId);
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            const villes = JSON.parse(httpRequest.responseText);
            for(let ville of villes){
                var option = document.createElement("option");
                option.value = ville.nom;
                option.text = ville.nom;
                selector.appendChild(option);
            }
        }
    }
    httpRequest.send();
}