var i=0;
var movies = [
    {
      poster:'mediaNstuff/pos2.jpg',
      sauce:'https://drive.google.com/file/d/1PIGHf_kMcgHRsIznSLE6_xY-qlQA649X/view?usp=sharing',
      titles:'The GodFather (1972)'
    },
    {
      poster:'mediaNstuff/pos3.jpg',
      sauce:'https://c1ne.co/soorarai-pottru-2020/',
      titles:'Soorarai Pottru (2020)'
    },
    {
      poster:'mediaNstuff/pos4.jpg',
      sauce:'https://drive.google.com/drive/folders/1yFACuXRI9yYxDfV2OjoOcpAj7PgVoHsx',
      titles:'The Dark Knight 2008'
    },
    
    {
      poster:'mediaNstuff/pos5.jpg',
      sauce:'https://drive.google.com/file/d/1I3ML_e3tNjlEklx3DhhyBpv5keWH5zP1/view?usp=sharing',
      titles:'The Godfather Part II '
    },

    {
      poster:'mediaNstuff/pos6.jpg',
      sauce:'https://drive.google.com/file/d/1mmepwsTNT5ZApwjjbEJELNEsWYwvAJlk/view?usp=sharing',
      titles:'12 Angry Men 1957'
    },
    {
      poster:'mediaNstuff/pos7.jpg',
      sauce:'https://drive.google.com/file/d/13TqBnGl2kQsOtcOGMVjGGWumg9JNxhC0/view?usp=sharing',
      titles:'Pulp Fiction 1994'
    },
    //This Block Stays in end -------------------------
    {
      poster:'mediaNstuff/end.gif',
      sauce:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      titles:'Thanks for Binging'
    }
]


  function disliked(){
        change_posters();
        i++;
  }
  function liked(){
    
    change_posters();
    redirect_link();
    i++;
    }

function change_posters(){
  if(i== movies.length){
  document.getElementById("sauce").href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
  else{
  
  document.getElementById("change").src = movies[i].poster
  document.getElementById("caption").textContent = movies[i].titles
}
  }


function redirect_link(){
  if(i== movies.length){
  document.getElementById("sauce").href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
  else{
   document.getElementById("sauce").href = movies[i-1].sauce
   console.log(movies.length)
  }
}