let jobListings = [
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

let search = document.getElementById('searching')
search.style.opacity = 0



let jobListingsSection = document.createElement('section')
jobListingsSection.className = 'job-listings';

let jobListingsFilter = document.createElement('section')
jobListingsFilter.className = 'job-listings';

let main = document.getElementById('main');
main.appendChild(jobListingsSection)
main.appendChild(jobListingsFilter)
    

function showJobItem(logo,company,featured,newy,position,postedAt,contract,location,role,level,languages,tools){
    let jobItem = document.createElement('div')
    jobItem.className = 'job__item';

    let jobItemLeft = document.createElement('div')
    jobItemLeft.className = 'job__item__left';

    let image = document.createElement('img')
    image.src = logo;

    let jobItemInfo = document.createElement('div') 
    jobItemInfo.className = 'job__item__info';

    /* Family starts */

    /* Parent:- InfoTop */
    let infoTop = document.createElement('div') 
    infoTop.className = 'info__top';
    infoTop.id = 'info__top';

    /* Child */
    let companyName = document.createElement('h6');
    companyName.innerHTML = company; 
    infoTop.appendChild(companyName);

    /* Sibling of InfoTop*/
    let positionName = document.createElement('h5')
    positionName.innerHTML = position

    /* SIbling of InfoTop:- InfoBottom */
    let infoBottom = document.createElement('div') 
    infoBottom.className = 'info-bottom';

        /* Children of InfoBottom */
    let timePosted = document.createElement('p');
    timePosted.innerHTML = postedAt;
    infoBottom.appendChild(timePosted)

    let contractual = document.createElement('p');
    contractual.innerHTML = contract;
    infoBottom.appendChild(contractual)

    let locality = document.createElement('p');
    locality.innerHTML = location;
    infoBottom.appendChild(locality)

   

    
    
    /* Family Ends */

    /* Sibling of jobItemLeft */
    let horizontal = document.createElement('hr');

    /* Sibling of jobItemRight */
    let jobItemRight = document.createElement('div')
    jobItemRight.className = 'job__item__right';

    /* children of jobItemRight */
    let roleSpan = document.createElement('span');
    roleSpan.className = 'job__item-tag';
    roleSpan.innerHTML = role;
    roleSpan.addEventListener('click',filter)
    jobItemRight.appendChild(roleSpan)

    let levelSpan = document.createElement('span');
    levelSpan.className = 'job__item-tag';
    levelSpan.innerHTML = level;
    levelSpan.addEventListener('click',filter)
    jobItemRight.appendChild(levelSpan)
    
    languages.forEach(language=>{
      let languageSpan = document.createElement('span')
      languageSpan.className = 'job__item-tag'
      languageSpan.innerHTML=language;
      languageSpan.addEventListener('click',filter)
      jobItemRight.appendChild(languageSpan)
    })
    tools.forEach(tool=>{
      let toolSpan = document.createElement('span')
      toolSpan.className = 'job__item-tag'
      toolSpan.innerHTML = tool
      toolSpan.addEventListener('click',filter)
      jobItemRight.appendChild(toolSpan)
    })
    
    
    

    // parent node for both infoTop
    jobItemInfo.appendChild(infoTop)
    jobItemInfo.appendChild(positionName)
    jobItemInfo.appendChild(infoBottom)

    // jobItemLeft family
    jobItemLeft.appendChild(image)
    jobItemLeft.appendChild(jobItemInfo)

    // parent node for both jobItemLeft and JobItemRight
    jobItem.appendChild(jobItemLeft)
    jobItem.appendChild(horizontal)
    jobItem.appendChild(jobItemRight);
    // return `<div class="job__item">
    // <div class="job__item__left">
    //   <img src=${logo} alt="logo">
    //   <div class="job__item__info">
    //     <div class="info__top" id='info__top'>
    //       <h6>${company}</h6>
    //     </div>
    //     <h5>${position}</h5>
    //     <div class="info-bottom">
    //       <p>${postedAt}</p>
    //       <p>${contract}</p>
    //       <p>${location}</p>
    //     </div>
    //   </div>
    // </div>
    // <hr/>
    // <div class="job__item__right" id='job__item__right'>
    //   <span class="job__item-tag ">${role}</span>
    //   <span class="job__item-tag">${level}</span>
    // </div>
    // </div>`
    tagsNew(newy,infoTop)
    tagsFeatured(featured,infoTop)
    return jobItem;
}

function tagsNew(variable,top){
    let tagsy = document.createElement('span');
    tagsy.className = 'info__top-tag'

    
    if(variable){
        tagsy.innerHTML = 'New!'
        top.appendChild(tagsy)
    }
}
function tagsFeatured(variable,top){
  let tagsy = document.createElement('span');
  tagsy.className = 'info__top-tag'

  
  if(variable){
      tagsy.innerHTML = 'Featured'
      top.appendChild(tagsy)
  }
}

function languagesAndToolsTag(arr1,arr2){
    arr1.forEach( arr => {
        let tags = document.createElement('span');
        tags.className = 'job__item-tag'
        tags.innerHTML = arr;
        document.getElementById('job__item__right').appendChild(tags)
    })
    arr2.forEach( arr => {
        let tags = document.createElement('span');
        tags.className = 'job__item-tag'
        tags.innerHTML = arr;
        document.getElementById('job__item__right').appendChild(tags)
    })
}

jobListings.forEach(jobListing => {
  jobListingsSection.appendChild(showJobItem(jobListing.logo,jobListing.company,jobListing.featured,jobListing.new,jobListing.position,jobListing.postedAt,jobListing.contract,jobListing.location,jobListing.role,jobListing.level,jobListing.languages,jobListing.tools))
});

let arr = []
let itemTags = document.getElementsByClassName('job__item-tag');

function filter(){
  let searchTags = document.createElement('div');
  searchTags.className = 'search-tags';
  search.appendChild(searchTags)
  search.style.opacity = 1;
  jobListingsSection.style.display = 'none'
  if(arr.indexOf(event.target.innerHTML)=== -1){
    arr.push(event.target.innerHTML);
    let searchSpan = document.createElement('span')
    searchSpan.className = 'tag';
    searchSpan.innerHTML = event.target.innerHTML;
    searchTags.appendChild(searchSpan)
  }
  jobListings = jobListings.filter(jobListing => event.target.innerHTML===jobListing.role );
  
  jobListings.forEach(jobListing => {
    jobListingsFilter.appendChild(showJobItem(jobListing.logo,jobListing.company,jobListing.featured,jobListing.new,jobListing.position,jobListing.postedAt,jobListing.contract,jobListing.location,jobListing.role,jobListing.level,jobListing.languages,jobListing.tools))
  });
  // jobListings.filter(jobListing=>{
  //   if(event.target.innerHTML!==jobListing.role){
  //     // let t = Object.values(jobListingsSection.children)
  //     // console.log(t)
  //     let y = event.target.parentNode.parentNode;
  //     y.style.display = 'none'
      
  //   }
  // })
}


