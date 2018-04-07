function getContent(html, targetId) {
    return new Promise(function (resolve, reject) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', 'html/' + html + '.html', true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 ) {
                if (xmlhttp.status == 200) {
                    resolve(xmlhttp)
                } else {
                    reject(xmlhttp)
                }
            }
        }
        xmlhttp.send();
    })
}

function writeSection(id) {
    return getContent(id).then((req) => {
        document.getElementById(id).innerHTML = req.responseText;
    }).catch(console.error)
}

writeSection('missao');
writeSection('cards');
