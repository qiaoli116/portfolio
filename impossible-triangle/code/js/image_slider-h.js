/*
1. To initialize imageslider: d = 0;
2. To move left: d = 1;
3. To move right: d = -1;
*/
function imageSlide(d) {
    // step 1: locate the center of image holder
    // step 2: create a location map according to the center located in step 1
    // step 3: map the new location data back to the img in the image holder
    // step 4: fire a event of imagesliderend to document
    var sizeWindow = document.getElementsByClassName("img_holder_v3")[0].hasAttribute("display") ? parseInt(document.getElementsByClassName("img_holder_v3")[0].getAttribute("display")) : 1;
    var lstImage = document.getElementsByClassName("img_holder_v3")[0].children;
    var lenLstImage = lstImage.length;
    var idxCenter;
    var i;
    var xp = "x_pos", xpL = "l", xpR = "r", xpC = "c", xpLx = "lx", xpRx = "rx";
    var posMap = ["c"];

    // step 1
    for (i=0; i<lenLstImage; i++){
        if (lstImage[i].getAttribute(xp)==xpC){
            idxCenter = i;
            break;
        }
    }

    // step 2
    // 2.1 calculate new c position
    if(d==1){ // pictures move left, so c moves right.
        idxCenter = ((i+1)>=lenLstImage)?i:(i+1);
    }else if(d==-1){    // picture move right, so c moves left
        idxCenter = ((i-1)<0)?i:(i-1);
    }//else do nothing;

    // 2.2 build the full posMap

    var j; // j is for building l1, l2, r1, r2, lx, rx ...
    var sizeWindowHalf = Math.floor(sizeWindow/2);
    // build the left side: ... lx, lx, l2, l1
    for (i=idxCenter-1, j=1; i>=0; i--){
        // building the map on the left side of center
        // if idxCenter = 0, meaning the first image is the center one, nothing will happen in this loop.
        if (j<=sizeWindowHalf){ // still in the display window
            // build l2, l1
            posMap.unshift(xpL+j);
            j++;
        }else{ // outside of the display window
            //build lx
            posMap.unshift(xpLx);
        }
    }
    // build the right side: r1, r2, rx, rx ...
    for (i=idxCenter+1, j=1; i<lenLstImage; i++){
        // building the map on the right side of center
        // if idxCenter = lenLstImage-1, meaning the last image is the center one, nothing will happen in this loop.
        if (j<=sizeWindowHalf){ // still in the display window
            // build r1, r2
            posMap.push(xpR+j);
            j++;
        }else{ // outside of the display window
            // build rx
            posMap.push(xpRx);
        }
    }

    // step 3
    for (i=0; i<lenLstImage; i++){
        lstImage[i].setAttribute(xp, posMap[i])

    }
    
    // step 4
    var xTransEnd = function (){
        // fire event imagesliderend, with the name attribte of img. which will be used to locate further information.
        var event = new CustomEvent("imagesliderend", {detail: lstImage[idxCenter].getAttribute("name")});
        document.dispatchEvent(event);
        // remove event listener
        lstImage[idxCenter].removeEventListener("transitionend", xTransEnd);
    };
    
    if (d===0){
        // if d==0, there will be no transaction involved. in this case, fire the imagesliderend event here.
        var event = new CustomEvent("imagesliderend", {detail: lstImage[idxCenter].getAttribute("name")});
        document.dispatchEvent(event);
    }else{
        lstImage[idxCenter].addEventListener("transitionend", xTransEnd);
    }

}