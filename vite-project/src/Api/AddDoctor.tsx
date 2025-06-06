
import axios from 'axios';
import type { PersonForm } from '../TypeModel/Types';

export const AddDoctor = async (person: PersonForm) => {
  const response = await axios.post('/api/people', person);
  return response.data;
};