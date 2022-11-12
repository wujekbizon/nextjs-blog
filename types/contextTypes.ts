export type NotificationDataType = {
  title: string;
  message: string;
  status: string;
};

export type InitialState = {
  notification: NotificationDataType;
  showNotification: (
    notificationData: NotificationDataType
  ) => void | undefined;
  hideNotification: () => void | undefined;
  isActive: boolean;
};
