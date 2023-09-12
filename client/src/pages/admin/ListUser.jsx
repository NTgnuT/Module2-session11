import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import FormAddUser from "../../component/admin/manager-user/FormAddUser";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);

  // Gọi API lấy thông tin tất cả user
  const loadData = () => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  // Hàm xóa thông tin user
  const handleDelete = (id) => {
    // Gọi API
    axios
      .delete(`http://localhost:8000/users/${id}`)
      .then((response) => {
        if (response.status === 200) {
          notification.success({
            message: "Thành công",
            description: "Xóa dữ liệu người dùng thành công",
          });
          loadData();
        }
      })
      .catch((error) => console.log(error));
  };

  // Hiển thị form thêm mới
  const handleAddUser = () => {
    setShowAddUser(true);
  };

  // Đóng form thêm mới
  const handleCloseAddUser = () => {
    setShowAddUser(false);
  };

  return (
    <>
      {/* Form thêm mới user */}
      {showAddUser && <FormAddUser handleCloseAddUser={handleCloseAddUser} />}

      <div>
        <button className="btn btn-info" onClick={handleAddUser}>
          Thêm mới tài khoản
        </button>
        <table className="table table-bordered table-hover table-striper">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
              <th>Email</th>
              <th colSpan={2}>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.user_name}</td>
                <td>{user.gender === 0 ? "Nam" : "Nữ"}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-warning">Sửa</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
