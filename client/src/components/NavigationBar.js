import { NavLink } from 'react-router-dom';
import "../styles.css"; 

const NavigationBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/data-input">Analytics</NavLink>
      <NavLink to="/scenarios">Scenarios</NavLink>
      <NavLink to="/reports">Reports</NavLink>
      <NavLink to="/support">Support</NavLink>
    </nav>
  );
};

export default NavigationBar;
