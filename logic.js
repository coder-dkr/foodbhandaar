
let bgImgBox = document.querySelector(".bgImgBox")
arr =["https://source.unsplash.com/1075x275/?dishes,cuisine","img/imag1.jpg","img/imag2.jpg","img/imag3.jpg","img/imag4.jpg","https://source.unsplash.com/1075x275/?snack,yummy","img/imag6.jpg","https://source.unsplash.com/1075x275/?food,cuisine"]

window.onload = function (){
    window.scrollTop = 0;
    const enter = document.querySelector(".enter")
    setTimeout(() => {
        enter.style.display = "none"
        
    }, 1450);
}
let i = 0;
console.log(arr.length)
function slideimg(){
    bgImgBox.style.backgroundImage = `url("${arr[i]}")`
    i = (i+1)%(arr.length);
}
setInterval(slideimg, 4000);

//chef


let chefimg = document.querySelectorAll(".chefimg")
chefimg.forEach((e)=>{
    e.addEventListener("mouseover",()=>{
        e.parentElement.parentElement.classList.add("active")
    })
    e.addEventListener("mouseout",()=>{
        e.parentElement.parentElement.classList.remove("active")
    })
})

//dish js
let DishimgBox = document.querySelectorAll(".DishimgBox")

DishimgBox.forEach((e)=>{
    e.firstElementChild.style.transformOrigin = "top left";
        e.addEventListener("mouseover",()=>{
            e.firstElementChild.style.transform = "rotate(-91deg)";
        })
        e.addEventListener("mouseout",()=>{
            e.firstElementChild.style.transform = "rotate(-0deg)";
        })

})

//food card system

document.addEventListener("DOMContentLoaded",()=>{
    let textsec =  document.querySelectorAll(".textsec")
    let imgsec =  document.querySelectorAll(".imgsec")
    let card = document.querySelectorAll(".card")


    imgsec.forEach((e)=>{
        e.style.transform = "translateX(0vw)";
        e.previousElementSibling.style.transform = "translateX(0vw)"

        e.addEventListener("mouseover",()=>{
            if(e.parentElement.classList.contains("altCard")){
                console.log("i have class")
                e.style.transform = "translateX(48vw)";
                e.previousElementSibling.style.transform = "translateX(-40vw)"
                e.previousElementSibling.firstElementChild.style.display = "none"
                e.previousElementSibling.lastElementChild.style.display = "flex"
                
                }
                else{
                    e.style.transform = "translateX(-48vw)";
                    e.previousElementSibling.style.transform = "translateX(40vw)"
                    e.previousElementSibling.firstElementChild.style.display = "none"
                    e.previousElementSibling.lastElementChild.style.display = "flex"
                }
           
        }) 
    })

    textsec.forEach((e)=>{
          e.addEventListener("mouseout",()=>{
            e.style.transform = "translateX(0vw)";
            e.nextElementSibling.style.transform = "translateX(0vw)"
            e.firstElementChild.style.display = "block"
            e.lastElementChild.style.display = "none"
          })
    })
let card2 = document.querySelectorAll(".card")[1];
card2.querySelector(".cardBg").style.backgroundImage = `url("img/imag4.jpg")`


})

