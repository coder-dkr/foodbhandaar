
let bgImgBox = document.querySelector(".bgImgBox")
arr = ["https://source.unsplash.com/1075x275/?dishes,cuisine", "img/imag1.jpg", "img/imag2.jpg", "img/imag3.jpg", "img/imag4.jpg", "https://source.unsplash.com/1075x275/?snack,yummy", "img/imag6.jpg", "https://source.unsplash.com/1075x275/?food,cuisine"]

window.onload = function () {
    reviewInput.value = ""
    window.scrollTop = 0;
    const enter = document.querySelector(".enter")
    setTimeout(() => {
        enter.style.display = "none"

    }, 1450);
}
let i = 0;
function slideimg() {
    bgImgBox.style.backgroundImage = `url("${arr[i]}")`
    i = (i + 1) % (arr.length);
}
setInterval(slideimg, 4000);

//chef


let chefimg = document.querySelectorAll(".chefimg")
chefimg.forEach((e) => {
    e.addEventListener("mouseover", () => {
        e.parentElement.parentElement.classList.add("active")
    })
    e.addEventListener("mouseout", () => {
        e.parentElement.parentElement.classList.remove("active")
    })
})

//dish js
let DishimgBox = document.querySelectorAll(".DishimgBox")

DishimgBox.forEach((e) => {
    e.firstElementChild.style.transformOrigin = "top left";
    e.addEventListener("mouseover", () => {
        e.firstElementChild.style.transform = "rotate(-91deg)";
    })
    e.addEventListener("mouseout", () => {
        e.firstElementChild.style.transform = "rotate(-0deg)";
    })

})

//food card system

document.addEventListener("DOMContentLoaded", () => {
    let textsec = document.querySelectorAll(".textsec")
    let imgsec = document.querySelectorAll(".imgsec")
    let card = document.querySelectorAll(".card")


    imgsec.forEach((e) => {
        e.style.transform = "translateX(0vw)";
        e.previousElementSibling.style.transform = "translateX(0vw)"

        e.addEventListener("mouseover", () => {
            if (e.parentElement.classList.contains("altCard")) {
                e.style.transform = "translateX(48vw)";
                e.previousElementSibling.style.transform = "translateX(-40vw)"
                e.previousElementSibling.firstElementChild.style.display = "none"
                e.previousElementSibling.lastElementChild.style.display = "flex"

            }
            else {
                e.style.transform = "translateX(-48vw)";
                e.previousElementSibling.style.transform = "translateX(40vw)"
                e.previousElementSibling.firstElementChild.style.display = "none"
                e.previousElementSibling.lastElementChild.style.display = "flex"
            }

        })
    })

    textsec.forEach((e) => {
        e.addEventListener("mouseout", () => {
            e.style.transform = "translateX(0vw)";
            e.nextElementSibling.style.transform = "translateX(0vw)"
            e.firstElementChild.style.display = "block"
            e.lastElementChild.style.display = "none"
        })
    })
    let card2 = document.querySelectorAll(".card")[1];
    card2.querySelector(".cardBg").style.backgroundImage = `url("img/imag4.jpg")`


})

//back to top btn
window.onscroll = function () { whenscroll() }
const BacktoTop = document.querySelector(".BacktoTop");
function whenscroll() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        BacktoTop.style.display = "flex"
    }
    else {
        BacktoTop.style.display = "none"
    }
}
BacktoTop.addEventListener("click", () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

})

//contact form
let inpDiv = document.querySelectorAll(".inpDiv")
inpDiv.forEach((e) => {
    e.lastElementChild.addEventListener("focus", () => {
        e.style.border = "5px solid black"
    })
    e.lastElementChild.addEventListener("blur", () => {
        e.style.border = "5px solid transparent "
    })

})
let queryField = document.querySelector(".queryField")
queryField.lastElementChild.addEventListener("focus", () => {
    queryField.style.border = "5px solid black"
})
queryField.lastElementChild.addEventListener("blur", () => {
    queryField.style.border = "5px solid transparent "
})



//star rating
let nameNum = 1;
function PostingCommentFunc(){


let starsCont = document.querySelectorAll(".starsCont")
let regularStar = document.querySelectorAll(".regularStar")
let goldStar = document.querySelectorAll(".goldStar")
var rated = false;

var userStarRate = 1;
Array.from(starsCont).forEach((e, index) => {
     
    e.addEventListener("click", () => {
        if (index === 0) {
            userStarRate = 1
            rated = true;
            e.classList.add("active")

            e.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("active")

        }
        if (index === 1) {
            userStarRate = 2
            rated = true;
            e.classList.add("active")
            e.previousElementSibling.classList.add("active")

            e.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("active")

        }
        if (index === 2) {
            userStarRate = 3
            rated = true;
            e.classList.add("active")
            e.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.classList.add("active")

            e.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.classList.remove("active")

        }
        if (index === 3) {
            userStarRate = 4
            rated = true;
            e.classList.add("active")
            e.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("active")

            e.nextElementSibling.classList.remove("active")

        }
        if (index === 4) {
            userStarRate = 5
            rated = true;
            e.classList.add("active")
            e.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("active")

        }

    })
   
})


  //commenting
const commentReels = document.querySelector(".commentReels")
const postBtn = document.getElementById("postBtn")
let reviewInput = document.getElementById("reviewInput")
postBtn.addEventListener("click", () => {
    
      if(rated === false){
          alert("PLEASE SELECT THE NUMBER OF STARS YOU WANT TO GIVE US FIRST");
      }
      else{
        
        if(reviewInput.value === "" || reviewInput.value === " ") {
                  alert("Comment cannot be Empty")
              }

              else {
                rated = false;
                Array.from(starsCont).forEach((e)=>{
                    e.classList.remove("active")
                })
            
                console.log(userStarRate)
                
//figuring out number of stars user inputed
var enteredStars = "";
for(let s = 1 ; s <= userStarRate;s++ ){
    enteredStars += `<img src="img/starGold.svg" alt="Star">`
}
    let datelog = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    let userComment = document.createElement("div")
    userComment.className = "comment"
    userComment.innerHTML = `<div class="commentHeader">
                    <span class="user"><img src="img/user-solid.svg" alt="U"><span class="username">username ${nameNum}</span></span>
                    <span id="commentDate">${datelog}</span>
            </div>
                <div class="ActualComment">${reviewInput.value}</div>
                <div class="userRating">${enteredStars}</div>`
    commentReels.appendChild(userComment)
    reviewInput.value = "";
    document.querySelector(".commentReels").scrollLeft += -490;
    nameNum++;

      }
      }
  })
  
}
PostingCommentFunc()