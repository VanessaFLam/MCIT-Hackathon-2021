import './SearchJobs.css'
import React, {Component} from "react"

class SearchJobs extends Component {

    state = {
        jobs: []
    }
    componentDidMount() {
        this.getJobs()
    }

    getJobs = () => {
        const url = "http://localhost:8081/jobs"
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({jobs: response}))
            .catch (err => console.error(err))
    }

    renderJobs = (name) => <div className="job-card">
        <div className="jobtitle">{name.jobtitle}</div>
        <div className="company">{name.company}</div>
        <div className="formattedLocation">{name.formattedLocation}</div>
        <div className="date">{name.date}</div>
        <div className="snippet">{name.snippet}</div>
        <div className="url"><a href={name.url}>Visit Job</a></div>
    </div>
    render() {
        const { jobs } = this.state;
        return (
            <div>
                <form className="search-jobs">
                    <label className="label" htmlFor="query">First Name</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. Jane"
                    />
                    <label className="label" htmlFor="query">Last Name</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. Doe"
                    />
                    <label className="label" htmlFor="query">(Expected) Graduation Year</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. 2019"
                    />
                    <label className="label" htmlFor="query">Job Before MCIT</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. Software Engineering"
                    />
                    <label className="label" htmlFor="query">Job After MCIT</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. Software Engineering"
                    />
                    <label className="label" htmlFor="query">Willing to Mentor?</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. Yes/No"
                    />
                    <label className="label" htmlFor="query">Contact</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. doejane@gmail.com"
                    />
                    <button className="button" type="submit">Submit</button>
                </form>
                <div>
                    
                </div>
                <div className="card-container">
                    {jobs.map(this.renderJobs)}
                </div>
            </div>
            
        )
    }
}

{/*function SearchJobs() {

    const [query, setQuery] = useState("");

    const [jobs, setJobs] = useState([]);
    async function searchJobs(e) {
        e.preventDefault()
        
        const url = `http://localhost:8081/emotions`

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
*/}

export default SearchJobs