const metaData =document.getElementById("date")


// page navigation
const stack =document.getElementById("stack")
const home =document.getElementById("home")
const blogs =document.getElementById("blogs")
const about =document.getElementById("about")
const projects =document.getElementById("projects")


const year =new Date().getFullYear()
metaData.innerHTML +=`<div>&copy ${year} John Kinuthia .&copy Nevani ACME. All Rights Reserved</>`


const url =window.location.pathname
// will clean up later :seting navigation to active


if(url==="/index.html"){
    home.style.color="rgb(255,255,255)"
    home.style.backdropFilter="blur(50px)"
    home.style.borderRadius="10px"
    home.style.backgroundColor="rgb(255,255,255,0.3)"
    home.style.padding="10px"
}
else if(url==="/pages/blog.html"){
    blogs.style.color="rgb(255,255,255)"
    blogs.style.backdropFilter="blur(50px)"
    blogs.style.borderRadius="10px"
    blogs.style.backgroundColor="rgb(255,255,255,0.3)"
    blogs.style.padding="10px"

}else if(url==="/pages/about.html"){
    about.style.color="rgb(255,255,255)"
    about.style.backdropFilter="blur(50px)"
    about.style.borderRadius="10px"
    about.style.backgroundColor="rgb(255,255,255,0.3)"
    about.style.padding="10px"

    
}else if(url==="/pages/contact.html"){
    contact.style.color="rgb(255,255,255)"
    contact.style.backdropFilter="blur(50px)"
    contact.style.borderRadius="10px"
    contact.style.backgroundColor="rgb(255,255,255,0.3)"
    contact.style.padding="10px"
}
else if(url==="/pages/projects.html"){
    projects.style.color="rgb(255,255,255)"
    projects.style.backdropFilter="blur(50px)"
    projects.style.borderRadius="10px"
    projects.style.backgroundColor="rgb(255,255,255,0.3)"
    projects.style.padding="10px"
}
else if(url==="/pages/stack.html"){
    stack.style.color="rgb(255,255,255)"
    stack.style.backdropFilter="blur(50px)"
    stack.style.borderRadius="10px"
    stack.style.backgroundColor="rgb(255,255,255,0.3)"
    stack.style.padding="10px"
    
}
