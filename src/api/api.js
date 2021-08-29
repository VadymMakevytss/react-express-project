export const publishUsers = async() => {
  try {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error('Couls not fetch data for that resurs.....');
    }
    const users = await response.json();
    return users.data || users;
  } catch (error) {
    throw new Error('Server error');
  }
}
