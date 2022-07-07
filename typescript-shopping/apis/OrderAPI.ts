import axios from "axios";
import { OrderResolver } from "../models/Order";

const PREFIX = process.env.NEXT_PUBLIC_SNACK_FOR_API_ENDPOINT;

export default class OrdersAPI {
  private static readonly apiEndPoints = {
    GET_ORDERS: `${PREFIX}/orders`,
  };

  public static findOrders = async (uuid: string): Promise<OrderResolver> => {
    try {
      const response = await axios.get(`${OrdersAPI.apiEndPoints.GET_ORDERS}`, {
        params: {
          order_group__in: uuid,
        },
      });
      if (response.data.results.length === 0) {
        throw new Error(`not found`);
      }
      return response.data.results[0];
    } catch (error) {
      throw error;
    }
  };
}
