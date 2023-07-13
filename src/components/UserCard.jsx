import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCard = () => {
  const [nid, setNid] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    if (localStorage.nid) {
      setNid(localStorage.nid);
      fetchUserInfo();
    }
  }, []);

  const fetchUserInfo = async () => {
    console.log(nid);
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const user = await axios.get(
        `https://vaccine-app-server-kilfewcikq-uc.a.run.app/api/user/get-user/${nid}`,
        config
      );

      console.log(user.data);

      if (user.data.success) {
        setUserInfo(user.data.user);
      }
    } catch (error) {}
  };

  return (
    <div className="min-h-screen py-3 flex items-center justify-center px-4 bg-indigo-100">
      <div className="max-w-4xl  bg-white w-full rounded-xl shadow-xl  border border-indigo-300">
        <div className="p-4 border-b">
          <h2 className="text-2xl ">User Information</h2>
        </div>
        <div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Full name</p>
            <p>{userInfo ? userInfo.name : "John doe"}</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">NID</p>
            <p>{nid}</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Address</p>
            <p>{userInfo ? userInfo.address : "Not Found!"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
