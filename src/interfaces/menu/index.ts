import { DishInterface } from 'interfaces/dish';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  ingredients: string;
  preparation_time: number;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  dish?: DishInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    dish?: number;
  };
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  ingredients?: string;
  restaurant_id?: string;
}
