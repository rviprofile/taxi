import { Car } from 'types/car';

export interface CarsData {
  list: Car[];
  page: number;
  pageTotal: number;
  total: string;
}
