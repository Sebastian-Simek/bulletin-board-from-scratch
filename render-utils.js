
export function renderPosts(craigslist_posts) {
    
    const div = document.createElement('div');
    const pTitle = document.createElement('p');
    const pDescription = document.createElement('p');
    const pContact = document.createElement('p');

    pTitle.textContent = craigslist_posts.title;
    pDescription.textContent = craigslist_posts.description;
    pContact.textContent = craigslist_posts.contact;

    div.append(pTitle, pDescription, pContact);
    
    return div;
}