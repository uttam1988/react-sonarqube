import React from "react";

export const Select = ({
  label,
  options = [],
  selectedvalue,
  handleChange,
  name
}) => (
  <div className="select">
    {label} :
    <select
      value={selectedvalue}
      onChange={event => handleChange(event.target.value, name)}
    >
      <option value="" disabled />
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export const Button = ({ onRequest, name }) => (
  <button onClick={() => onRequest()}>{name}</button>
);

export const HeaderSection = ({
  departments = [],
  department,
  handleChange,
  users = { ids: [] },
  getUserDetails,
  userId,
  clearUserDetails
}) => (
  <div className="headerSection">
    <Select
      label="Departments"
      options={departments}
      selectedvalue={department}
      handleChange={handleChange}
      name="department"
    />
    <Select
      label="Employee Id"
      options={users.ids.filter(id =>
        department === "" ? id : department === "HR" ? id < 6 : id > 5
      )}
      selectedvalue={userId}
      handleChange={handleChange}
      name="userId"
    />
    <Button
      onRequest={() => userId && department && getUserDetails(userId)}
      name={"Get Details"}
    />
    <Button onRequest={() => clearUserDetails(null)} name={"Clear"} />
  </div>
);
