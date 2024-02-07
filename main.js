let root = document.querySelector('.root');

function show (movies){
    root.textContent = '';
    for(let i = 0; i < movies.length; i++){
        let myDiv = document.createElement('div');
        myDiv.classList.add('movies');

        let title = document.createElement('h2');
        title.classList.add('moviename');
        title.textContent = movies[i].Title;

        let year = document.createElement('span');
        year.classList.add('movieyear');
        year.textContent = movies[i].movie_year;

        let div = document.createElement('div');
        div.classList.add('div');
        div.textContent = movies[i].imdb_rating;
        
        let unordered = document.createElement('ul');
        unordered.classList.add('ul');
        unordered.textContent = movies[i];

        let list = document.createElement('li');
        list.classList.add('li');
        list.textContent = movies[i].Categories;

        let bttn = document.createElement('button');
        bttn.classList.add('matn');
        bttn.textContent = 'movie summury';

        myDiv.appendChild(title);
        myDiv.appendChild(year);
        myDiv.appendChild(div);
        myDiv.appendChild(list);
        myDiv.appendChild(bttn);

        root.appendChild(myDiv);
}
}
function show1 (movies){
    root.textContent = '';
    for(let i = 0; i < movies.length; i++){
        let myDiv = document.createElement('div');
        myDiv.classList.add('movies');

        let title = document.createElement('h2');
        title.classList.add('moviename');
        title.textContent = movies[i].Title;

        let year = document.createElement('span');
        year.classList.add('movieyear');
        year.textContent = movies[i].movie_year;

        let div = document.createElement('div');
        div.classList.add('div');
        div.textContent = movies[i].imdb_rating;
        
        let unordered = document.createElement('ul');
        unordered.classList.add('ul');
        unordered.textContent = movies[i];

        let list = document.createElement('li');
        list.classList.add('li');
        list.textContent = movies[i].Categories;

        let bttn = document.createElement('button');
        bttn.classList.add('matn');
        bttn.textContent = 'movie summury';

        myDiv.appendChild(title);
        myDiv.appendChild(year);
        myDiv.appendChild(div);
        myDiv.appendChild(list);
        myDiv.appendChild(bttn);

        root.appendChild(myDiv);
}
}

show(movies);
    
let inp = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');

inp.addEventListener('keyup', function(){
    let key =  new  RegExp (inp.value, 'gi');

    let movies2 = movies.filter(function(x){
        return x.Title.toString().match(key);
});
    
    show(movies2);
})
inp2.addEventListener('keyup', function(){
    let key =  new  RegExp (inp.value, 'gi');

    let movies2 = movies.filter(function(x){
        return x.movie_year.toString().match(key);
});
    
    show1(movies2);
})