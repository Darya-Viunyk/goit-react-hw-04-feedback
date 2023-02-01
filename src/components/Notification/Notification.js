import propTypes from 'prop-types';
import style from './Notification.module.css';
export default function Notification({ sms }) {
  return <div className={style.notification}>{sms}</div>;
}
Notification.propTypes = {
  sms: propTypes.string.isRequired,
};
