import React, { createContext, useState, useEffect } from 'react';
import { InitialState, NotificationDataType } from '../types/contextTypes';

type Props = {
  children: React.ReactNode;
};

const initNotification = {
  title: '',
  message: '',
  status: '',
};

const INITIAL_STATE: InitialState = {
  notification: initNotification,
  showNotification: (notificationData: NotificationDataType) => {},
  hideNotification: () => {},
  isActive: false,
};

const NotificationContext = createContext(INITIAL_STATE);

export const NotificationContextProvider = ({ children }: Props) => {
  const [activeNotification, setActiveNotifcation] = useState(initNotification);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      isActive &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        hideNotificationHandler();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData: NotificationDataType) => {
    setActiveNotifcation(notificationData);
    setIsActive(true);
  };

  const hideNotificationHandler = () => {
    setIsActive(false);
  };

  const context = {
    isActive,
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

export default NotificationContext;
