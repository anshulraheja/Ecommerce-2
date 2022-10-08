import axios from 'axios';
import handleError from './handleError';
import { COMMON_ERROR, WARNING } from './serviceConstant';

declare let process: {
  env: {
    API_URL: string;
    nodeEnv: string;
  };
};

export const transformConfig = (data: any[]) => {
  const response = typeof data === 'string' ? JSON.parse(data) : data;
  return response?.data;
};
export const token = localStorage.getItem('access_token');

export const getHeaders = () => {
  return {
    headers: {
      Accept: 'application/json',
      'content-Type': 'application/json'
      // Authorization: token ? `Bearer ${token}` : ''
    }
  };
};

export const getHeadersDownload = () => {
  return {
    headers: {
      Accept: 'application/octet-stream',
      'content-Type': 'application/octet-stream',
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
};

export const getHeadersForFileUpload = () => {
  return {
    headers: {
      'content-Type': 'multipart/form-data',
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
};

export const get = (path: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${path}`, getHeaders())
      .then((response) => {
        if (response?.data?.success || response?.data || response.status == 200) {
          resolve(response?.data);
        } else {
          const error = {
            color: WARNING,
            title: response?.statusText ?? COMMON_ERROR,
            flag: true
          };
          reject(error);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const post = (path: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${path}`, data, getHeaders())
      .then((response) => {
        if (response?.data?.success || response?.data || typeof response?.data) {
          resolve(response?.data?.data);
        } else {
          const error = {
            color: WARNING,
            title: response?.data?.msg ?? COMMON_ERROR,
            flag: true
          };
          reject(error);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const postDownload = (path: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.API_URL}${path}`, data, getHeadersDownload())
      .then((response) => {
        if (response?.data) {
          resolve(response);
        } else {
          const error = {
            color: WARNING,
            title: response?.data?.msg ?? COMMON_ERROR,
            flag: true
          };
          reject(error);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });

  return new Promise((resolve, reject) => {
    fetch(`${process.env.API_URL}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/octet-stream',
        'content-Type': 'application/octet-stream'
        // Authorization: serviceUrl.authToken
      }
    })
      .then((res) => {
        resolve(res.blob());
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postFormData = (path: string, formData: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.API_URL}${path}`, formData, getHeadersForFileUpload())
      .then((response) => {
        if (response?.data?.success || response?.data || typeof response?.data) {
          resolve(response?.data?.data);
        } else {
          const error = {
            color: WARNING,
            title: response?.data?.msg ?? COMMON_ERROR,
            flag: true
          };
          reject(error);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const putFormData = (path: string, formData: any) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${process.env.API_URL}${path}`, formData, getHeadersForFileUpload())
      .then((response) => {
        if (response?.data?.success || response?.data || typeof response?.data) {
          resolve(response?.data?.data);
        } else {
          const error = {
            color: WARNING,
            title: response?.data?.msg ?? COMMON_ERROR,
            flag: true
          };
          reject(error);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const put = (path: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${path}`, data, getHeaders())
      .then((response) => {
        if (response?.data?.success || response?.data || typeof response?.data) {
          resolve(response?.data?.data);
        } else {
          const error = {
            color: WARNING,
            title: response?.data?.msg ?? COMMON_ERROR,
            flag: true
          };
          reject(error);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const deleteData = (path: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.API_URL}${path}`, getHeaders())
      .then((response) => {
        if (response?.data?.success || response?.data) {
          resolve(response?.data?.data);
        } else {
          const error = {
            color: WARNING,
            title: response?.data?.msg ?? COMMON_ERROR,
            flag: true
          };
          reject(error);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};
