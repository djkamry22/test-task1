export async function getContributors(page = 1) {
    const URL = `https://api.github.com/repos/vuejs/vue/contributors?page=${page}`;
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

// we got only last page with commits, we don't need all commits
export async function getTotalCommits() {
    const URL = 'https://api.github.com/repos/vuejs/vue/stats/contributors';
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

export async function getDetails() {
    const URL = 'https://api.github.com/repos/vuejs/vue';
    const response = await fetch(URL)
    const data = await response.json()
    return data
}
