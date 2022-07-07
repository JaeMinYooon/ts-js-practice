import React, { useState } from "react";
import OrderGroupAPI from "../../apis/OrderGroupAPI";
import { OrderGroupResolver } from "../../models/OrderGroup";

const UserContainer: React.FC = () => {
  const [orderGroup, setOrderGroup] = useState<OrderGroupResolver[]>([]);
  const [cancelOrder, setCancelOrder] = useState<number>(0);
  React.useEffect(() => {
    const fetchOrderGroup = async () => {
      const orderGroupModel = await OrderGroupAPI.findOrderGroup();
      const cancelOrderModel = await OrderGroupAPI.findCancelledOrderGroup();

      setOrderGroup(orderGroupModel);
      setCancelOrder(cancelOrderModel);
    };
    fetchOrderGroup();
  }, []);
  return (
    <>
      {orderGroup.length !== 0 && <div>{orderGroup[0].user_name}님</div>}
      <div>주문내역 {orderGroup.length - cancelOrder}개</div>

      <div>취소내역 {cancelOrder}개</div>
    </>
  );
};

export default UserContainer;
