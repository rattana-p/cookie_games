"use strict";

var showscore = 0,
    x = 0,
    upgrad_1,
    upgrad_2;$(document).ready(function () {
//this is function to show upgrad options when have enought cookies 
    function o(o) {
    o < 10 && $("#upgrad_1,#upgrad_2,#upgrad_3,#upgrad_4,#upgrad_5").css({ cursor: "not-allowed", "background-color": "lightslategray" }), o >= 10 && o < 100 && ($("#upgrad_1").css({ cursor: "pointer", "background-color": "chocolate" }), $("#upgrad_2,#upgrad_3,#upgrad_4,#upgrad_5").css({ cursor: "not-allowed", "background-color": "lightslategray" })), o >= 100 && o < 250 && ($("#upgrad_1, #upgrad_2").css({ cursor: "pointer", "background-color": "chocolate" }), $("#upgrad_3,#upgrad_4,#upgrad_5").css({ cursor: "not-allowed", "background-color": "lightslategray" })), o >= 250 && o < 1e3 && ($("#upgrad_1, #upgrad_2, #upgrad_3").css({ cursor: "pointer", "background-color": "chocolate" }), $("#upgrad_4,#upgrad_5").css({ cursor: "not-allowed", "background-color": "lightslategray" })), o >= 1e3 && o < 1e4 && ($("#upgrad_1, #upgrad_2, #upgrad_3, #upgrad_4").css({ cursor: "pointer", "background-color": "chocolate" }), $("#upgrad_5").css({ cursor: "not-allowed", "background-color": "lightslategray" })), o >= 1e4 && $("#upgrad_1, #upgrad_2, #upgrad_3, #upgrad_4, #upgrad_5").css({ cursor: "pointer", "background-color": "chocolate" });
  }
// function when click cookie      
    $("#cookie").click(function () {
    1 == upgrad_1 && showscore >= 10 && showscore % 30 == 0 && (showscore = showscore + x - 1 + 1, document.getElementById("showcookies").innerHTML = showscore, o(showscore)), 1 == upgrad_2 && showscore >= 10 && showscore % 10 == 0 && (showscore = showscore + x - 1 + 1, document.getElementById("showcookies").innerHTML = showscore, o(showscore)), 1 == upgrad_3 && showscore >= 10 && showscore % 10 == 0 && (showscore = showscore + x - 1 + 1, document.getElementById("showcookies").innerHTML = showscore, o(showscore)), 1 == upgrad_4 && showscore >= 10 && showscore % 10 == 0 && (showscore = showscore + x - 1 + 1, document.getElementById("showcookies").innerHTML = showscore, o(showscore)), 1 == upgrad_5 && showscore >= 10 && showscore % 10 == 0 && (showscore = showscore + x - 1 + 1, document.getElementById("showcookies").innerHTML = showscore, o(showscore)), document.getElementById("showcookies").innerHTML = showscore += 1, o(showscore);
  }), 
// function for upgrad cookie    
    $("#upgrad_1").click(function () {
    if (showscore >= 10) {
      var e = document.createElement("img");e.src = "upgrad_1.png", e.className = "upgrad_pic_1", document.getElementById("busket").appendChild(e), upgrad_1 = !0, showscore -= 10, document.getElementById("showcookies").innerHTML = showscore, o(showscore), x += 1;
    }
  }), $("#upgrad_2").click(function () {
    if (showscore >= 100) {
      var e = document.createElement("img"),
          e = document.createElement("img");e.src = "upgrad_2.png", e.className = "upgrad_pic_1", document.getElementById("busket").appendChild(e), upgrad_2 = !0, showscore -= 100, document.getElementById("showcookies").innerHTML = showscore, o(showscore), x = x + 1 + 1;
    }
  }), $("#upgrad_3").click(function () {
    if (showscore >= 250) {
      var e = document.createElement("img");e.src = "upgrad_3.png", e.className = "upgrad_pic_1", document.getElementById("busket").appendChild(e), upgrad_3 = !0, showscore -= 250, document.getElementById("showcookies").innerHTML = showscore, o(showscore), x = x + 2 + 1;
    }
  }), $("#upgrad_4").click(function () {
    if (showscore >= 1e3) {
      var e = document.createElement("img");e.src = "upgrad_4.png", e.className = "upgrad_pic_1", document.getElementById("busket").appendChild(e), upgrad_4 = !0, showscore -= 500, document.getElementById("showcookies").innerHTML = showscore, o(showscore), x = x + 3 + 1;
    }
  }), $("#upgrad_5").click(function () {
    if (showscore >= 1e4) {
      var e = document.createElement("img");e.src = "upgrad_5.png", e.className = "upgrad_pic_1", document.getElementById("busket").appendChild(e), upgrad_5 = !0, showscore -= 1e3, document.getElementById("showcookies").innerHTML = showscore, o(showscore), x = x + 4 + 1;
    }
  });
});