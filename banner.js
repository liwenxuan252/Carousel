function createBannerArea(domarea,option) {
    var imgArea = document.createElement('div');
    var numberArea = document.createElement('div');
    var curindex = 0;
    var change = 3000;
    var timer = null;
    // var timer1 = null;
    

    initimgs();
    initnumber();
    setstatus();
    autochange()

    function initimgs(){
        domarea.appendChild(imgArea);
        imgArea.style.width = "100%";
        imgArea.style.height = "100%";
        imgArea.style.display = "flex";
        // imgArea.style.overflow = "hidden";
        for(var i = 0;i<option.length;i++){
            var obj = option[i];
            var img = document.createElement('img');
            img.src = obj.imgUrl;
            img.style.height = "100%";
            img.style.width = "100%";
            img.style.marginLeft = "0";
            imgArea.appendChild(img);
        }
        imgArea.addEventListener('mouseenter',function(){
            clearInterval(timer);
            timer = null;  
        });
        imgArea.addEventListener('mouseleave',function(){
            autochange();
        });
    }

    function initnumber(){
        numberArea.style.textAlign = "center";
        domarea.appendChild(numberArea); 
        numberArea.style.marginTop = "-25px";    
        for(var i = 0;i<option.length;i++){
            var sp = document.createElement('span');
            sp.style.display = "inline-block";
            sp.style.background = "lightgray";
            sp.style.width = "12px";
            sp.style.height = "12px";
            sp.style.cursor = "pointer";
            sp.style.margin = "0px 8px";
            sp.style.borderRadius = "50%";
            (function(j){  
                sp.addEventListener('click',function(){
                    curindex = j;
                    setstatus();
                })
            }(i))
            numberArea.appendChild(sp);
        }

    }

    function setstatus(){
        for(var i = 0;i < numberArea.children.length;i++){
            if(i == curindex){
                numberArea.children[i].style.background = "#be926f";
            }
            else{
                numberArea.children[i].style.background = "lightgray";
            }
        }
        var start = parseInt(imgArea.children[0].style.marginLeft);
        var end = curindex * -100;
        var dis = end - start;
        var duration = 500;
        var speed = dis / duration;
        if(timer1){
            clearInterval(timer1);
        }
        var timer1 = setInterval(function(){
            start = speed*20 +start;
            imgArea.children[0].style.marginLeft = start + "%";
            if(Math.abs(end-start)<1){
                imgArea.children[0].style.marginLeft = end + "%";
                clearInterval(timer1);
            }
        },20)
    }

    function autochange(){
        if(timer){
            return;
        }
        timer = setInterval(function(){
            if(curindex == option.length-1){
                curindex = 0;
            }else{
                curindex++;
            }
            setstatus();
        },change)
    }




}