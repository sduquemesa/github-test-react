import axios from 'axios';

const results_per_page = 20;
const page = 10;
const public_gists_url = `https://api.github.com/gists/public?per_page=${results_per_page}&page=`

// Fetch public gists data from API
export const fetchData = async (setData, page) => {
    const response = await axios.get(public_gists_url+page);
    setData(response.data);
};