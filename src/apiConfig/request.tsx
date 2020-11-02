// request.js
import axios from 'axios';

declare const SERVICE: string;

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.put['Content-Type'] =
  'application/x-www-form-urlencoded';

axios.interceptors.request.use(
  (config: any): any => {
    if (config.url.indexOf('?') !== -1) {
      config.url += `&t=${new Date().getTime()}`;
    } else {
      config.url += `?t=${new Date().getTime()}`;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response: any): any => {
    const { data } = response;
    if (data.code === 2) {
      //window.location.href = `/login?from=${window.location.pathname}`;
    }
    return response;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

interface PostData {
  url: string;
  data?: any;
}
export const axiosPost = (postData: PostData) => {
  const { url, data } = postData;
  const reqData = {
    data: data,
  };
  axios.post(url, reqData).then(res => {
    return Promise.resolve(res);
  });
};
export default {
  axiosPost,
};
