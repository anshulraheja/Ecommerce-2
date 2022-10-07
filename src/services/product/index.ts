import { makeRequest } from '../serviceUtils/makeRequest';
import { serviceUrl } from '../serviceUrl';

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    makeRequest(`${serviceUrl.ecommerceUrl}products`, {}, resolve, reject, 'GET');
  });
};
