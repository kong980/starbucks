let tag = document.createElement('script'); //js 스크립트 생성

tag.src = "https://www.youtube.com/iframe_api";
//<script src = "https://www.youtube.com/iframe_api"></script>
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* This function creates an <iframe> (and YouTube player)
    after the API code downloads. */
let player;
function onYouTubeIframeAPIReady() {
    //<div id="player"></div>
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', // https://www.youtube.com/watch?v=An6LvWQuj_8
        playerVars:{
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8'
        },
        events: {
            'onReady': function(ev){
                ev.target.mute();
            },
        }
    });
}