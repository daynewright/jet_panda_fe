import { API_ROOT_URL } from '../utils/constants';

export const fetchEbay = ({ search }) => {
  fetch(`${API_ROOT_URL}/ebay?search=${search}`)
  .then(res => res.json())
  .then(
    (result) => {
      return result;
    },
    (error) => {
      return error;
    }
  )
};

export const fetchOfferUp = ({ search }) => {
  fetch(`${API_ROOT_URL}/offerup?search=${search}`)
  .then(res => res.json())
  .then(
    (result) => {
      return result;
    },
    (error) => {
      return error;
    }
  )
};


export const fetchVarageSale = ({ search }) => {
  fetch(`${API_ROOT_URL}/varagesale?search=${search}`)
  .then(res => res.json())
  .then(
    (result) => {
      return result;
    },
    (error) => {
      return error;
    }
  )
};

export const fetchFacebook = search => {
  fetch(`${API_ROOT_URL}/facebook?search=${search}`)
  .then(res => res.json())
  .then(
    (result) => {
      return result;
    },
    (error) => {
      return error;
    }
  )
};

export const fetchAll = search => fetch(`${API_ROOT_URL}/all?search=${search}`).then(res => res.json());
