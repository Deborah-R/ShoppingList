var enterButton = document.getElementById('enter');
var input = document.getElementById("userinput");
var ul = document.getElementsByTagName('ul')[0];
var deleteBtnList = ul.getElementsByTagName('button');
var section = document.getElementsByTagName('section')[0];
var li = document.getElementsByTagName('li');



function inputLenght() {
    return input.value.length;
}

function addClassWrappers() {
    for (var i = 0; i < ul.childElementCount; i++) {
        ul.children[i].classList.add('container');
    }
}

function toggleClassList(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('done');
    }
    addDoneToList();
}



function addDoneToList() {
    for (var i = 0; i < li.length; i++) {
        var span = ul.getElementsByTagName('span');
        if (li[i].classList.contains('done')) {
            span[i].className = 'span-done';
        } else {
            span[i].className = "hide";
        }
    }
}

function deleteItemOnClick() {
    for (var i = 0; i < ul.childElementCount; i++) {
        deleteBtnList[i].addEventListener('click', removeItem);
    }
}

function removeItem() {
    for (var i = 0; i < deleteBtnList.length; i++) {
        this.parentNode.parentNode.remove();
    }
}

function createDeleteButton() {
    var containerItem = document.querySelectorAll('.container');

    for (var i = 0; i < containerItem.length; i++) {

        if (containerItem[i].childElementCount === 1) {
            var containerBtn = document.createElement('div');
            var deleteBtn = document.createElement('button');
            deleteBtn.appendChild(document.createTextNode(''));
            deleteBtn.classList.add('fa', 'fa-trash-o', 'trash');
            deleteBtn.addEventListener('click', removeItem);
            containerBtn.setAttribute('id', 'containerBtn');

            containerItem[i].appendChild(containerBtn);
            containerBtn.appendChild(deleteBtn);

            var span = document.createElement('span');
            span.appendChild(document.createTextNode('done'));
            li[i].appendChild(span);
            span.classList.add('hide');
        }

    }
}

function createListElement() {
    var containerItem = document.createElement('div');
    containerItem.classList.add('container');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.prepend(containerItem);
    containerItem.appendChild(li);
    input.value = "";
    createDeleteButton();
}

function addListAfterClick() {

    if (inputLenght() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    console.log('keypress');

    if (inputLenght() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function addImage() {
    var image = document.createElement('img');
    image.setAttribute('src', 'img/httpsicons8.com.png');
    image.setAttribute('alt', 'astronaut on the moon doing grocery');
    section.appendChild(image);
}


enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
ul.addEventListener('click', toggleClassList);

addClassWrappers();
createDeleteButton();
deleteItemOnClick();
addImage();