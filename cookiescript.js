var showscore = 0;
var x = 0;
var upgrad_1;
var upgrad_2;
$(document).ready( function(){

  // ----> check when cookies is clicked 
  $('#cookie').click(function(){

                  if (upgrad_1 == true ){

                    if ( showscore >= 10 && showscore % 30 == 0 ){
                        showscore = ((showscore+x)-1)+1;
                        document.getElementById('showcookies').innerHTML = showscore;
                        checkscore(showscore);
                    }
                  }

                  if (upgrad_2 == true ){
                    if ( showscore >= 10 && showscore % 10 == 0){
                        showscore = ((showscore+x)-1)+1;
                        document.getElementById('showcookies').innerHTML = showscore;
                        checkscore(showscore);
                    }
                  }

                   if (upgrad_3 == true ){
                    if ( showscore >= 10 && showscore % 10 == 0){
                        showscore = ((showscore+x)-1)+1;
                        document.getElementById('showcookies').innerHTML = showscore;
                        checkscore(showscore);
                    }
                  }

                  if (upgrad_4 == true ){
                    if ( showscore >= 10 && showscore % 10 == 0){
                        showscore = ((showscore+x)-1)+1;
                        document.getElementById('showcookies').innerHTML = showscore;
                        checkscore(showscore);
                    }
                  }

                  if (upgrad_5 == true ){
                    if ( showscore >= 10 && showscore % 10 == 0){
                        showscore = ((showscore+x)-1)+1;
                        document.getElementById('showcookies').innerHTML = showscore;
                        checkscore(showscore);
                    }
                  }

                   document.getElementById('showcookies').innerHTML = (showscore = showscore+1);
                   checkscore(showscore);  
         });

         //-----> check upgrad avarible
         function checkscore(showscore){
              if ( showscore < 10 )
                 { 
                  $('#upgrad_1,#upgrad_2,#upgrad_3,#upgrad_4,#upgrad_5').css({ "cursor":"not-allowed", "background-color":"lightslategray" });
                 }   
              if ( showscore >= 10 && showscore < 100 ) {
                 $('#upgrad_1').css({ "cursor":"pointer", "background-color":"chocolate" });
                 $('#upgrad_2,#upgrad_3,#upgrad_4,#upgrad_5').css({ "cursor":"not-allowed", "background-color":"lightslategray" });
              }

              if ( showscore >= 100 && showscore < 250 )
                 { 
                   $('#upgrad_1, #upgrad_2').css({ "cursor":"pointer", "background-color":"chocolate" }); 
                   $('#upgrad_3,#upgrad_4,#upgrad_5').css({ "cursor":"not-allowed", "background-color":"lightslategray" });
                 }  
              if ( showscore >= 250 && showscore < 1000 )
                 { 
                   $('#upgrad_1, #upgrad_2, #upgrad_3').css({ "cursor":"pointer", "background-color":"chocolate" }); 
                   $('#upgrad_4,#upgrad_5').css({ "cursor":"not-allowed", "background-color":"lightslategray" });
                 }  
              if ( showscore >= 1000 && showscore < 10000 )
                 { 
                   $('#upgrad_1, #upgrad_2, #upgrad_3, #upgrad_4').css({ "cursor":"pointer", "background-color":"chocolate" }) 
                   $('#upgrad_5').css({ "cursor":"not-allowed", "background-color":"lightslategray" });
                 } 
              if ( showscore >= 10000 )
                 { 
                   $('#upgrad_1, #upgrad_2, #upgrad_3, #upgrad_4, #upgrad_5').css({ "cursor":"pointer", "background-color":"chocolate" }) 
                 }  
            }  

        //-----> function when click upgrad_1   
        $('#upgrad_1').click(function(){
                        if ( showscore >= 10 ) {
                              var img=document.createElement("img");
                              img.src = "upgrad_1.png";
                              img.className = 'upgrad_pic_1';
                              document.getElementById('busket').appendChild(img);
                              upgrad_1 = true;
                              showscore = (showscore-10);
                              document.getElementById('showcookies').innerHTML = showscore;
                              checkscore(showscore);
                              x = x+1;
                        }
                }); 

        //-----> function when click upgrad_2 
        $('#upgrad_2').click(function(){
                if ( showscore >= 100 ) {
                      var img=document.createElement("img");
                              var img=document.createElement("img");
                              img.src = "upgrad_2.png";
                              img.className = 'upgrad_pic_1';
                              document.getElementById('busket').appendChild(img);
                              upgrad_2 = true;
                              showscore = (showscore-100);
                              document.getElementById('showcookies').innerHTML = showscore;
                              checkscore(showscore);
                              x = (x+1)+1;
                }
        }); 

        //-----> function when click upgrad_3 
        $('#upgrad_3').click(function(){
                if ( showscore >= 250 ) {
                              var img=document.createElement("img");
                              img.src = "upgrad_3.png";
                              img.className = 'upgrad_pic_1';
                              document.getElementById('busket').appendChild(img);
                              upgrad_3 = true;
                              showscore = (showscore-250);
                              document.getElementById('showcookies').innerHTML = showscore;
                              checkscore(showscore);
                              x = (x+2)+1;
                }
        }); 

        //-----> function when click upgrad_4 
        $('#upgrad_4').click(function(){
                if ( showscore >= 1000 ) {
                              var img=document.createElement("img");
                              img.src = "upgrad_4.png";
                              img.className = 'upgrad_pic_1';
                              document.getElementById('busket').appendChild(img);
                              upgrad_4 = true;
                              showscore = (showscore-500);
                              document.getElementById('showcookies').innerHTML = showscore;
                              checkscore(showscore);
                              x = (x+3)+1;
                }
        }); 

        //-----> function when click upgrad_5 
        $('#upgrad_5').click(function(){
                if ( showscore >= 10000 ) {
                              var img=document.createElement("img");
                              img.src = "upgrad_5.png";
                              img.className = 'upgrad_pic_1';
                              document.getElementById('busket').appendChild(img);
                              upgrad_5 = true;
                              showscore = (showscore-1000);
                              document.getElementById('showcookies').innerHTML = showscore;
                              checkscore(showscore);
                              x = (x+4)+1;
                }
        }); 
});
    
    