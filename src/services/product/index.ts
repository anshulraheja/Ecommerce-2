import { serviceUrl } from '../serviceUrl';
import { makeRequest } from '../serviceUtils/makeRequest';

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    makeRequest(`${serviceUrl.ecommerceUrl}products`, {}, resolve, reject, 'GET');
  });
};

export const getSingleProduct = (payload: string) => {
  return new Promise((resolve, reject) => {
    makeRequest(`${serviceUrl.ecommerceUrl}products/${payload}`, {}, resolve, reject, 'GET');
  });
};
