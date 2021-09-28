window.scrollBy(0, 1);
window.addEventListener('scroll', function() {
    let userScroll = pageYOffset;
    let top1 = -563;
    let top2 = -936;
    let top3 = -1497;
    let windowWidth = document.documentElement.clientWidth;
    let layersHeight = document.getElementById('layers-item-1').clientHeight;
    /*console.log(bottoms);
    console.log(document.getElementById('layers-item-2').style.top);*/
    if (userScroll>=0) {
        document.getElementById('layers').classList.add('show-text');
    }
    while (userScroll<=1900) {
        if (userScroll>500&&userScroll<890){
            document.getElementById('layers-item-2').style.top = (top1 + userScroll - 500) + 'px';
            document.getElementById('layers-item-content-2').classList.remove('show-text');
        } else if (userScroll<510) {
            document.getElementById('layers-item-2').style.top = -563 + 'px';
            document.getElementById('layers-item-content-2').classList.remove('show-text');
        }
        else {
            document.getElementById('layers-item-2').style.top =  -180 + 'px';
            document.getElementById('layers-item-content-2').classList.add('show-text');
        }
        break;

    }

    while (userScroll<=1900) {
        if (userScroll>500&&userScroll<1140){
            document.getElementById('layers-item-3').style.top = (top2 + userScroll - 500) + 'px';
            document.getElementById('layers-item-content-3').classList.remove('show-text');
        } else if (userScroll<510) {
            document.getElementById('layers-item-3').style.top = -936 + 'px';
            document.getElementById('layers-item-content-3').classList.remove('show-text');
        }
        else {
            document.getElementById('layers-item-3').style.top =  -300 + 'px';
            document.getElementById('layers-item-content-3').classList.add('show-text');
        }
        break;
    }
    while (userScroll<=1900) {
        if (userScroll>500&&userScroll<1410){
            document.getElementById('layers-item-4').style.top = (top3 + userScroll - 500) + 'px';
            document.getElementById('layers-item-content-4').classList.remove('show-text');
        } else if (userScroll<510) {
            document.getElementById('layers-item-4').style.top = -1497 + 'px';
            document.getElementById('layers-item-content-4').classList.remove('show-text');
        }
        else {
            document.getElementById('layers-item-4').style.top =  -590 + 'px';
            document.getElementById('layers-item-content-4').classList.add('show-text');
        }
        break;
    }
    while (userScroll<=200) {
        if (userScroll>0){
            if (windowWidth>992){
                document.getElementById('product-page').style.height = (200 + layersHeight * 4) + 'px';
            }
            else {
                document.getElementById('product-page').style.height = (250 + layersHeight * 3) + 'px';
            }

        }
        break;
    }
});