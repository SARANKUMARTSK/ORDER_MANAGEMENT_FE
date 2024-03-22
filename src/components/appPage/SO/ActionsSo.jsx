import React from "react";
import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrashCanArrowUp,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

import { API_URL } from "../../../App";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ActionsSo() {

  let token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleView = async (data) => {
    try {
      let res = await axios.get(`${API_URL}/sales-order/${data._id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      navigate(`/dashboard/view-sales-order/${data._id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (data) => {
    try {
      navigate(`/dashboard/edit-sales-order/${data._id}`);
      let res = await axios.get(`${API_URL}/sales-order/${data._id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (data) => {
    try {
      let res = await axios.delete(
        `${API_URL}/sales-order/delete-sales-order/${data._id}`, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        }
      );
      toast.success(res.data.message||"Deleted Successfull")
      getData();

    } catch (error) {
      console.log(error);
    }
  };

  let getData = async () => {
    try {
      let res = await axios.get(`${API_URL}/sales-order`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      let data = res.data.salesOrders;
      setSalesOrder(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    
    getData();
  }, []);

  let [salesOrder, setSalesOrder] = useState([]);
  

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
        accessorFn: (row) => row.trackingCode, 
        id: "trackingCode",
        header: "Tracking Code",
      },
      {
        accessorFn: (row) => row.deliveryStatus, 
        id: "deliveryStatus",
        header: "Status",
      },
      {
        accessorFn: (row) => row.courierType, 
        id: "courierType",
        header: "Service",
      },

      {
        accessorFn: (row) => row.name, 
        id: "name",
        header: "Customer Name",
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
      {
        accessorFn: (row) => (
          <FontAwesomeIcon
            onClick={() => handleEdit(row)}
            className="editIcon"
            icon={faFilePen}
          />
        ), 
        id: "edit",
        header: "Edit",
      },
      {
        accessorFn: (row) => (
          <FontAwesomeIcon
            onClick={() => handleDelete(row)}
            className="deleteIcon"
            icon={faTrashCanArrowUp}
          />
        ), 
        id: "delete",
        header: "Delete",
      },
    ],
    []
  );

  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
  }, [rowSelection]);

 
  const handleCreate = () => {
    navigate("/dashboard/add-sales-order");
  };

  return (
    <>
      <div className="table">
        <div>
          <h1>Sales Orders</h1>
          <button onClick={() => handleCreate()}>+ Create Order</button>
        </div>
      </div>
      <MaterialReactTable
        columns={columns}
        data={salesOrder}
        enableGlobalFilterModes
        enableRowNumbers={true}
        initialState={{
          density: "compact",
          showGlobalFilter: true,
        }}
        muiSearchTextFieldProps={{
          placeholder: `Search ${salesOrder.length} rows`,
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

export default ActionsSo;
