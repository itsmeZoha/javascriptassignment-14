let userName = prompt("Please Enter your name to visit our website? ") 
window.onload = function(){
   let message ="Good Day"
//    let firstName = prompt("Please Enter Your First Name?")
//    let lastName = prompt("Please Enter Your Last Name?")
//    let fullName = firstName +" "+ lastName
   let banger ="!"
   document.getElementById("userName").innerHTML = message + " " + userName+ banger
}
//---------------------Add Name in Storage---------------------//
function addNameInStorage(){
   let newName = prompt("Enter your name")
   var names = localStorage.getItem('users')   
     
   if(names == null){
      names = []
   } else {
      names = JSON.parse(names)  
   }
   // console.log(typeof names)
   names.push(newName)
   console.log(names)
   localStorage.setItem('users', JSON.stringify(names))  
   output.innerHTML = newName + " have been stored in storage."
}
//---------------------Print Names from Storage---------------------//
function printNamesFromStorage(){
   var names = localStorage.getItem('users')
   if(names == null){
      alert('There is nothing to print')
      return
   } 
   names = JSON.parse(names)
   output.innerHTML = names
}
//---------------------Delete Names from Storage---------------------//
function deleteNamesFromStorage(){
   localStorage.removeItem('users')
   output.innerHTML = "All Names have been deleted from Storage"
}
//show output
function result(name){
   return document.getElementById('output').innerHTML += name + "<br>"
}
//Clear output
function clearOutputButton(){
   document.getElementById('output').innerHTML = ""
}