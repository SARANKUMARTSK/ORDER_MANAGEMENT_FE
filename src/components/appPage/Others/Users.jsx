import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

import toast from "react-hot-toast";
import { API_URL } from "../../../App";
import axios from "axios";

const Users = () => {
  let token = sessionStorage.getItem("token");
  let navigate = useNavigate();

  let [user, setUser] = useState([]);

  const getUser = async () => {
    let res = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    let data = res.data.users;
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleDelete = async (userData) => {
    try {
      await axios.delete(`${API_URL}/user/delete/${userData._id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      toast.success("Deleted Successfully");
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (userData) => {
    try {
      navigate(`/dashboard/edit-user/${userData._id}`);
      console.log(userData._id);
      let data = await axios.get(`${API_URL}/user/${userData._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "User Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email ",
        size: 150,
      },
      {
        accessorKey: "role",
        header: "Role",
        size: 200,
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone Number",
        size: 200,
      },
      {
        accessorKey: "address.city",
        header: "City",
        size: 200,
      },
      {
        accessorKey: "createdAt",
        header: "Date Of Join",
        size: 200,
      },
      {
        accessorFn: (row) => (
          <EditNoteIcon onClick={() => handleEdit(row)} className="user_edit" />
        ),
        id: "edit",
        header: "Edit",
      },
      {
        accessorFn: (row) => (
          <DeleteSweepIcon
            onClick={() => handleDelete(row)}
            className="user_delete"
          />
        ),
        id: "delete",
        header: "Delete",
      },
    ],
    []
  );

  return (
    <>
      <div className="editHead">
        <h1>Users Data</h1>
        <button onClick={() => navigate("/dashboard/add-user")}>
          + Create User
        </button>
      </div>
      <MaterialReactTable
        columns={columns}
        data={user}
        enableGlobalFilterModes
        enableRowNumbers={true}
        initialState={{
          density: "compact",
          showGlobalFilter: true,
        }}
        muiSearchTextFieldProps={{
          placeholder: `Search ${user.length} rows`,
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
};

export default Users;
