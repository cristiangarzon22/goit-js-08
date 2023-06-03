const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("timeupdate",(function(e){setInterval(console.log("played the video!",e.seconds),4e3)})),o.getVideoTitle().then((function(e){console.log("title:",e)}));o.on("play",(function(e){}));
//# sourceMappingURL=video.d79ef8b2.js.map
