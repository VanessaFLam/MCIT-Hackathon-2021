import './SearchJobs.css'
import React, {useState} from "react"

function SearchJobs() {

    const [query, setQuery] = useState("");

    const [jobs, setJobs] = useState([]);
    async function searchJobs(e) {
        e.preventDefault()
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e51be93df8a5801d731cfb22c2c14a20&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const response = await fetch(url);
            const data = await response.json();
            setJobs(data.results);
        } catch(err) {
            console.error(err);
        }
    }
    return (
        <div>
            <form className="search-jobs" onSubmit={searchJobs}>
                <label className="label" htmlFor="query">Job Title</label>
                <input className="input" type="text" name="query" 
                placeholder="i.e. Software Engineering"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {jobs.map(job => (
                    <div className="card" key={job.id}>
                        <h3 className="title">{job.title}</h3>
                        <p className="date"><small>Date Posted: {job.release_date}</small></p>
                        <p className="description">Description: {job.overview}</p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default SearchJobs