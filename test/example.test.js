// IMPORT MODULES under test here:
import { fetchPosts } from '../fetch-utils.js';

import { renderPosts } from '../render-utils.js';

const test = QUnit.test;

test('Testing renderPosts function', async (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div><ul><li>My test poast</li><li>This will be a test post</li><li>sebastian@sebastian.com</li></ul></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const fetch = await fetchPosts([0]);
    const actual = renderPosts(fetch);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
