import React from "react";

const VaccineCard = ({
  vaccine_name,
  vaccine_date,
  hospital_name,
  doses_taken,
}) => {
  return (
    <div class="lg:grid">
      <div class="flex flex-col justify-between">
        <div className="py-3 flex px-4">
          <div className="max-w-xl  bg-white w-full rounded-xl shadow-xl border border-indigo-300">
            <div className="p-4 border-b">
              <h2 className="text-2xl text-indigo-600">{vaccine_name}</h2>
            </div>
            <div>
              {doses_taken && (
                <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                  <p className="text-gray-600">Doses</p>
                  <p>{doses_taken}</p>
                </div>
              )}
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-600">Date</p>
                <p>{vaccine_date}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p className="text-gray-600">Administered At</p>
                <p>{hospital_name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccineCard;
