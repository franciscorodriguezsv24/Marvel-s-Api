import axios from 'axios';

export async function http(path, config) {
  const response = await axios.request({ url: path, ...config });
  return {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    config: response.config,
  };
}

export async function get(path, config) {
    const requestConfig = { method: 'get', ...config };
    const response = await http(path, requestConfig);
    return response;
}
