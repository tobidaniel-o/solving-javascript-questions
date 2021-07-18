const users = `https://jsonplaceholder.typicode.com/users`;

fetch(users)
  .then((response) => response.json())
  .then((data) => console.log(getUsers(data)))
  .catch((e) => console.log(e));

const getUsers = (users) => {
  return users
    .filter((user) => {
      if (user.name.toLowerCase().includes("k")) {
        return `${user.name}, ${user.email}`;
      }
    })
    .map(({ name, email }) => {
      return { name, email };
    });
};

