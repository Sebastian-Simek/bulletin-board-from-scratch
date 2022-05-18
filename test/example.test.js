// IMPORT MODULES under test here:
import { fetchPosts } from '../fetch-utils.js';

import { renderPosts } from '../render-utils.js';

const test = QUnit.test;

test('Testing renderPosts function', async (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div><p>My test poast</p><p>This will be a test post</p><p>sebastian@sebastian.com</p></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const fetch = await fetchPosts();
    const actual = renderPosts(fetch[0]);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
