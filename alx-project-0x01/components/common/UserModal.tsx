// components/common/UserModal.tsx
import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState<Omit<UserData, 'id'>>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [field]: value,
        },
      });
    } else if (name.includes("geo.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          geo: {
            ...formData.address.geo,
            [field]: value,
          },
        },
      });
    } else if (name.includes("company.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        company: {
          ...formData.company,
          [field]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    const newUser: UserData = {
      id: Math.floor(Math.random() * 10000), // temporary ID
      ...formData,
    };
    onAddUser(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <div className="grid grid-cols-2 gap-4">
          <input name="name" placeholder="Name" onChange={handleChange} className="border p-2" />
          <input name="username" placeholder="Username" onChange={handleChange} className="border p-2" />
          <input name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
          <input name="address.street" placeholder="Street" onChange={handleChange} className="border p-2" />
          <input name="address.suite" placeholder="Suite" onChange={handleChange} className="border p-2" />
          <input name="address.city" placeholder="City" onChange={handleChange} className="border p-2" />
          <input name="address.zipcode" placeholder="Zipcode" onChange={handleChange} className="border p-2" />
          <input name="geo.lat" placeholder="Lat" onChange={handleChange} className="border p-2" />
          <input name="geo.lng" placeholder="Lng" onChange={handleChange} className="border p-2" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2" />
          <input name="website" placeholder="Website" onChange={handleChange} className="border p-2" />
          <input name="company.name" placeholder="Company Name" onChange={handleChange} className="border p-2" />
          <input name="company.catchPhrase" placeholder="Catch Phrase" onChange={handleChange} className="border p-2" />
          <input name="company.bs" placeholder="BS" onChange={handleChange} className="border p-2" />
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
