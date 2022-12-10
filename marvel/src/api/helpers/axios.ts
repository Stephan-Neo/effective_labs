import axios from 'axios';

import environments from '../../config/environments';

const instance = axios.create({
  baseURL: environments.baseApiUrl,
  params: {
    apikey: environments.apiKey
  }
});

export default instance;
