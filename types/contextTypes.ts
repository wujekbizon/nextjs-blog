export type NotificationDataType = {
  title: string;
  message: string;
  status: string;
};

export type InitialState = {
  notification: {};
  showNotification: (
    notificationData: NotificationDataType
  ) => void | undefined;
  hideNotification: () => void | undefined;
};
