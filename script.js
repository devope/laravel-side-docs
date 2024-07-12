/** 
 *
 *  Main headlines
 *  
 */

let mainHeaders = document.getElementById('main-content').getElementsByTagName('h2');

for (var i = 0; i < mainHeaders.length; i++) {
    let liFirstAnchor = mainHeaders[i].getElementsByTagName('a')[0];
    liFirstAnchor.innerText = i + 1 + ". " + liFirstAnchor.innerText;
}

/**
 * 
 */

const romeNumbers = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

let leftSidebarEl = document.querySelectorAll('.docs_sidebar')[1];
let leftSidebarHeadlines = leftSidebarEl.querySelectorAll('h2');
for (var i = 0; i < leftSidebarHeadlines.length; i++) {
    let el = leftSidebarHeadlines[i];
    console.log(el.innerText);
    el.innerText = romeNumbers[i] + ". " + el.innerText;
}

/**
 * 
 *  Right side nav
 * 
 */

let index = document.getElementById('main-content').getElementsByTagName('ul')[0];

let mainUl = index.cloneNode(true);

const indexContainer = document.createElement('div');
indexContainer.setAttribute('id', "indexContainer");

for (var i = 0; i < mainUl.children.length; i++) {
    let liFirstAnchor = mainUl.children[i].getElementsByTagName('a')[0];

    liFirstAnchor.innerText = i + 1 + ". " + liFirstAnchor.innerText;
    mainUl.children[i].setAttribute('class', 'laraveldocs-main-li');
}

indexContainer.appendChild(mainUl);

document.querySelector('#docsScreen').prepend(indexContainer);
//document.querySelector('#main-content').prepend(indexContainer);

//document.getElementsByClassName('laraveldocs-main-li').style.fontWeight = "bold";

/* Hide original */

index.hidden = true;