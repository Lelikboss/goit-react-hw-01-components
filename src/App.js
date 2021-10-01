import user from './db/user.json'; // Exercise 1
import Profile from './components/Profile/Profile'; // Exercise 1
import statisticalData from './db/statistical-data.json'; // Exercise 2
import Statistics from './components/Statistics/Statistics'; // Exercise 2
import friends from './db/friends.json'; // Exercise 3
import FriendList from './components/FriendList/FriendList'; // Exercise 3
import transactions from './db/transactions.json'; // Exercise 4
import TransactionHistory from './components/TransactionHistory/TransactionHistory'; //Exercise 4

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
