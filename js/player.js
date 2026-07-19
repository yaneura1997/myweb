document.querySelectorAll(".track").forEach(track=>{

const audio=track.querySelector("audio");
const play=track.querySelector(".play");
const seek=track.querySelector(".seek");

const current=track.querySelector(".current");
const duration=track.querySelector(".duration");

play.onclick=()=>{

    if(audio.paused){

        document.querySelectorAll("audio").forEach(a=>{

            if(a!==audio)a.pause();

        });

        document.querySelectorAll(".play").forEach(b=>{

            if(b!==play)b.textContent="▶";

        });

        audio.play();

        play.textContent="❚❚";

    }else{

        audio.pause();

        play.textContent="▶";

    }

};

audio.addEventListener("loadedmetadata",()=>{

    seek.max=audio.duration;

    duration.textContent=format(audio.duration);

});

audio.addEventListener("timeupdate",()=>{

    seek.value=audio.currentTime;

    current.textContent=format(audio.currentTime);

});

seek.addEventListener("input",()=>{

    audio.currentTime=seek.value;

});

audio.addEventListener("pause",()=>{

    play.textContent="▶";

});

audio.addEventListener("ended",()=>{

    play.textContent="▶";

});

});

function format(sec){

const m=Math.floor(sec/60);

const s=Math.floor(sec%60);

return `${m}:${String(s).padStart(2,"0")}`;

}