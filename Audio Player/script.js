let playlist = [
    {
        title: "Teri Galiyan",
        artist: "Ankit Tiwari",
        albumart: "url('./media/1.jpg')",
        path: "./media/1.mp3"
    },
    {
        title: "Khairiyat",
        artist: "Arijit Singh",
        albumart: "url('./media/2.jpg')",
        path: "./media/2.mp3"
    },
    {
        title: "O Khuda",
        artist: "Amaal Mallik",
        albumart: "url('./media/3.jpg')",
        path: "./media/3.mp3"
    },
    {
        title: "Pal Pal Dil Ke Paas",
        artist: "Unknown",
        albumart: "url('./media/unknown.jpg')",
        path: "./media/4.mp3"
    },
    {
        title: "Bol Do Na Zara",
        artist: "Armaan Malik",
        albumart: "url('./media/5.jpg')",
        path: "./media/5.mp3"
    },
    {
        title: "Teri Mitti",
        artist: "B Praak",
        albumart: "url('./media/6.jpg')",
        path: "./media/6.mp3"
    },
    {
        title: "Tu Hi Yaar Mera",
        artist: "Arijit Singh",
        albumart: "url('./media/7.jpg')",
        path: "./media/7.mp3"
    },
    {
        title: "Tujhse Naraz Nahi Zindagi",
        artist: "Sanam",
        albumart: "url('./media/8.jpg')",
        path: "./media/8.mp3"
    },
    {
        title: "Fast and Furious BGM",
        artist: "Unknown",
        albumart: "url('./media/9.jpg')",
        path: "./media/9.mp3"
    },
    {
        title: "Kaun Hai Woh",
        artist: "Kailash Kher",
        albumart: "url('./media/unknown.jpg')",
        path: "./media/10.mp3"
    }
];

let index = 0;
let playing = false;
let player = document.createElement('audio');

function start(index) {
    player.src = playlist[index].path;  
    player.load();
    document.getElementById('song').textContent=playlist[index].title;
    document.getElementById('singer').textContent=playlist[index].artist;
    document.getElementById('art').style.backgroundImage=playlist[index].albumart;
    playing=true;
    playpause();
}

function playpause() {
    if(playing===true){
        pausenow();
    }
    else {
        playnow();
    }
    
}
function playnow() {
    player.play();
    playing=true;
    document.getElementById('playpause').innerHTML='<i class="fa fa-pause-circle"></i>';
}
function pausenow() {
    player.pause();
    playing=false;
    document.getElementById('playpause').innerHTML='<i class="fa fa-play-circle"></i>';

}
function playnext(){
    if(index<playlist.length-1){
        index+=1;
    }
    else {
        index=0;
    }
    start(index);
    playnow();
}
function playprev(){
    if(index>0){
        index-=1;
    }
    else {
        index=playlist.length-1;
    }
    start(index);
    playnow();
}
start(index);

function playthis(index){
    if(playing===true){
        start(index);
        pausenow();
    }
    else{
        start(index);
        playnow();
    }
}
function toggleFavorite(button) {
    button.classList.toggle('favorited');
}

function toggleBookmark(button) {
    button.classList.toggle('bookmarked');
}