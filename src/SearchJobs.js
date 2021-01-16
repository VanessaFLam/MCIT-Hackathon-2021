import './SearchJobs.css'
import React, {Component} from "react"

class SearchJobs extends Component {

    state = {
        jobs: [],
        job: {
            firstName: "",
            lastName: "",
            gradDate: "",
            jobBefore: "",
            jobAfter: "",
            willMentor: "",
            contact: ""
        }
    }
    componentDidMount() {
        this.getJobs()
    }

    
    // const hostname = window.location.hostname;

    getJobs = () => {
        fetch("http://localhost:3001/products")
            //.then(response => console.log("VL: " + response))
            .then(response => response.json())
            .then(response => this.setState({jobs: response.data}))
            .catch (err => console.error(err))
    }

    addJob = _ => {
        const {job} = this.state;
        fetch(`http://localhost:3001/api/insert?firstName=${job.firstName}&lastName=${job.lastName}&gradDate=${job.gradDate}&jobBefore=${job.jobBefore}&jobAfter=${job.jobAfter}&willMentor=${job.willMentor}&contact=${job.contact}`)
            .then(this.getJobs)
            .catch(err => console.error(err))
    }

    renderJobs = (name) => <div className="job-card">
        <div className="name">{name.firstName} {name.lastName}</div>
        <div className="grad-date">Year of {name.gradDate}</div>
        <div className="job-before"><strong>Job Before MCIT:</strong> {name.jobBefore}</div>
        <div className="job-after"><strong>Job After MCIT:</strong> {name.jobAfter}</div>
        <div className="will-mentor"><strong>Willing to Mentor:</strong> {name.willMentor}</div>
        <div className="contact"><strong>Contact:</strong> {name.contact}</div>
    </div>
    render() {
        const { jobs, job } = this.state;
        console.log(jobs);
        return (
            <div>
                <form className="search-network">
                    <label className="label" htmlFor="query">First Name</label>
                    <input className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. Jane" 
                    value={job.firstName} 
                    onChange={e => this.setState({ job: {...job, firstName: e.target.value} })}
                    />

                    <label className="label" htmlFor="query">Last Name</label>
                    <input className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. Doe" 
                    value={job.lastName} 
                    onChange={e=>this.setState({ job: {...job, lastName: e.target.value} })}
                    />

                    <label className="label" htmlFor="query">Graduation Year</label>
                    <input className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. 2022" 
                    value={job.gradDate} 
                    onChange={e=>this.setState({ job: {...job, gradDate: e.target.value} })}
                    />

                    <label className="label" htmlFor="query">Job Before MCIT</label>
                    <input className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. Software Engineer" 
                    value={job.jobBefore} 
                    onChange={e=>this.setState({ job: {...job, jobBefore: e.target.value} })}
                    />

                    <label className="label" htmlFor="query">Job After MCIT</label>
                    <input className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. Software Engineer" 
                    value={job.jobAfter} 
                    onChange={e=>this.setState({ job: {...job, jobAfter: e.target.value} })}
                    />

                    <label className="label" htmlFor="query">Willing to Mentor</label>
                    <input className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. Yes/No" 
                    value={job.willMentor} 
                    onChange={e=>this.setState({ job: {...job, willMentor: e.target.value} })}
                    />

                    <label className="label" htmlFor="query">Contact Info</label>
                    <input className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. doejane@gmail.com" 
                    value={job.contact} 
                    onChange={e=>this.setState({ job: {...job, contact: e.target.value} })}
                    /> 

                    <button className="button" type="submit" onClick={this.addJob}>Submit</button>
                </form>
                
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