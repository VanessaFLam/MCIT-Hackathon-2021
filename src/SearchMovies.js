import './SearchMovies.css'
import React from "react"

function SearchMovies() {
    const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e51be93df8a5801d731cfb22c2c14a20&language=en-US&query=${query}&page=1&include_adult=false`
    async function SearchMovies(e) {
        e.preventDefault()
        console.log("submitting")
    }
    return (
        <form className="search-movies">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}

export default SearchMovies