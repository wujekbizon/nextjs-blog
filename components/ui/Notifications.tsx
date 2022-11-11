import styles from './Notifications.module.css';
import { NotificationDataType } from '../../types/contextTypes';

const Notifications = (props: NotificationDataType) => {
  const { title, status, message } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;
  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};
export default Notifications;
