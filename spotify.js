let songIndex = 0;
let audioElement = new Audio("./albums/street_dreams/Nothing-Lasts.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementsByClassName("gif")[0].firstElementChild;
let songItem = document.getElementsByClassName("songItem");
let songBottomName = document.getElementsByClassName("songNameBottom")

let street_dreams_album = [
    {songName:"100 Million", filePath:"./albums/street_dreams/100-Million.mp3",coverPath:"./covers/karanCover.jpg"},
    {songName:"Hisaab", filePath:"./albums/street_dreams/Hisaab.mp3",coverPath:"./covers/karanCover.jpg"},
    {songName:"Nothing Lasts", filePath:"./albums/street_dreams/Nothing-Lasts.mp3",coverPath:"./covers/karanCover.jpg"},
    {songName:"Straight Ballin", filePath:"./albums/street_dreams/Straight-Ballin.mp3",coverPath:"./covers/karanCover.jpg"},
    {songName:"Tareefan", filePath:"./albums/street_dreams/Tareefan.mp3",coverPath:"./covers/karanCover.jpg"},
    {songName:"Top Class Overseas", filePath:"./albums/street_dreams/Top-Class-Overseas.mp3",coverPath:"./covers/karanCover.jpg"},
    {songName:"Yaad", filePath:"./albums/street_dreams/Yaad.mp3",coverPath:"./covers/karanCover.jpg"},

];
Array.from(songItem).forEach((element,index,array) => {
    element.getElementsByTagName("img")[0].src = street_dreams_album[index].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = street_dreams_album[index].songName;
});
// audioElement.play();
//click on play button
masterPlay.addEventListener("click",(e)=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = "1";
        songBottomName[0].style.opacity = "1";
        songBottomName[0].innerHTML = street_dreams_album[songIndex].songName;
    }
    else{
        makeAllPlay();
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = "0";
        songBottomName[0].style.opacity = "0";
    }
});

audioElement.addEventListener("timeupdate",(event)=>{
    // console.log(event);
    //seekbar update
    progress =  parseInt((event.target.currentTime/event.target.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change",(event)=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
    
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element,index)=>{
    // console.log(element);
    element.addEventListener("click",(event)=>{
        songIndex = index;
        makeAllPlay();
        event.target.classList.remove("fa-circle-play");
        event.target.classList.add("fa-circle-pause");
        // console.log(index);
        audioElement.src= street_dreams_album[songIndex].filePath;
        songBottomName[0].innerHTML = street_dreams_album[songIndex].songName;
        songBottomName[0].style.opacity = "1";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = "1";
    })
});

previous.addEventListener("click",(event)=>{
    if(songIndex<=0){
        // songIndex = 0;
        songIndex = street_dreams_album.length-1;
        
    }else{
        songIndex -= 1;
    }
    audioElement.src= street_dreams_album[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    songBottomName[0].innerHTML = street_dreams_album[songIndex].songName;
    songBottomName[0].style.opacity = "1";
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = "1";
});
next.addEventListener("click",(event)=>{
    console.log(songIndex);
    if(songIndex>=street_dreams_album.length-1){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    songBottomName[0].innerHTML = street_dreams_album[songIndex].songName;
    songBottomName[0].style.opacity = "1";
    audioElement.src= street_dreams_album[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = "1";
})