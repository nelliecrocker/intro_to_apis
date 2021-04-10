// console.log("hello world")

// let url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

// fetch(url) // The fetch method is available to us in the browser
//             // and we supply at least a url and it will kick off
//             // a "GET" request to that url
//     .then(res => res.json()) // .then() can be chained on a fetch to allow us
//                             // to take the response and do something with it.
//     .then(json => {     // in this case I have used the json data to display in the console
//         console.log(json)
//         console.log(json.title) // These logs are unique to the json that we got back
//         console.log(json.locations) // and only work on this object's structure
//         console.log(json.director)
//     })
    /* BASIC FETCH USE:
    
    fetch(<url>)
        .then(<callback function to process the data>)
        .then(<callback function to use the data>)
    */
    /* URL is a uniform resource locator - defines the pattern that gives you back a specific resource

    it makes some computer available by some set of words
    */

    /* JSON is a format */

    const baseURL = "https://ghibliapi.herokuapp.com"

    fetch(baseURL + "/films") // reaches out to the internet to get data
        .then(res => res.json()) // returns on the json data
        .then(json =>
            { console.log(json)
            let myArr = json.map(film => { // make a new array reducing the items
                return {
                    title: film.title,
                    rt_score: film.rt_score
            }
            })
            let sortedArr = myArr.sort((cur, prev) => prev.rt_score - cur.rt_score) // sorts them by rating
            //console.log(myArr)
            displayResults(myArr) // passes off the sorted code
        })

        // Display Results
        function displayResults(films) {
            console.log(films) // checks to provide the data is passing
            let filmList = document.getElementById("film-list") // this is the first time we grab a dom element by id
            films.map(film => {
                let filmLi = document.createElement('li') // this is our first time making a new tag from JS
                filmLi.innerText = `${film.title } ${film.rt_score}`
                filmList.appendChild(filmLi)

            })
        }


