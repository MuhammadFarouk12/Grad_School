// Start Nav
var bars = document.querySelector(".fa-bars"),
    nav = document.querySelector(".nav");
bars.onclick = function(){
    nav.classList.toggle("d-flex")
}
// End Nav
// Start Section
for(i = 0 ; i < 3 ; i++){
    console.log(i)
}

var main1 = document.querySelector(".main-1"),
    main2 = document.querySelector(".main-2"),
    main3 = document.querySelector(".main-3"),
    child1 = document.querySelector(".child-1"),
    child2 = document.querySelector(".child-2"),
    child3 = document.querySelector(".child-3"),
    first = document.querySelector(".first-content"),
    second = document.querySelector(".second-content"),
    third = document.querySelector(".third-content");

main1.onclick = function(){
    child1.classList.remove("d-none")
    child2.classList.add("d-none")
    child3.classList.add("d-none")
    first.classList.remove("d-none")
    second.classList.add("d-none")
    third.classList.add("d-none")
}
main2.onclick = function(){
    child1.classList.add("d-none")
    child2.classList.remove("d-none")
    child3.classList.add("d-none")
    second.classList.remove("d-none")
    first.classList.add("d-none")
    third.classList.add("d-none")
}
main3.onclick = function(){
    child1.classList.add("d-none")
    child2.classList.add("d-none")
    child3.classList.remove("d-none")
    third.classList.remove("d-none")
    first.classList.add("d-none")
    second.classList.add("d-none")
}
function func (){
    document.querySelector(".a").classList.add("d-none");
}