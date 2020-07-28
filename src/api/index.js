import axios from 'axios';

const results_per_page = 20;
const url = `https://api.github.com/gists/public?per_page=${results_per_page}`

export const fetchData = async () => {

    try {
        const response = await axios.get(url);
        return(response);
    } catch (error) {

    }

}