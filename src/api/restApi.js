import axios from 'axios';
import envConfig from '../server/config/config';

envConfig();
const baseURL = `${global.gConfig.API_SERVER_URL}`;

export const restApi = axios.create({
  baseURL,
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
    url: '/authenticate',
    data: {
      email,
      password: password
    }
  };
  return restApi.request(requestParameters)
    .then(response => response)
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
      return err.response;
    });
};

export const signup = (name, firstname, lastname, email, password) => {
  const requestParameters = {
    method: 'POST',
    url: '/user/signup',
    data: {
      name,
      firstname,
      lastname,
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

export const updatePro = (payload, user) => {
  const { firstname, lastname, email, emailOriginal } = payload;
  const { token } = user;
  const requestParameters = {
    method: 'PUT',
    url: '/user/profile',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      firstname,
      lastname,
      email,
      emailOriginal
    }
  };
  return restApi.request(requestParameters)
    .then(response => response)
    .catch((err) => {
      return err.response;
    });
};

export const updatePass = (payload, user) => {
  const { email, password, newPassword } = payload;
  const { token } = user;
  const requestParameters = {
    method: 'PUT',
    url: '/user/password',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      email,
      password,
      newPassword
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

export const getMyCoursesApi = ({ userId, token }) => {
  const requestParameters = {
    method: 'GET',
    url: `/courses?userId=${userId}`,
    headers: {
      Authorization: `Bearer ${token}`
    },
  };
  return restApi.request(requestParameters)
    .then(response => response)
    .catch((err) => {
      return err.response;
    });
};

export const updateUserCourseApi = (user, courseId) => {
  const { userId, token, timeSpent } = user;
  const requestParameters = {
    method: 'POST',
    url: '/updateUserCourse',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      userId,
      courseId,
      timeSpent
    }
  };
  return restApi.request(requestParameters)
    .then(response => response)
    .catch((err) => {
      return err.response;
    });
};