const SUPABASE_URL = 'https://aqordevvnruktzytnrtm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxb3JkZXZ2bnJ1a3R6eXRucnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTc4ODUsImV4cCI6MTk2Nzg3Mzg4NX0.paVZTcltRhN61IqrwWNRAkNdX3pf7FOsHUYHh2DnJ_8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// I still don't understand this!!!!!!!
export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export async function authUser() {
    const user = await getUser();
    if (!user) {
        location.replace('../login-page');
    }
}

export async function logOut() {
    await client.auth.signOut();
    return (window.location.href = '/');
}

export async function ifLoggedIn() {
    const user = await getUser();
    if (user) {
        location.replace('/');
    }
}

export async function userPosts(post) {
    const response = await client.from('craigslist_posts').insert(post);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}

export async function fetchPosts() {
    const response = await client.from('craigslist_posts').select('*');
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}