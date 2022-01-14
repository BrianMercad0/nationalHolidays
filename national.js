var element = document.querySelectorAll('li.nation');
for (var i = 0; i<element.length; i++){
    if (i%2===0){
        element[i].className = "warm";
    }
    else {
        element[i].className = "cool";
    }
}