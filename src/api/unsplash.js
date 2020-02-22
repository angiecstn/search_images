import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4_tOLMCom-b3tun5qxRYa3h_7DFx5UAeIKJt-86DkgQ'
    }
});