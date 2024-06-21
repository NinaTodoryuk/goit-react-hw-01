import css from './Profile.module.css'

export const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.container}>
  <div className={css.profile}>
    <img
      src={image}
      alt="User avatar" width="150"
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>        
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.list}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile;