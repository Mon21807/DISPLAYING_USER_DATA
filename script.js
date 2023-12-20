document.addEventListener('DOMContentLoaded', function() {
    const fetchUsersBtn = document.getElementById('fetchUsersBtn');
    const userList = document.getElementById('userList');

    fetchUsersBtn.addEventListener('click', function() {
        // Fetch user data from Reqres API
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                // Display user data on the webpage
                displayUsers(data.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    });

    function displayUsers(users) {
        userList.innerHTML = '';

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.alt = 'User Avatar';
            avatar.classList.add('user-avatar');

            const userInfo = document.createElement('div');
            userInfo.classList.add('user-info');

            const userName = document.createElement('div');
            userName.classList.add('user-name');
            userName.textContent = `${user.first_name} ${user.last_name}`;

            const userEmail = document.createElement('div');
            userEmail.classList.add('user-email');
            userEmail.textContent = user.email;

            userInfo.appendChild(userName);
            userInfo.appendChild(userEmail);

            userCard.appendChild(avatar);
            userCard.appendChild(userInfo);

            userList.appendChild(userCard);
        });
    }
});
