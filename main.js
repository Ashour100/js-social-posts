const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil ",
            "last name":"Mangione",
            "image": null
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia ",
            "last name":"Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara ",
            "last name":"Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca ",
            "last name":"Formicola",
            "image": "https://unsplash.it/600/400?image=24"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro ",
            "last name":"Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=34",
        "author": {
            "name": "Fabrizio ",
            "last name":"Spini",
            "image": "https://unsplash.it/300/300?image=34"
        },
        "likes": 59,
        "created": "2021-04-03"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=289",
        "author": {
            "name": "Neri ",
            "last name":"Saverio",
            "image": "https://unsplash.it/300/300?image=289"
        },
        "likes": 96,
        "created": "2021-04-03"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=355",
        "author": {
            "name": "Gaetano ",
            "last name":"Fedele",
            "image": "https://unsplash.it/300/300?image=355"
        },
        "likes": 996,
        "created": "2021-04-03"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=344",
        "author": {
            "name": "Maura ",
            "last name":"Brivio",
            "image": "https://unsplash.it/300/300?image=344"
        },
        "likes": 956,
        "created": "2021-04-03"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=374",
        "author": {
            "name": "Antonella ",
            "last name":"Bosco",
            "image": "https://unsplash.it/300/300?image=374"
        },
        "likes": 963,
        "created": "2021-04-03"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=314",
        "author": {
            "name": "Cosimo ",
            "last name":"Pompeo",
            "image": null
        },
        "likes": 496,
        "created": "2021-04-03"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=341",
        "author": {
            "name": "Piazza ",
            "last name":"Gloria",
            "image": "https://unsplash.it/300/300?image=341"
        },
        "likes": 986,
        "created": "2021-04-03"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=384",
        "author": {
            "name": "Agnellini ",
            "last name":"Marcellino",
            "image": "https://unsplash.it/300/300?image=384"
        },
        "likes": 97,
        "created": "2021-04-03"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=371",
        "author": {
            "name": "Emanuela ",
            "last name":"Germano",
            "image": null
        },
        "likes": 91,
        "created": "2021-04-03"
    }
];

let container=document.getElementById("container");

let convertDate=function(date){
    year=date.substring(0,4);
    month=date.substring(5,7);
    day=date.substring(8,10);
    return day+'/'+month+'/'+year;
}
let generateProfileImg=(letter1,letter2)=> `
                                            <div class="profile-pic-default">
                                            <span>${letter1}${letter2}</span>
                                            </div>
`;

posts.forEach((postObject)=>{
    let convertedDate=convertDate(postObject.created);
    let post= `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${postObject["author"]["name"]}${postObject["author"]["last name"]}</div>
                    <div class="post-meta__time">${convertedDate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="${postObject["media"]}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button"  data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${postObject["likes"]}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
container.innerHTML+=post;
});


let imageWrapper=document.querySelectorAll('.post-meta__icon');
for(let i=0;i<posts.length;i++){
    if(posts[i]["author"]["image"]==null)
        imageWrapper[i].innerHTML=generateProfileImg(posts[i]["author"]["name"].charAt(0),posts[i]["author"]["last name"].charAt(0));
    else
        imageWrapper[i].innerHTML=`<img class="profile-pic" src="${posts[i]["author"]["image"]}" alt="${posts[i]["author"]["name"]}${posts[i]["author"]["last name"]}">`;
}



let likeButton=document.querySelectorAll(".like-button");
let likeCounter=document.querySelectorAll(".js-likes-counter");
for(let i=0;i<likeButton.length;i++){
    likeButton[i].addEventListener("click",function(){
        this.classList.toggle('like-button--liked');

        if(likeButton[i].classList.contains("like-button--liked"))
            posts[i].likes++;
        else
            posts[i].likes--;

        likeCounter[i].innerHTML=posts[i].likes;
    });

}

