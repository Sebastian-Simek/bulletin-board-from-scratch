
export function renderPosts(craigslist_posts) {
    
    const div = document.createElement('div');
    div.classList.add('render-div');

    const button = document.createElement('button');
    button.textContent = 'remove';
    button.classList.add('remove-button');
    button.setAttribute('id', 'remove');
    
    const pTitle = document.createElement('p');
    pTitle.textContent = craigslist_posts.title;
    
    const pDescription = document.createElement('p');
    pDescription.textContent = craigslist_posts.description;
    
    const pContact = document.createElement('p');
    pContact.textContent = craigslist_posts.contact;


    div.append(button, pTitle, pDescription, pContact);
    
    return div;
}