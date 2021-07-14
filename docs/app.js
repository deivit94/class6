
function addElementToDOM(type, content, parentId) {
    const parent = document.getElementById(parentId)
    const elem = document.createElement(type)            
    const text = document.createTextNode(content)
    
    const button = document.createElement('button')
    button.innerHTML = 'Delete'
    button.onclick = function () {                    // add element to DOM
        elem.remove();
    }
    button.classList.add("buttonStyle");

    elem.appendChild(text)
    parent.appendChild(elem)
    elem.appendChild(button)
}


function clearInput() {
    document.getElementById(`input`).value = "";     // clear input
}


function showConsole() {
    const showMe = document.getElementById(`input`).value;
    if (showMe != ""){
      addElementToDOM('li', showMe, 'list')                  //click button
      clearInput()
    }    
}


function plus (e) {
    
    if (e.key == "Enter" || e.key == "+" ) {
        e.preventDefault();                                      //keyboard event
        const showMe = document.getElementById(`input`).value;
        addElementToDOM('li', showMe, 'list');                      
        clearInput();                                             
    } 
}
