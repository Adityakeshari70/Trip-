var confirm = document.querySelector("#confirm1")
var cancel = document.querySelector("#cancel")
var trip = document.querySelector("#Trip");
var CONGRATULATION = document.querySelector("#CONGRATULATION")
confirm.addEventListener("click",function () {
    CONGRATULATION.innerHTML = "CONGRATULATION!!"
    trip.innerHTML = "Enjoy Your Trip "
    
})
cancel.addEventListener("click",function () {
    CONGRATULATION.innerHTML = "Please Try To Convence"
    trip.innerHTML = "It's a last trip for you all"
    
})

