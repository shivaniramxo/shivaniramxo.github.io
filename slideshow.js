<img name="slide" width="560" height="315">

<script>
var v = 0;
var videos = [];
var time = 5000;

videos[0] =src="https://www.youtube.com/embed/RvHLHhRyOos" ;
videos[1] = src="https://www.youtube.com/embed/-oYTYqldNwY";

function changeVid() {
  document.slide.src = videos[v];

  if(v < videos.lengh -1){
    v++;
  } else {
    v = 0;
  }

  setTimeout(changeVid()", time");
}

</script>
