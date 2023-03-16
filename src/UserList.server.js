import { prisma } from "./db.server";

export const UserList = () => {
  const users = prisma.user.findMany();

  return users.length > 0 ? (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id} style={{ marginBottom: "1rem" }}>
          <div>
            {user.name} ({user.email})
          </div>
          <div>{user.id}</div>
        </li>
      ))}
    </ul>
  ) : (
    <div className="users-empty">{`No user exists`}</div>
  );
};
