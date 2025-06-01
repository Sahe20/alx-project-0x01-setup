import React from "react";
import { UserData } from "@/interfaces";

interface UserCardProps {
  user: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="p-6 w-80 bg-white rounded-xl shadow-md border">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`https://${user.website}`} className="text-blue-600 underline" target="_blank" rel="noreferrer">{user.website}</a></p>
      <div className="mt-2 text-sm text-gray-600">
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>City:</strong> {user.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
