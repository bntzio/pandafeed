import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl = 'http://localhost:3000/api';

export const auth = async (isRegister, credentials, setResponse, history) => {
  try {
    const response = await axios.post(
      `${baseUrl}/${isRegister ? 'signup' : 'login'}`,
      credentials
    );
    setResponse({
      statusCode: response.status,
      message: response.data.message,
    });
    setTimeout(() => {
      history.push('/home');
    }, 5000);
  } catch (error) {
    setResponse({
      statusCode: error.response.status,
      message: error.response.data.message,
    });
  }
};

export const logout = () => {
  return axios.post(`${baseUrl}/logout`);
};
