import { memo } from 'react';

export default memo(function UserCard({ user }) {
  return (
    <>
      <div className="user-card">
        <h3 className="text-lg font-bold">
          {user.id}. {user.name}
        </h3>
        <p>
          <span className="font-semibold">E-mail: </span>
          {user.email}
        </p>
        <p>
          <span className="font-semibold">City: </span>
          {user.address.city}
        </p>
      </div>
    </>
  );
});
