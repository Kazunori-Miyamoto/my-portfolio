var pics_src = new Array("sige1.JPG", "sige2.jpg", "sigebero.JPG");
var num = 0;

function go_forward() {
  if (num == 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

function go_back() {
  if (num == 0) {
    num = 2;
  } else {
    num--;
  }
  document.getElementById("mypic").src = pics_src[num];
}
