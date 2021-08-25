import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushTokens";
import logger from "../utility/log";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    const registerForPushNotifications = async () => {
      try {
        const permission = await Notifications.requestPermissionsAsync();
        if (!permission.granted) return;

        const token = await Notifications.getExpoPushTokenAsync();

        expoPushTokensApi.register(token);
      } catch (error) {
        logger.log("Error getting the notifications permission.", error);
      }
    };

    registerForPushNotifications();
    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(
        notificationListener
      );

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  }, []);
};
