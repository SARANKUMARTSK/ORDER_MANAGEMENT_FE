import React from "react";
import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { API_URL } from "../../../App";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function PurchaseOrder() {
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");


  let getData = async () => {
    try {
      let res = await axios.get(`${API_URL}/purchase-order`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      let data = res.data.purchaseOrders;
      setPurchaseOrder(data);
   
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
     
      getData();

  }, []);


  let [purchaseOrder, setPurchaseOrder] = useState([]);
 

  const handleCreate = () => {
    let role = sessionStorage.getItem("role")
    if (role==="admin") {
      navigate("/dashboard/add-purchase-order");
    } else {
      toast.error("Permisson Denied")
    }
    
  };
  const handleView = async (data) => {
    try {
      let res = await axios.get(`${API_URL}/purchase-order/${data._id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      navigate(`/dashboard/view-purchase-order/${data._id}`);
    
    } catch (error) {
      console.log(error);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.productId, 
        id: "productId", 
        header: "Product ID",
      },
      {
        accessorFn: (row) => row.productName, 
        id: "productName", 
        header: "Product Name",
      },
      {
        accessorFn: (row) => row.productQty, 
        id: "productQty", 
        header: "Product Qty",
      },

      {
        accessorFn: (row) => row.name, 
        id: "name", 
        header: "Supplier Name",
      },
      {
        accessorFn: (row) => row.phoneNumber, 
        id: "phoneNumber", 
        header: "Phone Number",
      },
      {
        accessorFn: (row) => row.email, 
        id: "email", 
        header: "Email",
      },

      {
        accessorFn: (row) => row.address.city, 
        id: "city", 
        header: "City",
      },
      {
        accessorFn: (row) => (
          <FontAwesomeIcon
            onClick={() => handleView(row)}
            className="eyeIcon"
            icon={faEye}
          />
        ), 
        id: "faKey", 
        header: "Action",
      },
    ],
    []
  );

  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
  }, [rowSelection]);

  const someEventHandler = () => {
    console.log(table.getState().sorting);
  };

  return (
    <>
      <div className="table">
        <div>
          <h1>Purchase Orders</h1>
          <button onClick={() => handleCreate()}>+ Create Order</button>
        </div>
      </div>
      <MaterialReactTable
        columns={columns}
        data={purchaseOrder}
        enableGlobalFilterModes
        enableRowNumbers={true}
        initialState={{
          density: "compact",
          showGlobalFilter: true,
        }}
        muiSearchTextFieldProps={{
          placeholder: `Search ${purchaseOrder.length} rows`,
          sx: { minWidth: "300px" },
          variant: "outlined",
        }}
        muiPaginationProps={{
          showRowsPerPage: true,
          shape: "rounded",
        }}
        paginationDisplayMode="pages"
        defaultColumn={{
          minSize: 20,
          maxSize: 9,
          size: 180,
        }}
      />
    </>
  );
}

export default PurchaseOrder;
