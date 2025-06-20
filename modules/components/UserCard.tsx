type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  university: string;
  company: {
    title: string;
  };
};

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-white rounded shadow p-4 flex gap-4 items-center">
      <img
        src={user.image}
        alt={user.firstName}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h3 className="text-lg font-semibold">
          {user.firstName} {user.lastName}
        </h3>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm">{user.phone}</p>
        <p className="text-sm text-gray-700">{user.company.title}</p>
        <p className="text-sm italic">{user.university}</p>
      </div>
    </div>
  );
}
