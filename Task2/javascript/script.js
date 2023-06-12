document.getElementById('getUsersButton').addEventListener('click', getUsers);

        function getUsers() {
            fetch('https://reqres.in/api/users?page=1')
                .then(response => response.json())
                .then(data => {
                    const users = data.data;
                    const userGrid = document.getElementById('userGrid');

                    userGrid.innerHTML = '';

                    users.forEach(user => {
                        const userCard = document.createElement('div');
                        userCard.classList.add('user-card');

                        const userImage = document.createElement('img');
                        userImage.src = user.avatar;
                        userImage.alt = user.first_name;

                        const userName = document.createElement('h2');
                        userName.textContent = `${user.first_name} ${user.last_name}`;

                        const userEmail = document.createElement('p');
                        userEmail.classList.add('email');
                        userEmail.textContent = user.email;

                        const userOccupation = document.createElement('p');
                        // userOccupation.textContent = 'Occupation';

                        userCard.appendChild(userImage);
                        userCard.appendChild(userName);
                        userCard.appendChild(userEmail);
                        userCard.appendChild(userOccupation);

                        userGrid.appendChild(userCard);
                    });
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
