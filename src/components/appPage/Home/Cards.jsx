import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../App";

function Cards() {
  let [salesOrder, setSalesOrder] = useState([]);
  let [totalSalesOrder, setTotaSaleslOrder] = useState(0);
  let [totalPurchaseOrder, setTotaPurchaselOrder] = useState(0);
  let [purchaseOrder, setPurchaseOrder] = useState(0);
  let [newOrder, setNewOrder] = useState(0);
  let [packed, setPacked] = useState(0);
  let [shipped, setShipped] = useState(0);
  let [returned, setReturned] = useState(0);
  let [delivered, setDelivered] = useState(0);
  let [cancelled, setCancelled] = useState(0);

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    let getPurchaseOrder = async () => {
      try {
        let res = await axios.get(`${API_URL}/purchase-order`, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        let data = res.data.purchaseOrders;
        setPurchaseOrder(data);
        setTotaPurchaselOrder(data.length);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPurchaseOrder();
  }, []);

  useEffect(() => {
    let token = sessionStorage.getItem("token");

    let getSalesOrder = async () => {
      try {
        let res = await axios.get(`${API_URL}/sales-order`, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        let data = res.data.salesOrders;
        setSalesOrder(data);
        setTotaSaleslOrder(data.length);
      } catch (error) {
        console.log(error);
      }
    };
    getSalesOrder();
  }, []);

  useEffect(() => {
    if (!salesOrder) return;

    const counts = salesOrder.reduce((acc, order) => {
      const status = order.deliveryStatus;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});

    setNewOrder(counts["New Order"]);
    setPacked(counts["Packed"]);
    setShipped(counts["Shipped"]);
    setDelivered(counts["Delivered"]);
    setReturned(counts["Returned"]);
    setCancelled(counts["Cancelled"]);
  }, [salesOrder]);

  let array = [
    {
      name: "Purchase Order",
      value: totalPurchaseOrder,
    },
    {
      name: "Sales Order",
      value: totalSalesOrder,
    },
    {
      name: "New Order",
      value: newOrder,
    },
    {
      name: "Packed",
      value: packed,
    },
    {
      name: "Shipped",
      value: shipped,
    },
    {
      name: "Delivered",
      value: delivered,
    },
    {
      name: "Cancelled",
      value: cancelled,
    },
    {
      name: "Returned",
      value: returned,
    },
  ];

  return (
    <>
      <div className="row">
        {array.map((e, i) => {
          return (
            <div key={i} className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-danger shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                        {e.name}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {e.value}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
