console.log('khu');
window.onload = () =>{
    let ua = navigator.userAgent.toLowerCase();
    if(ua.search('chrome')>-1 ||  ua.search('crios') > -1 || !!window.chrome==true){
        document.querySelector('.chrome').style.filter =(document.querySelector('.chrome').style.filter == 'grayscale(0)')?'grayscale(100%)':'grayscale(0)';
        document.querySelector('.chrome').children[0].loop = true;

        console.log('chrome');
    }
    else if(ua.search('edg') > -1 || !!document.documentMode == true){
        document.querySelector('.edge').style.filter =(document.querySelector('.edge').style.filter == 'grayscale(0)')?'grayscale(100%)':'grayscale(0)';
        document.querySelector('.edge').children[0].loop = true;
        // console.log('edge')
    }
    else if(ua.search('firefox') >-1 ||  ua.search('fxios') > -1 || ua.search('focus') > -1){
        document.querySelector('.firefox').style.filter =(document.querySelector('.firefox').style.filter == 'grayscale(0)')?'grayscale(100%)':'grayscale(0)';
        document.querySelector('.firefox').children[0].loop = true;
       
    }
    else if(ua.search('safari') > -1 || !!window.safari == true){
        document.querySelector('.safari').style.filter =(document.querySelector('.safari').style.filter == 'grayscale(0)')?'grayscale(100%)':'grayscale(0)';
    document.querySelector('.safari').children[0].loop = true;

    }
    else if(ua.search('opr') > -1){
        document.querySelector('.opera').style.filter =(document.querySelector('.opera').style.filter == 'grayscale(0)')?'grayscale(100%)':'grayscale(0)';
        document.querySelector('.opera').children[0].loop = true;

    }
    else {
        alert('other browser');
    }
}

