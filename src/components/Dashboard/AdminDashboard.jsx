import React from "react";
import Header from "../others/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-screen p-10">
      <Header />
      <div>
        <form className="flex  flex-wrap w-full  bg-red-200 items-start justify-between" action="">
          <div className="w-1/2">
            <div>
              <h3>Task Title</h3>
              <input
                type="text"
                placeholder="what you want..."
              />
            </div>
             <div>
            <h3>Date</h3>
            <input type="date" />
          </div>
          <div>
            <h3>Assign to</h3>
            <input type="text" placeholder="employee name" />
          </div>
          <div>
            <h3>cataegory</h3>
            <input type="text" placeholder="design, dev, etc" />
          </div>
          </div>

          <div className="w-1/2">
            <h1>Description</h1>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
         
          <button>Create task</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
