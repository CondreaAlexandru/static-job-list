const jobsList = document.getElementById('jobs-list')


fetch("data.json")
.then(res => res.json())
.then(data => {
    data.forEach( elements => {
        const jobsHtml = `
        <div class="job-description">
            <div class="logo"><img src="${elements.logo}"/></div>
            <div class="info-jobs">
                <div class="company">
                    <h3>${elements.company}</h3>
                    <span>${elements.new === true ? "NEW" : "" }</span>
                    <span>${elements.featured === true ? "FEATURED" : ""}</span>
                </div>
                <div>
                    <h2>${elements.position}</h2>
                </div>
                <div>
                    <span>${elements.postedAt}</span>
                    <span>${elements.contract}</span>
                    <span class="location">${elements.location}</span>
                </div>
            </div>
            <div class="info-role">
                <p class="rol">Role: ${elements.role}</p>
                <p>Level: ${elements.level}</p>
                <p>Languages: ${elements.languages}</p>
                <p>Nice to have: ${elements.tools}</p>
            </div>
        </div>
        `
        jobsList.innerHTML += jobsHtml;
                
    })
})