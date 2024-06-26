"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateGovernance() {
  const [communityName, setCommunityName] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setCommunityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (communityName.trim()) {
      router.push(`/${communityName}`);
    } else {
      alert("Community name is required");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 sm:p-8">
      <h2 className="text-2xl text-center font-bold mb-4">
        Create Governance Page
        <span className="block text-sm text-gray-500 py-4">
          Project is still under production lease Launch Demo Below
        </span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="communityName"
          >
            Community Name
          </label>
          <input
            id="communityName"
            name="communityName"
            type="text"
            required
            value={communityName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter community name"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
