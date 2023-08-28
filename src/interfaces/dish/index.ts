import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface DishInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  ingredients: string;
  preparation_time: number;
  menu_id: string;
  created_at?: any;
  updated_at?: any;

  menu?: MenuInterface;
  _count?: {};
}

export interface DishGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  ingredients?: string;
  menu_id?: string;
}
