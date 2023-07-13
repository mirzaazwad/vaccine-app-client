import React from "react";

const UserCard = () => {
  const [nid, setNid] = useState("");
  useEffect(() => {
    if (localStorage.nid) {
      setNid(localStorage.nid);
    }
  }, [])

  const fetchUserInfo = async () => {
    try {

    } catch (error) {

    }

  }


  return (
    <div className="min-h-screen py-3 flex items-center justify-center px-4 bg-indigo-100">
      <div className="max-w-4xl  bg-white w-full rounded-xl shadow-xl  border border-indigo-300">
        <div className="p-4 border-b">
          <h2 className="text-2xl ">User Information</h2>
        </div>
        <div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Full name</p>
            <p>Jane Doe</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">NID</p>
            <p>Product Manager</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Vaccine Dose Completed</p>
            <p>Janedoe@gmail.com</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Next Vaccine Due</p>
            <p>$ 12000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
