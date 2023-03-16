import { prisma } from "./db.server";

export const UserList = () => {
  const users = prisma.user.findMany();

  return users.length > 0 ? (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.id})
        </li>
      ))}
    </ul>
  ) : (
    <div className="users-empty">{`No user exists`}</div>
  );
};
