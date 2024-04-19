var inputText= document.getElementById("input")
// variable for button
var addButton= document.getElementById("button")
// variable for todolist
var todolist=document.getElementById("todolist")
// array to store all todo elements
var todoarray=[]

addButton.addEventListener('click',addItem)
function addItem(){
    if(inputText.value!=""){
        todoarray.push(inputText.value);
    }
    inputText.value=""
    // console.log(todoarray);
    display()
}
inputText.addEventListener("keypress",(event)=>{
    // console.log(event.key);
    if(event.key=="Enter"){
        addItem()
    }    
})
function display(){
   todolist.innerHTML="";
todoarray.map((curr,i)=>{
    var listitem=`<li id="item${i}">
    <div>${curr}</div>
    <div>
      <span onclick="deleteItem(${i})">&times;</span>
      <span>|</span>
      <span onclick="editItem(${i})">Edit</span>
    </div>
  </li>`
    todolist.innerHTML+=listitem;
})
}
function deleteItem(index){
    // console.log("index: ", index);
    todoarray.splice(index,1)
    display();
}
function editItem(index){
    var newValue=prompt("Pls Edit");
    // console.log("newValue: ", newValue);
    todoarray.splice(index,1,newValue)
    display()
    
}
document.getElementById("Reset").addEventListener("click",()=>{
    todoarray=[]
    display()
})