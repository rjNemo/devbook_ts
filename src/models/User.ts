interface User {
  displayName: string;
  email: string;
  avatarUrl: string;
  createdAt: Date;
}

/** User constructor */
export const newUser = (
  displayName: string,
  email: string,
  avatarUrl: string = '',
): User => ({
  displayName,
  email,
  avatarUrl,
  createdAt: new Date(),
});

export default User;
