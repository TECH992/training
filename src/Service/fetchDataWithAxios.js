import axios from 'axios';

const fetchDataWithAxios = async (apiUrl) => {
          if (!apiUrl || typeof apiUrl !== 'string') {
                    throw new Error('Invalid API URL');
          }
          try {
                    const response = await axios.get(apiUrl);
                    if (response.status !== 200) {
                              throw new Error(`Request failed with status ${response.status}`);
                    }
                    return response.data;
          } catch (error) {
                    throw error;
          }
};

export { fetchDataWithAxios };
