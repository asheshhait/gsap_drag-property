
Draggable.create("#circle1",{
    type:'x',
    bounds:".drag-box"
})

function checkOverlap() {
    var div1 = document.querySelector("#cir2");
    var div2 = document.getElementById('circle1');
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();

    if (
      rect1.left < rect2.right
    ) {
    document.querySelector("#video1").style.opacity= 0;
    console.log('Divs are overlapping!');
    }
    else{
        document.querySelector("#video1").style.opacity= 1;
    }
  }
window.addEventListener('mousemove', checkOverlap);