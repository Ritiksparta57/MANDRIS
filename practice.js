  let date=new Date();
    console.log("The Time When The Website Was Accessed:",date);
    document.getElementById("time").textContent=date;   
 function  myfunction(){
    document.addEventListener('DOMContentLoaded', () =>{
      const searchbutton = document.getElementById('searchbutton');
const searchResults = document.getElementById('searchResults');
const movies=[
   "Shawshank Redemption",
    "The Godfather",
    "In The Pursuit Of Happyness",
    "Forrest Gump",
    "Gladiator",
    "Braveheart",
    "Cindrella Man",
    "Senna",
];

searchbutton.addEventListener('input', () => {
    const query = searchbutton.value.toLowerCase();
    searchResults.innerHTML = ''; 
    if (query) {
        const filteredMovies = movies.filter(movie => 
            movie.toLowerCase().includes(query)
        );
        if (filteredMovies.length > 0) {
            filteredMovies.forEach(movie => {
                 li = document.createElement('li');
                li.textContent = movie;
                li.addEventListener('click', () => {
                    searchbutton.value = movie;
                    searchResults.innerHTML = '';
                    searchResults.style.display = 'none';
                });
                searchResults.appendChild(li);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    } else {
        searchResults.style.display = 'none';
    }
});
    document.addEventListener('click', (event) => {
        if (!searchResults.contains(event.target) && event.target !== searchbutton) {
            searchResults.style.display = 'none';
          }
            });
});
  };
  myfunction();

 </script>
 <script>
  let sliderImages = document.querySelectorAll(".frame"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;
   function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}
        function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}
            function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}
  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}
     arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});
  arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();