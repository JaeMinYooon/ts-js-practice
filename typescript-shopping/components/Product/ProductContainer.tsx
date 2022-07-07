import React, { useState } from "react";
import OrdersAPI from "../../apis/OrderAPI";
import OrderGroupAPI from "../../apis/OrderGroupAPI";
import { OrderResolver } from "../../models/Order";
import { OrderGroupResolver } from "../../models/OrderGroup";

const ProductContainer: React.FC = () => {
  const [orderGroup, setOrderGroup] = useState<OrderGroupResolver[]>([]);
  const [orders, setOrders] = useState<OrderResolver[]>([]);
  React.useEffect(() => {
    const fetchOrderGroup = async () => {
      const orderGroupModel = await OrderGroupAPI.findOrderGroup();
      setOrderGroup(orderGroupModel);
    };

    fetchOrderGroup();
  }, []);
  React.useEffect(() => {
    orderGroup.map(async (ogm) => {
      const orderModel = await OrdersAPI.findOrders(ogm.uuid);

      setOrders([orderModel, ...orders]);
    });
  }, [orderGroup]);

  return (
    <>
      {orders.map((o, i) => (
        <div key={i}>
          <img src={o.product_thumbnail} />
          <div>{o.product_name}</div>
          <div>{o.price}</div>
        </div>
      ))}
    </>
  );
};

export default ProductContainer;
