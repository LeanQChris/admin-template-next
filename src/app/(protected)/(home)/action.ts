export async function fetchPosts() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    return result.json();
}
