const avatarImages = [
    '/images/avatar/1.png',
    '/images/avatar/2.png',
    '/images/avatar/3.png',
    '/images/avatar/4.png',
    '/images/avatar/5.png',
    '/images/avatar/6.png',
    '/images/avatar/7.png',
    '/images/avatar/8.png',
    '/images/avatar/9.png',
    '/images/avatar/10.png',
    '/images/avatar/11.png',
    '/images/avatar/12.png',
    '/images/avatar/13.png',
    '/images/avatar/14.png',
    '/images/avatar/15.png',
    '/images/avatar/16.png',
    '/images/avatar/17.png',
    '/images/avatar/18.png',
    '/images/avatar/19.png',
    '/images/avatar/20.png'
    ];
    
    const avatar = document.querySelector('#avatar');
    
    let i = 0;
    // アバターの切り替え
    function changeAvatar()
    {
        if(i === avatarImages.length) {
          i = 0;
        };
        avatar.style.backgroundImage = 'url(' + avatarImages[i] + ')';
        i++;
    }
