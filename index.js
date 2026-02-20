const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feedEl = document.getElementById("feed")
let postHTML = ""


for (let i = 0; i < posts.length; i++) {
    let currentPost = posts[i]
    postHTML += `
    <article class="post">
                    <header class="post__header container">
                        <img class="avatar" src="${currentPost.avatar}" alt="user avatar">
                        <div class="post__autor-info">
                            <p class="username">${currentPost.username}</p>
                            <p class="user-location">${currentPost.location}</p>
                        </div>
                    </header>
                    
                    <div class="post-img">
                        <img src="${currentPost.post}" alt="Van Gogh painting">
                    </div>
                    
                    <div class="post-interactions container">
                        <div class="post-icons">
                            <div class="like-icon icon">
                                <img src="images/icon-heart.png" alt="like icon">
                            </div>
                            <div class="comment-icon icon">
                                <img src="images/icon-comment.png" alt="comment icon">
                            </div>
                            <div class="dm-icon icon">
                                <img src="images/icon-dm.png" alt="dm icon">
                            </div>
                        </div>

                        <p class="like-counter">${currentPost.likes} likes</p>
                        <p class="post-title"><span class="username">${currentPost.username}</span> ${currentPost.comment}</p>
                    </div>  

                </article>
    `                   
}

feedEl.innerHTML = postHTML   