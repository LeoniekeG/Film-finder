console.log(movies);

const movieTitles = movies.map(movie => {
    return movie.title;
});
console.log(movieTitles);

const addMoviesToDom = movies => {
    movies.forEach(element =>{
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    const newImg = document.createElement("img");
    const movieList = document.getElementById('movielist');
    movieList.appendChild(newLi);
    newLi.appendChild(newA);
    newA.href = "https://www.imdb.com/title/" + element.imdbID;
    newA.appendChild(newImg);
    newImg.src = element.poster;
    }); 
};
addMoviesToDom(movies);

let movieList = document.getElementById("movielist");
const empty = () => {	
    movieList.innerHTML = "";
};

function filterNewestFilms(movie){
    return movie.year > "2013"
} 

const buttonNewest = document.getElementById('newest');

buttonNewest.addEventListener("change", function(){
    console.log("clicked newest");
    const newestFilms = movies.filter(filterNewestFilms);
    console.log(newestFilms);
    empty();
    addMoviesToDom(newestFilms);
}); 

const buttonAvenger = document.getElementById('avenger')

buttonAvenger.addEventListener("change", function(){
    console.log("clicked avenger");
    const nameInMovie = movies.filter((movie) => {
    return movie.title.toLowerCase().includes("avenger");
    })
    console.log(nameInMovie);
    empty();
    addMoviesToDom(nameInMovie);
});

const buttonXmen = document.getElementById('x-men');

buttonXmen.addEventListener("change", function(){
    console.log("clicked x-men");
    const nameInMovie = movies.filter((movie) => {
    return movie.title.toLowerCase().includes("x-men");
    })
    console.log(nameInMovie);
    empty();
    addMoviesToDom(nameInMovie);
});

const buttonPrincess = document.getElementById('princess');

buttonPrincess.addEventListener("change", function(){
    console.log("clicked princess");
    const nameInMovie = movies.filter((movie) => {
    return movie.title.toLowerCase().includes("princess");
    })
    console.log(nameInMovie);
    empty();
    addMoviesToDom(nameInMovie);
});

const buttonBatman = document.getElementById('batman');

buttonBatman.addEventListener("change", function(){
    console.log("clicked batman");
    const nameInMovie = movies.filter((movie) => {
    return movie.title.toLowerCase().includes("batman");
    })
    console.log(nameInMovie);
    empty();
    addMoviesToDom(nameInMovie);
});  


