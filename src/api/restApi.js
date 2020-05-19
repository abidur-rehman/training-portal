import axios from 'axios';

// const baseURL = `http://192.168.1.4:31115`;

export const restApi = axios.create({
  // baseURL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

// Add a request interceptor
restApi.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add a response interceptor
restApi.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export const authenticate = async (email, password) => {
  const requestParameters = {
    method: 'POST',
    url: '/api/users/login',
    data: {
      email,
      password: password
    }
  };
  return restApi.request(requestParameters)
    .then(response => response)
    .catch((err) => {
      return err.response;
    });
};

export const signup = (name, email, password) => {
  const requestParameters = {
    method: 'POST',
    url: '/api/users/signup',
    data: {
      name,
      email,
      password
    }
  };
  return restApi.request(requestParameters)
    .then(response => response)
    .catch((err) => {
      return err.response;
    });
};

export const getSectionData = () => {
  const requestParameters = {
    method: 'GET',
    url: `/api/sectiondata`
  };
  return restApi.request(requestParameters)
    .then(response => response)
    .catch((err) => {
      return err.response;
    });
};

export const getQuizData = () => {
  const requestParameters = {
    method: 'GET',
    url: `/api/quizdata`
  };
  return restApi.request(requestParameters)
    .then(response => response)
    .catch((err) => {
      return err.response;
    });
};