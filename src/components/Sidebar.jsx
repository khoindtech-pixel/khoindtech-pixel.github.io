import { profile } from '../data/profile';
import {
  FiCalendar,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';
import {
  SiFacebook,
  SiGithub,
  SiGoogle,
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

const contactItems = [
  { label: 'Email', value: profile.email, icon: FiMail, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, icon: FiPhone },
  { label: 'Birthday', value: profile.birthday, icon: FiCalendar },
  { label: 'Location', value: profile.location, icon: FiMapPin },
];

const socialItems = [
  { label: 'GitHub', href: profile.social.GitHub, icon: SiGithub },
  { label: 'LinkedIn', href: profile.social.LinkedIn, icon: FaLinkedin },
  { label: 'Google', href: profile.social['Google Developer Profile'], icon: SiGoogle },
  { label: 'Facebook', href: profile.social.Facebook, icon: SiFacebook },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-top">
        <div className="avatar-wrap">
          <img
            className="avatar"
            src={profile.avatar}
            alt={profile.name}
          />
          <span className="available-badge">
            Available for work
          </span>
        </div>

        <div className="profile-info">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-nickname">{profile.nickname}</p>
          <p className="profile-title">{profile.title}</p>
        </div>
      </div>

      <div className="contacts-wrap">
        <hr className="sidebar-divider" />

        <ul className="contact-list">
          {contactItems.map(({ label, value, icon: Icon, href }) => (
            <li key={label}>
              <span className="contact-icon" aria-hidden="true"><Icon /></span>
              <span>
                <span className="contact-label">{label}</span>
                {href ? <a className="contact-value" href={href}>{value}</a> : <span className="contact-value">{value}</span>}
              </span>
            </li>
          ))}
        </ul>

        <hr className="sidebar-divider" />

        <div className="social-list" aria-label="Social links">
          {socialItems.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}