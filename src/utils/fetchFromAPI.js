import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';



const options = {
	
	params: {
		relatedToVideoId: '7ghhRHRP6t4',
    	part: 'id,snippet',
    	type: 'video',
    	maxResults: '50'
	},
	headers: {
	  'X-RapidAPI-Key': 'badf3525d2msh734c41fa7964d11p12dcd4jsn867858dab3f1',
	  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
  };

  export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);

	return data;
  };