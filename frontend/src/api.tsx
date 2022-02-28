import axios from 'axios';
import environment from './environment/environment';

const api = axios.create({
  baseURL: environment.api,
});

export const uploadImage = (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  return api.post<{ image: string }>('/images', formData);
};
