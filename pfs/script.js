// Sample user data
const users = [
    { id: 1, name: "Alice", activities: ["Joined a new group", "Commented on a post", "Liked a photo"] },
    { id: 2, name: "Bob", activities: ["Started following you", "Wrote a blog post", "Updated profile picture"] },
    { id: 3, name: "Charlie", activities: ["Shared a video", "Left a comment", "Joined a discussion"] },
    { id: 4, name: "Diana", activities: ["Added a new friend", "Posted a status", "Reacted to a post"] },
];

function displayUsers(userList) {
    const userProfilesContainer = document.getElementById("userProfiles");
    userProfilesContainer.innerHTML = '';
    userList.forEach(user => {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';
        profileDiv.innerText = user.name;
        profileDiv.addEventListener('click', () => displayUserProfile(user));
        userProfilesContainer.appendChild(profileDiv);
    });
}

function displayUserProfile(user) {
    const selectedProfile = document.getElementById("selectedProfile");
    selectedProfile.innerHTML = `<h2>${user.name}'s Activities</h2>
        <ul>${user.activities.map(activity => `<li>${activity}</li>`).join('')}</ul>`;
}

document.getElementById('search').addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchText));
    displayUsers(filteredUsers);
});

// Display all users initially
displayUsers(users);
