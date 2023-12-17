import React from "react";

export default function UserCard({
  firstName,
  phoneNumber,
  age,
  address,
  image,
  lastName,
}) {
  return (
    <div className="user">
      <div>
        <img src={image} alt="" />
      </div>
      <h2>
        {firstName} {lastName}
      </h2>
      <div>Address: {address}</div>
      <div>Phone: {phoneNumber}</div>
      <div>Age: {age}</div>
    </div>
  );
}

// תמונה
// שם
// כתובת
// טלפון
// גיל
