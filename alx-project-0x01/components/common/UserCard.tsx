// components/common/UserCard.tsx

import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-700">@{user.username}</p>
      <p className="text-gray-700">{user.email}</p>
      <p className="text-sm text-gray-500 mt-2">
        {user.address.street}, {user.address.city}
      </p>
      <p className="text-sm text-gray-500">{user.phone}</p>
      <p className="text-sm text-blue-500">{user.website}</p>
      <div className="mt-4">
        <p className="font-semibold">{user.company.name}</p>
        <p className="italic text-gray-600">{user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
