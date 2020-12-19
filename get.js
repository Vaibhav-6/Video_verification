var graderetrieved = sessionStorage.getItem("grade")
let grade = JSON.parse(graderetrieved)

var commentretreieved = sessionStorage.getItem("comment")
let comment  = JSON.parse(commentretreieved)
console.log(comment)

let outputgrade  =Array.from(document.querySelectorAll(".grade"))

let outputcomment= Array.from(document.querySelectorAll(".comment"))

for (let i = 0; i < grade.length; i++) {
    outputgrade[i].innerHTML = grade[i];  
}

for (let i = 0; i < comment.length; i++) {
    outputcomment[i].innerHTML = comment[i];  
}
