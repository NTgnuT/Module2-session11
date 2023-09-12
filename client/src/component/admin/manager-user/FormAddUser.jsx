import React, { useState } from "react";
import "./form.css";

export default function FormAddUser({ handleCloseAddUser }) {
  const [gender, setGender] = useState(0);

  const [user, setUser] = useState({
    user_name: "",
    address: "",
    dateOfBirth: "",
    email: "",
    password: "",
  });
  // Danh sách gender
  const listGender = [
    {
      id: 0,
      title: "Nam",
    },
    {
      id: 1,
      title: "Nữ",
    },
    {
      id: 2,
      title: "Khác",
    },
  ];

  return (
    <>
      <div className="container-1">
        <form className="form-container">
          <div className="d-flex align-items-center justify-content-between">
            <h3>Thêm mới tài khoản</h3>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseAddUser}
            >
              X
            </button>
          </div>
          <div className="mb-3">
            <label className="form-label">Tên</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Giới tính</label>
            <div className="d-flex gap-3">
              {listGender.map((g) => (
                <div className="form-check" key={g.id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    onChange={() => setGender(g.id)}
                    checked={g.id === gender}
                  />
                  <label className="form-check-label">{g.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Ngày sinh</label>
            <input type="date" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Địa chỉ</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Mật khẩu</label>
            <input type="text" className="form-control" />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseAddUser}
            >
              Hủy
            </button>
            <button type="submit" className="btn btn-primary">
              Lưu
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
