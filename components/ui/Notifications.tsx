import styles from './Notifications.module.css';
import { NotificationDataType } from '../../types/contextTypes';
import { useContext } from 'react';
import NotificationContext from '../../store/notificationContext';

const Notifications = (props: NotificationDataType) => {
  const { title, status, message } = props;

  const notificationCtx = useContext(NotificationContext);

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }

  if (status === 'pending') {
    statusClasses = styles.pending;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;
  return (
    <div className={cssClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};
export default Notifications;
