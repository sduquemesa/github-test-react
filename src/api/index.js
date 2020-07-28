import axios from 'axios';

const results_per_page = 20;
const public_gists_url = `https://api.github.com/gists/public?per_page=${results_per_page}`

// Fetch public gists data from API
export const fetchData = async (setData) => {
    const response = await axios.get(public_gists_url);
    setData(response.data);
};