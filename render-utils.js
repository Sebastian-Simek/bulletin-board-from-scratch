
export function renderPosts(craigslist_posts) {
    
    const div = document.createElement('div');
    div.classList.add('render-div');
    
    const pTitle = document.createElement('p');
    pTitle.textContent = craigslist_posts.title;
    
    const pDescription = document.createElement('p');
    pDescription.textContent = craigslist_posts.description;
    
    const pContact = document.createElement('p');
    pContact.textContent = craigslist_posts.contact;


    div.append(pTitle, pDescription, pContact);
    
    return div;
}