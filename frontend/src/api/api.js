export const fetchData = async () => {
  const response = await fetch(`http://localhost:5000/api`, { method: 'GET' });

  return await response.json();
};
