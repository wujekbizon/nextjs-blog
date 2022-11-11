import React, { createContext, useState, useEffect } from 'react';
import { InitialState, NotificationDataType } from '../types/contextTypes';

type Props = {
  children: React.ReactNode;
};

const INITIAL_STATE: InitialState = {
  notification: {},
  showNotification: (notificationData: NotificationDataType) => {},
  hideNotification: () => {},
};

const NotificationContext = createContext(INITIAL_STATE);

export const NotificationContextProvider = ({ children }: Props) => {
  const [activeNotification, setActiveNotifcation] =
    useState<NotificationDataType>({ title: '', status: '', message: '' });

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData: NotificationDataType) => {
    setActiveNotifcation(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotifcation({ title: '', status: '', message: '' });
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};
