
// create a function that holds the html that will out put the intern
function internCard(data){
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">School: ${ school }</li>
        </ul>
    </div>
</div>
 
`

}

module.exports = internCard
// export internCard
