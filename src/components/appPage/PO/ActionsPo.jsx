import React from "react";
import { useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye,faTrashCanArrowUp,faFilePen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../../../App";
import toast from "react-hot-toast";

function ActionsPo() {

  const navigate = useNavigate();
  let [purchaseOrder, setPurchaseOrder] = useState([]);
  let token = sessionStorage.getItem("token");

  const handleView = async (data) => {
    try {
      let res = await axios.get(`${API_URL}/purchase-order/${data._id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      navigate(`/dashboard/view-purchase-order/${data._id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (data) => {
    try {
      navigate(`/dashboard/edit-purchase-order/${data._id}`);
      let res = await axios.get(`${API_URL}/purchase-order/${data._id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (data) => {
    try {
      let res = await axios.delete(
        `${API_URL}/purchase-order/delete-purchase-order/${data._id}`, {
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
      let res = await axios.get(`${API_URL}/purchase-order`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      let data = res.data.purchaseOrders;
      setPurchaseOrder(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);



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
        accessorFn: (row) => (
          <FontAwesomeIcon
            onClick={() => handleView(row)}
            className="eyeIcon"
            icon={faEye}
          />
        ), 
        id: "view", 
        header: "View",
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
    navigate("/dashboard/add-purchase-order");
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

export default ActionsPo;
