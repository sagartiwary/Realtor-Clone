import React, { useState } from "react";
export const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedroom: 1,
    bath: 1,
    parking: false,
    furnish: false,
    address: "",
    description: "",
    offer: true,
    regular: 0,
    discount: 0,
  });

  const handleChange = (e) => {};

  const handleClick = () => {};
  const {
    type,
    name,
    bedroom,
    bath,
    parking,
    furnish,
    address,
    description,
    offer,
    regular,
    discount,
  } = formData;
  return (
    <main className="max-w-md mx-auto px-6">
      <h1 className="text-center text-3xl font-bold mt-6 mb-6">
        Create Listing
      </h1>
      <form>
        <p className="text-lg font-semibold">Sale/Rent</p>
        <div className="flex items-center justify-center mb-6">
          <button
            id="type"
            value={"sell"}
            onClick={handleChange}
            className={`uppercase text-md p-2 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg duration-150 w-full ${
              type == "rent" ? "bg-slate-600 text-white" : "bg-white text-black"
            } mr-3 rounded`}
          >
            Sell
          </button>
          <button
            id="type"
            value={"rent"}
            onClick={handleChange}
            className={`uppercase text-md p-2 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg duration-150 w-full ${
              type == "sale" ? "bg-slate-600 text-white" : "bg-white text-black"
            } ml-3 rounded`}
          >
            Rent
          </button>
        </div>

        <p className="font-semibold text-lg">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          className="px-4 py-2 w-full bg-white border border-gray-300 text-gray-700 duration-150 ease-in-out focus:text-gray-700 active:text-gray-700 rounded hover:bg-white active:bg-white focus:bg-white mb-6"
          placeholder="Name"
          maxLength={"32"}
          minLength={"10"}
          required
        />

        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedroom"
              value={bedroom}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 hover:bg-white focus:bg-white
                text-center text-gray-600 active:bg-white "
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bath"
              value={bath}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 hover:bg-white focus:bg-white
                text-center text-gray-600 active:bg-white "
            />
          </div>
        </div>
        <p className="text-lg font-semibold">Parking Slot</p>
        <div className="flex items-center justify-center mb-6">
          <button
            id="parking"
            value={true}
            className={`uppercase text-md p-2 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg duration-150 w-full ${
              parking ? "bg-slate-600 text-white" : "bg-white text-black"
            } mr-3 rounded`}
          >
            Yes
          </button>
          <button
            id="parking"
            value={false}
            onClick={handleClick}
            className={`uppercase text-md p-2 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg duration-150 w-full ${
              !parking ? "bg-slate-600 text-white" : "bg-white text-black"
            } ml-3 rounded`}
          >
            No
          </button>
        </div>
        <p className="text-lg font-semibold">Furnished</p>
        <div className="flex items-center justify-center mb-6">
          <button
            id="furnish"
            value={true}
            onClick={handleChange}
            className={`uppercase text-md p-2 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg duration-150 w-full ${
              furnish ? "bg-slate-600 text-white" : "bg-white text-black"
            } mr-3 rounded`}
          >
            Yes
          </button>
          <button
            id="furnish"
            value={false}
            onClick={handleChange}
            className={`uppercase text-md p-2 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg duration-150 w-full ${
              !furnish ? "bg-slate-600 text-white" : "bg-white text-black"
            } ml-3 rounded`}
          >
            No
          </button>
        </div>

        <p className="font-semibold text-lg">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={handleChange}
          className="px-4 py-2 w-full bg-white border border-gray-300 text-gray-700 duration-150 ease-in-out focus:text-gray-700 active:text-gray-700 rounded hover:bg-white active:bg-white focus:bg-white mb-6"
          placeholder="Address"
          required
        />
        <p className="font-semibold text-lg">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={handleChange}
          className="px-4 py-2 w-full bg-white border border-gray-300 text-gray-700 duration-150 ease-in-out focus:text-gray-700 active:text-gray-700 rounded hover:bg-white active:bg-white focus:bg-white mb-6"
          placeholder="Description"
          required
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex items-center justify-center mb-6">
          <button
            id="offer"
            value={true}
            className={`uppercase text-md p-2 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg duration-150 w-full ${
              offer ? "bg-slate-600 text-white" : "bg-white text-black"
            } mr-3 rounded`}
          >
            Yes
          </button>
          <button
            id="offer"
            value={false}
            onClick={handleClick}
            className={`uppercase text-md p-2 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg duration-150 w-full ${
              !offer ? "bg-slate-600 text-white" : "bg-white text-black"
            } ml-3 rounded`}
          >
            No
          </button>
        </div>

        <div className="mb-6 flex">
          <div className="">
            <p className="text-lg font-semibold">Regular Price</p>
            <div className=" flex items-center space-x-6">
              <input
                type="number"
                id="regular"
                value={regular}
                onChange={handleChange}
                min={"50"}
                max={"400000"}
                required
                className="w-full px-4 py-2 text-lg text-gray-500 bg-white  rounded transition duration-150 ease-in-out focus:text-gray-800 focus:bg-white text-center focus: border-slate-600 "
              />
              {type === "rent" && (
                <div>
                  <p className="text-sm font-semibold w-full whitespace-nowrap">
                    $/Month
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {offer && (
          <div className="mb-6 flex">
            <div className="">
              <p className="text-lg font-semibold">Discount Price</p>
              <div className=" flex items-center space-x-6">
                <input
                  type="number"
                  id="discount"
                  value={discount}
                  onChange={handleChange}
                  min={"50"}
                  max={"400000"}
                  required={offer}
                  className="w-full px-4 py-2 text-lg text-gray-500 bg-white  rounded transition duration-150 ease-in-out focus:text-gray-800 focus:bg-white text-center focus: border-slate-600 "
                />
                {type === "rent" && (
                  <div>
                    <p className="text-sm font-semibold w-full whitespace-nowrap">
                      $/Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out hover:bg-white focus:border-slate-600"
            type="file"
            id="images"
            onChange={handleChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
          />
        </div>
        <button className="mb-6 bg-blue-500 w-full px-7 py-3 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="submit">Create Listing</button>
      </form>
    </main>
  );
};
