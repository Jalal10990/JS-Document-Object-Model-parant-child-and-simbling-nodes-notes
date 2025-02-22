document.title = " Js is important for Web"
console.log(document.title)
console.log(document.body)
document.body.style.backgroundColor ="green";
// BOM 
window.document.body.style.backgroundColor ="yellow";

// document.body.childNodes
// NodeList(13) [text, h1, text, h2, text, class.container, text, script, text, comment, text, script, text]
// let cont = document.body.childNodes[1]
// undefined
// cont
// <h1>​JS Document Object Model notes​</h1>​
// document.body.childNodes[3]
// <h2>​Browser Object Model notes​</h2>​
// cont.firstChild
// "JS Document Object Model notes"
// cont.lastChild
// "JS Document Object Model notes"
// document.body.childNodes[5]
// <class class=​"container">​…​</class>​
// let cont2 = document.body.childNodes[5]
// undefined
// cont2.firstChild
// #text
// cont2.lastChild
// #text
// cont2.firstElementChild
// <class class=​"box">​Box 1​</class>​
// cont2.lastElementChild
// <class class=​"box">​Box 5​</class>​
// cont2.lastElementChild.style.color = "red";
// 'red'
// cont2.lastElementChild.style.backgroundColor = "black";
// 'black'
// cont2.lastElementChild.parantElement
// undefined
// cont2
// <class class=​"container">​…​</class>​
// document.body.firstElementChild.childNodes
// NodeList [text]
// cont2.firstElementChild.nextElementSibling
// <class class=​"box">​Box 2​</class>​
// cont2.lastElementChild.previousElementSibling


// <class class=​"box">​Box 4​</class>​