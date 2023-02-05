const jobs = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

  
  function jobItems(jobList,filteringTags = []){
    let TAGS_CONTAINER = '...'
    let jobItemContainer = 
    `<div class=${['1','2'].some(c => jobList.id == c) ? 'job__item': 'job__item2'}>
      <div class="job__item__left">
        <img src=${jobList.logo} alt="logo">
        <div class="job__item__info">
          <div class="info__top" id="info__top">
            <h6>${jobList.company}</h6>
            ${jobList.new ? `<span class="info__top-tag">New!</span>`:''}
            ${jobList.featured?`<span class="info__top-tag">Featured</span>`:''}
          </div>
          <h5>${jobList.position}</h5>
          <div class="info-bottom">
            <p>${jobList.postedAt}</p>
            <p>${jobList.contract}</p>
            <p>${jobList.location}</p>
          </div>
        </div>
      </div>
      <hr/>
      <div class="job__item__right" id="job__item__right">
        ${TAGS_CONTAINER}
      </div>
    </div>`
    const tags = [jobList.role, jobList.level, ...(jobList.languages || []), ...(jobList.tools || [])]

    const filter = !filteringTags.length || filteringTags.every(tag => tags.includes(tag))



    if(!filter){
      return '';
    }else{
      const tagContainer = tags.reduce((acc,currentValue)=>{
        return acc + tagItem(currentValue)
    },'')
      return jobItemContainer.replace(TAGS_CONTAINER,tagContainer)
    }
    
}

function tagItem(tag){
    return `<span class="job__item-tag ">${tag}</span>`
}

function getJobs(filteringTags){
  let fullJobListings = jobs.reduce((acc,currentValue)=>{
    return acc + jobItems(currentValue,filteringTags)
  },'')

  document.getElementById('job-listings').innerHTML = fullJobListings;
}


function searchTag(tag){
    return `<span class="tag">${tag}</span>`
}

function classToggle(element,className){
    element.classList.contains(className)
    ? element.classList.remove(className) 
    : element.classList.add(className)
    
}

let search = document.getElementById('searching')
search.classList.add('hide')
window.addEventListener('click',(event)=>{
  const targetElement = event.target;
  const classes = ['job__item-tag','tag']
  
  if(!classes.some(c => targetElement.classList.contains(c))){
    return;
  }else{
    search.classList.remove('hide')
    classToggle(targetElement,'active')

    let searchContainer = document.getElementById('search-tags');

    let searchContainerArray = Array.from(searchContainer.children).map(tag => tag.innerHTML).filter(tag => !!tag)
    
    let btn = document.getElementById('search-btn')
    

    if(searchContainerArray.includes(targetElement.innerHTML)){
      searchContainerArray = searchContainerArray.filter(tag=> tag !== targetElement.innerHTML)
    }else{
      searchContainerArray.push(targetElement.innerHTML)
    }
    btn.onclick = function(){
      searchContainer.innerHTML = ''
      getJobs()
    }
    searchContainer.innerHTML = searchContainerArray.reduce((acc,currentValue)=>{
      return acc + searchTag(currentValue);
    },'')
    getJobs(searchContainerArray)
  }
});

getJobs()

