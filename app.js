var list =document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

var delBtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)


var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.setAttribute("onclick","editItem(this)")
editBtn.appendChild(editText)

li.appendChild(delBtn)
li.appendChild(editBtn)
list.appendChild(li)


todo_item.value = ""
console.log(li)
}
function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
var val = e.parentNode.firstChild.nodeValue
var editValue = prompt("Enter edit value" , val)
e.parentNode.firstChild.nodeValue = editValue

}

function deleteAll(){
    list.innerHTML =""
}

// var list = document.getElementById("list");

// function Routine(){
//     var Daily = document.getElementById("Daily")
//     var li = document.createElement("li")
//     var liText = document.getElementById(Daily.value)

//     li.appendChild(liText)
//      var del = document.createElement("button")
//      var delText = document.createTextNode("DELETE")
// del.setAttrribute("onclick","deleteItem(this)")
// del.appendChild(delText) 

// var editBtn = document.createElement("button")
// var editText = document.createTextNode("EDIT")
// editBtn.setAttribute("onclick","editItem(this)")
// editBtn.appendChild(editText)
// li.appendChild(del)
// li.appendChild(editBtn)
// list.appendChild(li)

// Daily.value = ""
// console.log(li)
// }

// function deleteItem(e)
// {
//     e.parentNode.remove()
// }
// function editItem(e){
    
//     var val = e.parentNode.firstChild.nodeValue
// var editValue = prompt("Entre edit value",val)
// e.parentNode.firstChild.nodeValue = editValue
// }
// function deleteAll(){
    
// list.innerHTML =""

// }



