import React from "react";
import { useState} from "react";


// const logoimage = require('../images/Katmovies-removebg-preview.png')


const Navbar=()=>{

    const [searchTerm, setSearchTerm] = useState("");

        const handleChange = event => {
          setSearchTerm(event.target.value);
        };
        console.log(searchTerm)
        
return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    {/* <img class="navbar-brand" height={43} width={110} src={logoimage}/> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Quality
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/search/480p&1?">480p</a></li>
            <li><a class="dropdown-item" href="/search/720p&1?">720p</a></li>
            <li><a class="dropdown-item" href="/search/1080p&1?">1080p</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/search/hindi&1?">Hindi Dubbed</a></li>
            <li><a class="dropdown-item" href="/search/english&1?">English</a></li>
            <li><a class="dropdown-item" href="/search/tamil&1?">Tamil</a></li>
            <li><a class="dropdown-item" href="/search/telugu&1?">Telugu</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" value={searchTerm} onChange={handleChange} action={`/search/${searchTerm}/1`}>
      <input class="form-control me-2" required={true} type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-danger" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>
    

) 
}

export default Navbar