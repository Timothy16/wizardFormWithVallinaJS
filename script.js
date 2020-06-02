let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let cardDisplay = document.querySelectorAll(".card_display")
let button = document.querySelector('.btn')
let header1 = document.querySelector(".header1")
let header2 = document.querySelector(".header2")
let header3 = document.getElementById("header3")
let show = document.querySelector(".stepwizard-row").children
let hide = document.querySelector("#hide")
let currentForm = 0

prevBtn.addEventListener('click', function(){
   nextBtn.disabled = false
   if(currentForm === 0){
       prevBtn.disabled = true
   }
   else{
    cardDisplay[currentForm].classList.remove('active');
    currentForm--;
    cardDisplay[currentForm].classList.add('active')

    for( let i = 0; i <=show.length; i++){
        if(show[i] = cardDisplay){
            show[currentForm + 1].querySelector(".btn-circle").style.backgroundColor= "#ccc"
        }
    }
   }
})

nextBtn.addEventListener('click', function(){
    // hide.style.display = "none"
    prevBtn.disabled = false    
    cardDisplay[currentForm].classList.remove('active');
    currentForm++;
    cardDisplay[currentForm].classList.add('active')
    
    // header1.style.backgroundColor = "#28a745" 
    // header2.style.backgroundColor = "yellow" 
    if(currentForm + 1 === cardDisplay.length){
        nextBtn.disabled = true
        hide.style.display = "block"
    }
    for( let i = 0; i <=show.length; i++){
            if(show[i] = cardDisplay){
                show[currentForm].querySelector(".btn-circle").style.backgroundColor= "green"
            }
        }
})

// for( let i = 0; i <=show.length; i++){
//     if(show[id] = cardDisplay){
//         header1.style.backgroundColor = "yellow"
//     }
// }