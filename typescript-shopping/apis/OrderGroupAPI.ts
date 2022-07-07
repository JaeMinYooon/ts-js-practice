import axios from "axios";
import { OrderGroupResolver } from "../models/OrderGroup";

const PREFIX = process.env.NEXT_PUBLIC_SNACK_FOR_API_ENDPOINT;

export default class OrderGroupAPI {
  private static readonly apiEndPoints = {
    GET_ORDER_GROUPS: `${PREFIX}/order-groups`,
  };

  public static findOrderGroup = async (): Promise<OrderGroupResolver[]> => {
    try {
      const response = await axios.get(
        `${OrderGroupAPI.apiEndPoints.GET_ORDER_GROUPS}`
        //`https://coding-test.snackfor.com/order-groups`
      );
      if (response.data.results.length === 0) {
        throw new Error(`not found`);
      }
      return response.data.results;
    } catch (error) {
      throw error;
    }
  };
  public static findCancelledOrderGroup = async (): Promise<number> => {
    try {
      const response = await axios.get(
        `${OrderGroupAPI.apiEndPoints.GET_ORDER_GROUPS}`,
        {
          params: {
            status: "CANCELLED",
          },
        }
      );
      if (response.data.results.length === 0) {
        throw new Error(`not found`);
      }
      return response.data.results.length;
    } catch (error) {
      throw error;
    }
  };
}
