import "./App.css";
import {useMemo} from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms";

function App() {
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  // const messageCount = useRecoilValue(messagingAtom)
  // if we only need the state we use useRecoilValue but if we also need to updtate the state we need useRecoilState and parameters like useState
  const [messageCount, setMessageCount] = useRecoilState(messagingAtom);
  // what if we want to show all the notification on me button
  // uglier approach

  // const totalNotificationCount = useMemo(
  //   () => networkCount + jobCount + notificationCount + messageCount,
  //   [networkCount + jobCount + notificationCount + messageCount]
  // );

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button>Me ({totalNotificationCount})</button>
      <br></br>

      <button onClick={() => setMessageCount((prev) => prev + 1)}>
        Update Message
      </button>
      <br></br>
      {/* <NotificationUpdater /> */}
    </div>
  );
}

// const NotificationUpdater = () => {
//   // when we dont want the state but we want the setter function then we use useSetRecoilState() hook
//   const setNotification = useSetRecoilState(notificationsAtom)
//   return <button onClick={() => setNotification(prev => prev + 1)}>Update Notification</button>;
// };

export default App;
