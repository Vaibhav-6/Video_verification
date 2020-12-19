let container = document.querySelector(".card-container")
let card = document.querySelector(".card")
container.addEventListener("mousemove", (e)=>{
        let xAxis = (window.innerWidth/2 - e.clientX)/5
        let yAxis = (window.innerHeight/2 - e.clientY)/5
        card.style.transform = `rotateY(${180}deg)`
        console.log(yAxis+" "+xAxis)
})
container.addEventListener("mouseleave", (e)=>{
        card.style.transition= "all 0.5 ease"
        card.style.transform = `rotateY(0deg) rotateX(0deg)`
})


//get the value of textbox
let cmnt
let grade
let j=0
let comment_array= new Array(4)
let grade_array= new Array(4)

//grade
let k=0
let c
grade = Array.from(document.querySelectorAll(".btnid"))
grade[0].addEventListener("click", (e)=>{
        c=grade[0].getAttribute("value")
})
grade[1].addEventListener("click", (e)=>{
        c=grade[1].getAttribute("value")     
})
grade[2].addEventListener("click", (e)=>{
        c=grade[2].getAttribute("value")      
})
grade[3].addEventListener("click", (e)=>{
        c=grade[3].getAttribute("value")       
})
grade[4].addEventListener("click", (e)=>{
        c=grade[4].getAttribute("value")       
})

//save button state
let save = document.getElementById("Save").onclick = function(){
        cmnt=document.getElementById("comment_id").value
        comment_array[j]=cmnt
        j++;
        grade_array[k]=c
        k++
        c=0
        document.getElementById("comment_id").value=" "
        sessionStorage.setItem("grade",JSON.stringify(grade_array))
        sessionStorage.setItem("comment",JSON.stringify(comment_array))

        $('.unorder').find('.pageNumber.active').next().addClass('active')
        $('.unorder').find('.pageNumber.active').prev().removeClass('active')
        if(i<=0) i=links.length
                i--;
                return setvid()

}



//Video and bar slider
let video = document.querySelector(".video_id")
let links=['https://www.youtube.com/embed/-fhCcuLlJEk','https://www.youtube.com/embed/hCwSDBbeO_g','https://www.youtube.com/embed/CGDD2gnztLI','https://www.youtube.com/embed/GGUYNqCBI0A']
let i=0

//nav-bar
$(document).ready(function(){
        $('.next').click(function(){
                $('.unorder').find('.pageNumber.active').next().addClass('active')
                $('.unorder').find('.pageNumber.active').prev().removeClass('active')
                if(i<=0) i=links.length
                i--;
                return setvid()
        })
        $('.prev').click(function(){
                $('.unorder').find('.pageNumber.active').prev().addClass('active')
                $('.unorder').find('.pageNumber.active').next().removeClass('active')
                if(i>=links.length-1) i=-1
                i++;
                return setvid()
        })
})

function setvid(){
        return video.setAttribute('src',links[i])
}



