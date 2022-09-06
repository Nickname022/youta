let videolist = ["น่ารัก.mp4","นะโม love pussy.mp4","เต้นโหด.mp4","เต้นกาก.mp4","คนโหด.mp4","นิก vs นะโม.mp4","รวมต๊ะ.mp4","นะโมโหด.mp4","20220818_133551.mp4", "Baki.mp4","gumball.mp4" ,"เป่าโหด.mp4"];
let xvideo = ["ยัดตูด.mp4","tree fuck.mov","gay1.mp4","fuck bread.mp4","mmm.mp4","gay.mp4"];
let insertvideo = document.getElementById("nick");

let output = "";
let status = document.getElementsByClassName("videopagetag");
function Showvideo(){
   for (var i in videolist) {
      output += "<div class='x'>";
      output += '<video class="videopagetag" id="'+ videolist[i] +'" src="' +videolist[i]+'"';
      output += '" controls></video>';
      output += '<p id="'+videolist[i]+'" class="videopagename">'+videolist[i]+'</p>';
      output += '</div>';
      output += "\n";
      }
   insertvideo.innerHTML = output;
}
Showvideo();

function Showxvideo(){
   let output = "";
   for (var z in xvideo) {
      output += "<div class='x'>";
      output += '<video class="videopagetag" id="'+xvideo[z] +'" src="' +xvideo[z]+'"';
      output += '" controls></video>';
      output += '<p id="'+xvideo[z]+'" class="videopagename">'+xvideo[z]+'</p>';
      output += '</div>';
      output += "\n";
      }
   insertvideo.innerHTML = output;
}

let changestatus = document.getElementById("numbervideo");
changestatus.innerHTML = "<p>"+status.length+" video</p>";

function Searchvideo(){
   let input = document.getElementById("search").value
   input=input.toLowerCase();
   let x = document.getElementsByClassName("videopagetag");
   let c = document.getElementsByClassName("videopagename");
   if (input === "spidermannowayhome") {
      for (var i = 0; i < x.length; i++) {
         x[i].style.display="none";
         c[i].style.display="none";
      }
      Showxvideo();
   }else{
   Showvideo();
   for (var i = 0; i < x.length; i++) {
      if (!x[i].id.toLowerCase().includes(input) ) {
         x[i].style.display="none";
         c[i].style.display="none";
         
      }else{
         x[i].style.display="list-item";
         c[i].style.display="list-item";
}
}
}
}
let button = document.getElementById("btn1");
button.addEventListener('click', Searchvideo);
