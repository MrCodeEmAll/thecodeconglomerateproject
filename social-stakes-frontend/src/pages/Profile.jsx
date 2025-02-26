import { useState } from "react";

const Profile = () => {
  const [friendRequests] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Sarah Smith" },
  ]);

  const [friends] = useState([
    { id: 3, name: "Alex Johnson" },
    { id: 4, name: "Jordan Lee" },
  ]);

  const [bettingGroups] = useState([
    { id: 1, name: "High Roller Club", members: 12 },
    { id: 2, name: "Crypto Betting Squad", members: 8 },
  ]);

  const [achievements] = useState([
    { id: 1, title: "First Bet Placed", icon: "🏆" },
    { id: 2, title: "Won 10 Bets", icon: "🎉" },
  ]);

  const [activityFeed] = useState([
    { id: 1, text: "You won a bet against Jordan Lee ($50)" },
    { id: 2, text: "Alex Johnson joined the 'High Roller Club'" },
    { id: 3, text: "You lost a bet against Sarah Smith ($20)" },
  ]);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Profile</h2>

      {/* Friend Requests */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Friend Requests</h3>
        {friendRequests.length > 0 ? (
          <ul>
            {friendRequests.map((request) => (
              <li key={request.id} className="py-2 border-b flex justify-between">
                <span>{request.name}</span>
                <div>
                  <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">Accept</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">Decline</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No friend requests</p>
        )}
      </div>

      {/* Friends List */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Friends</h3>
        {friends.length > 0 ? (
          <ul>
            {friends.map((friend) => (
              <li key={friend.id} className="py-2 border-b">{friend.name}</li>
            ))}
          </ul>
        ) : (
          <p>No friends added</p>
        )}
      </div>

      {/* Betting Groups */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Betting Groups</h3>
        {bettingGroups.length > 0 ? (
          <ul>
            {bettingGroups.map((group) => (
              <li key={group.id} className="py-2 border-b">
                {group.name} - <span className="font-bold">{group.members} members</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No betting groups</p>
        )}
      </div>

      {/* Achievements */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Achievements</h3>
        {achievements.length > 0 ? (
          <ul className="flex gap-4">
            {achievements.map((achieve) => (
              <li key={achieve.id} className="flex flex-col items-center">
                <span className="text-3xl">{achieve.icon}</span>
                <p>{achieve.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No achievements unlocked yet</p>
        )}
      </div>

      {/* Betting Activity Feed */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Betting Activity</h3>
        {activityFeed.length > 0 ? (
          <ul>
            {activityFeed.map((activity) => (
              <li key={activity.id} className="py-2 border-b">{activity.text}</li>
            ))}
          </ul>
        ) : (
          <p>No recent activity</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
