import './SearchJobs.css';
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';


class SearchJobs extends Component {

        // var firstName = "",
        // lastName = "",
        // gradDate = "",
        // jobBefore = "",
        // jobAfter = "",
        // willMentor = "",
        // contact = ""

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            gradDate: "",
            jobBefore: "",
            jobAfter: "",
            willMentor: "",
            contact: "",
        };
        // var firstName = "",
        // lastName = "",
        // gradDate = "",
        // jobBefore = "",
        // jobAfter = "",
        // willMentor = "",
        // contact = ""
    }

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

    submitData = () => {
            Axios.post('http://localhost:3001/api/insert', {
                firstName: firstName
                , lastName: lastName
                , gradDate: gradDate
                , jobBefore: jobBefore
                , jobAfter: jobAfter
                , willMentor: willMentor
                , contact: contact
                }).then(() => {
                    alert("successful insert");
                });
    //             this.setState({firstName: event.target.value});
    //             this.setState({lastName: event.target.value});
    //             this.setState({gradDate: event.target.value});
    //             this.setState({jobBefore: event.target.value});
    //             this.setState({jobAfter: event.target.value});
    //             this.setState({willMentor: event.target.value});
    //             this.setState({contact: event.target.value});
    //     };

    render() {
        const { jobs } = this.state;
        // const [firstName, setFirstName] = useState("");
        // const [lastName, setLastName] = useState("");
        // const [gradDate, setGradDate] = useState("");
        // const [jobBefore, setJobBefore] = useState("");
        // const [jobAfter, setJobAfter] = useState("");
        // const [willMentor, setWillMentor] = useState("");
        // const [contact, setContact] = useState("");


        return (

            <div>
                <form className="search-jobs">
                    <label className="label" htmlFor="query">First Name</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. Jane" onChange={(e) => {
                        firstName(e.target.value)
                    }}/>
                    <label className="label" htmlFor="query">Last Name</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. Doe" onChange={(e) => {
                        lastName(e.target.value)
                    }}/>
                    <label className="label" htmlFor="query">(Expected) Graduation Year</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. 2019" onChange={(e) => {
                        gradDate(e.target.value)
                    }}/>
                    <label className="label" htmlFor="query">Job Before MCIT</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. Software Engineering" onChange={(e) => {
                        jobBefore(e.target.value)
                    }}/>
                    <label className="label" htmlFor="query">Job After MCIT</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. Software Engineering" onChange={(e) => {
                        jobAfter(e.target.value)
                    }}/>
                    <label className="label" htmlFor="query">Willing to Mentor?</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. Yes/No" onChange={(e) => {
                        willMentor(e.target.value)
                    }}/>
                    <label className="label" htmlFor="query">Contact</label>
                    <input className="input" type="text" name="query" 
                    placeholder="i.e. doejane@gmail.com" onChange={(e) => {
                        contact(e.target.value)
                    }}/>
                    <button className="button" type="submit" onclick={submitData}>Submit</button> 
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