const createButton = document.querySelector('.btn');
const usersJson = document.querySelector('.usersJson');
const allUsers = document.querySelector('.allUsers');
const usersTitle = document.querySelector('.usersTitle');
const closeModal = document.querySelector('.close');

const Users = [];

const closeUserModal = (index) => {
  const user = Users.splice(index, 1);
  console.log(user);
  return user;
}

const createUser = () => {
  const Name = document.querySelector('.name').value;
  const username = document.querySelector('.username').value;
  const email = document.querySelector('.email').value;
  const dob = document.querySelector('.dob').value;

  const resetInputs = () => {
    document.querySelector('.name').value = '';
    document.querySelector('.username').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.dob').value = '';
  }

  if(email && username && dob) {
    const User = {
      Name,
      username,
      email,
      dob,
      id: Users.length + 1,
    }

    Users.push(User);

    usersJson.innerHTML = Users.map(user => `
      <ul>
        <li class='title'>${user.Name}</li>
        <li> <span>Email:</span> ${user.email}</li>
        <li> <span>Username:</span> ${user.username}</li>
        <li class='date'> ${user.dob} </li>
        <li class='close'>-</li>
        <li class='edit'>+</li>
      </ul>
    `);

    allUsers.textContent = Users.length;

    if(Users.length > 1) {
      usersTitle.textContent = 'Users'
    } 

    resetInputs();
    alert('Your account was created! Enjoy it.')
    console.log(Users);
  } else {
    alert('Sorry, something is wrong!');
  }
};


createButton.addEventListener('click', createUser);