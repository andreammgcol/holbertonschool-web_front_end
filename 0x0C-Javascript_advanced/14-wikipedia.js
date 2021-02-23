function createElement(data) {
  let paragraph = document.createElement('paragraph');
  paragraph.innerHTML = JSON.parse(data).query.pages['21721040'].extract;
  document.body.append(paragraph);
}

function queryWikipedia(callback) {
  const url =
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url);
  xhttp.onload = function () {
    callback(xhttp.response);
  };
  xhttp.send();
}

queryWikipedia(createElement);
