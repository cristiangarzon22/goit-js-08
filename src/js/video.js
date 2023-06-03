const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('timeupdate', function(timeupdate) {
       setInterval((console.log('played the video!',timeupdate.seconds)),4000);
        
    });
    
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay = function(data) {
        // data is an object containing properties specific to that event
    };
    
    player.on('play', onPlay);