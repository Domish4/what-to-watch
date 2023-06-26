import { NavLink } from 'react-router-dom';

type TabsProps = {
  activeTab: typeof tabNames[number];
  id: string;
}
const tabNames = ['Overview', 'Details', 'Reviews'] as const;

function TabsNavigation({activeTab, id}: TabsProps): JSX.Element {

  const tabs = [...tabNames].map((value) => (
    <li key={value} className={`film-nav__item ${activeTab === value ? 'film-nav__item--active' : ''}`}>
      <NavLink
        to={`/films/${id}/${value.toLowerCase()}`}
        className='film-nav__link'
        style={({ isActive }) => ({ pointerEvents: isActive ? 'none' : 'auto' })}
      >
        {value}
      </NavLink>
    </li>
  ));

  return (
    <nav className="film-nav film-card__nav" data-testid='tabs-navigation'>
      <ul className="film-nav__list">
        {tabs}
      </ul>
    </nav>
  );

}

export default TabsNavigation;
