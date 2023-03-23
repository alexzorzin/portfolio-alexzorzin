
const NavItem = ({ text, href, active }) => {
  return (
    <a href={href}>
      <div
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </div>
    </a>
  );
};

export default NavItem;