const projectContainer =document.getElementById("project__container")
const projectList = [
    {
        "image": "images/online-store-api.png",
        "title": "Online Store API",
        "description": "A Spring Boot API for an online store, featuring product browsing, shopping cart management, and payment processing integrations.",
        "github link": "https://github.com/yourusername/online-store-api-springboot"
    },
    {
        "image": "images/recipe-app.png",
        "title": "Recipe Sharing App",
        "description": "A Next.js application for sharing and discovering recipes, with features like user profiles, recipe uploads, and search functionality.",
        "github link": "https://github.com/yourusername/recipe-app-nextjs"
    },
    {
        "image": "images/event-management-api.png",
        "title": "Event Management API",
        "description": "A Spring Boot API for managing events, registrations, and ticketing, with support for different event types and payment gateways.",
        "github link": "https://github.com/yourusername/event-management-api"
    },
    {
        "image": "images/code-editor.png",
        "title": "Online Code Editor",
        "description": "A Next.js based online code editor that allows users to write and run code in multiple languages within the browser.",
        "github link": "https://github.com/yourusername/online-code-editor-nextjs"
    },
    {
        "image": "images/file-storage-api.png",
        "title": "Cloud File Storage API",
        "description": "A Spring Boot API for cloud file storage, including file uploads, downloads, and user-specific file management.",
        "github link": "https://github.com/yourusername/file-storage-api"
    },
    {
        "image": "images/movie-database.png",
        "title": "Movie Database App",
        "description": "A Next.js application that fetches and displays movie information from a public API, with features like search, filtering, and reviews.",
        "github link": "https://github.com/yourusername/movie-database-nextjs"
    },
    {
        "image": "images/booking-system-api.png",
        "title": "Booking System API",
        "description": "A Spring Boot API designed for scheduling and managing bookings, such as appointments or reservations, with features for user authentication and notifications.",
        "github link": "https://github.com/yourusername/booking-api"
    },
    {
        "image": "images/finance-tracker.png",
        "title": "Personal Finance Tracker",
        "description": "A Next.js application for managing personal finances, tracking expenses, and generating reports, with user-friendly visualizations.",
        "github link": "https://github.com/yourusername/finance-tracker-nextjs"
    },
    {
        "image": "images/forum-api.png",
        "title": "Forum API",
        "description": "A Spring Boot API supporting user discussions, threads, and posts, with moderation tools and search capabilities.",
        "github link": "https://github.com/yourusername/forum-api-springboot"
    },
    {
        "image": "images/image-gallery.png",
        "title": "Image Gallery Application",
        "description": "A Next.js application for displaying and managing image galleries, with features like image uploads, tagging, and search.",
        "github link": "https://github.com/yourusername/image-gallery-nextjs"
    },
    {
        "image": "images/ecommerce-api.png",
        "title": "E-commerce API",
        "description": "A RESTful API built with Spring Boot, providing endpoints for product management, user authentication, and order processing.",
        "github link": "https://github.com/yourusername/ecommerce-api-springboot"
    },
    {
        "image": "images/blog-platform.png",
        "title": "Blog Platform Frontend",
        "description": "A dynamic blog platform frontend built with Next.js, featuring server-side rendering and integration with a backend API.",
        "github link": "https://github.com/yourusername/blog-platform-nextjs"
    },
    {
        "image": "images/task-manager-api.png",
        "title": "Task Manager API",
        "description": "A Spring Boot API for managing tasks, users, and projects, with features like task assignment and deadline tracking.",
        "github link": "https://github.com/yourusername/task-manager-api"
    },
    {
        "image": "images/realtime-chat-app.png",
        "title": "Real-time Chat Application",
        "description": "A Next.js application with real-time chat functionality, using WebSockets and integrated with a backend API for user management.",
        "github link": "https://github.com/yourusername/realtime-chat-nextjs"
    },
    {
        "image": "images/library-management-api.png",
        "title": "Library Management API",
        "description": "Spring Boot based API handling book catalog, user borrowing/returning and fine calculation. Utilizes Spring Data JPA for data persistence.",
        "github link": "https://github.com/yourusername/library-api-springboot"
    },
    {
        "image": "images/portfolio-website.png",
        "title": "Personal Portfolio Website",
        "description": "A personal portfolio website built with Next.js, showcasing projects, skills, and experience with modern UI/UX design.",
        "github link": "https://github.com/yourusername/portfolio-nextjs"
    },
    {
        "image": "images/social-media-api.png",
        "title": "Social Media API",
        "description": "A Spring Boot REST API providing functionalities for user authentication, post creation, and friend management.",
        "github link": "https://github.com/yourusername/social-media-api"
    },
    {
        "image": "images/weather-dashboard.png",
        "title": "Weather Dashboard",
        "description": "A Next.js application that fetches and displays real-time weather data from an external API, with interactive charts and maps.",
        "github link": "https://github.com/yourusername/weather-dashboard-nextjs"
    }

];


const button =document.getElementById("github__button")
const projectsMap =()=>{
    return projectList.map((project,index)=>{
        return(`<div class="project__card" key=${index}>
            <h1>${project.title}</p>
            <p className="project__description">${project.description}</p>
            <img src=${project.image} alt=${project.title}/>
            <br/>
            <button id="github__button"><a href=${project["github link"]}>view on github</a></button>
            </div>`)
    })
}
projectContainer.innerHTML +=projectsMap().join("")


