import css from './friendListItem.module.css';
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const classNames = clsx(css.online, isOnline ? css.isOnline : css.offline);

    return (
        <li className={css.container}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="40" />
            <p className={css.name}>{name}</p>
            <p className={css.stats}>
                <span className={classNames}>
                    {isOnline ? 'online' : 'offline'}
                </span>
            </p>
        </li>
    );
}

export default FriendListItem;
