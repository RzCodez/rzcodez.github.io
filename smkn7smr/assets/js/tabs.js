function btn(x){
    if (x == 1){
        document.getElementById("rpl").style.display = "block";
        document.getElementById("tkj").style.display = "none";
        document.getElementById("mm").style.display = "none";
    }
    else if (x == 2){
        document.getElementById("rpl").style.display = "none";
        document.getElementById("tkj").style.display = "block";
        document.getElementById("mm").style.display = "none";
    }
    else if (x == 3){
        document.getElementById("rpl").style.display = "none";
        document.getElementById("tkj").style.display = "none";
        document.getElementById("mm").style.display = "block";
    }
}
