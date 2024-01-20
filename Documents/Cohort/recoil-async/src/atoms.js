import axios from "axios";
import { atom, selector } from "recoil";

// export const notifications = atom({
//     key: "networkAtom",
//     default : {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
//     }
// );

// Api call in atom

// NOTE  : Please Read
// export const notifications = atom({
//     key: "networkAtom",
//     // default : async () => {
        // let res = await axios.get("https://sum-server.100xdevs.com/notifications")
        // return res.data;
//     // }   //this will not work because we can not set default value with async code insted we can set default a selector and inside selector we can do async calls/api calls
//     }
// );

export const notifications = atom({
    key: "networkAtom",  
    default :  selector({
        key : "networkAtomSelector",
        get : async () => {
        let res = await axios.get("https://sum-server.100xdevs.com/notifications")
        return res.data;
        }
    })
    }
);

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})