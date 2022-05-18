// IMPORT MODULES under test here:

import { renderPosts } from '../render-utils.js';

const test = QUnit.test;

test('Testing renderPosts function', async (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="render-div"><p>My test poast</p><p>This will be a test post</p><p>sebastian@sebastian.com</p></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = renderPosts({ title: 'My test poast', description: 'This will be a test post', contact: 'sebastian@sebastian.com' });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
