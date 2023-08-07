import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    // Khởi tạo state để lưu trữ dữ liệu form
    this.state = {
      studentId: "",
      studentName: "",
      password: "",
      gender: "",
      age: "",
      address: "",
    };
  }
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
      studentId: this.state.studentId,
      studentName: this.state.studentName,
      password: this.state.password,
      gender: this.state.gender,
      age: this.state.age,
      address: this.state.address,
    };
    console.log(formData);
    // Cập nhật lại state và xóa dữ liệu trong form

    this.setState({
      studentId: "",
      studentName: "",
      password: "",
      gender: "",
      age: "",
      address: "",
    });
  };

  render() {
    return (
      <div>
        <form action="">
          <div>
            {/* Name submit lên server còn id submit ở phía client */}
            {/* input chịu 2 sự kiện là onchange và onsubmit */}
            StudentID:{" "}
            <input
              type="text"
              name="studentId"
              id="studentId"
              value={this.state.studentId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Student Name:{" "}
            <input
              type="text"
              name="studentName"
              id="studentName"
              value={this.state.studentName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Password:{" "}
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Gender: Nam:{" "}
            <input
              type="radio"
              name="gender"
              id="male"
              value={"nam"}
              onChange={this.handleChange}
            />{" "}
            Nữ: <input type="radio" name="gender" id="female" value={"nữ"} />
          </div>
          <div>
            Age:{" "}
            <input
              type="Number"
              name="age"
              id="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Address:{" "}
            <select
              name="address"
              id="address"
              value={this.state.address}
              onChange={this.handleChange}
            >
              <option value="HN">Hà Lội</option>
              <option value="DN">Đà Nẵng</option>
              <option value="HCM">Hồ Chí Minh</option>
            </select>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
