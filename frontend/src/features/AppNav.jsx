import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

// This is an opinionated NavBar
export const AppNav = () => {

    return (
        <Nav backgroundColor={'#203182'} color={'white'}>
            <NavSection jc="flex-start">
                <NavItem>
                    <NavLink to="/"><h2>FlightTracker</h2></NavLink>
                </NavItem>
            </NavSection>
            <NavSection jc="flex-end">
                <NavItem>
                    Sign In
                </NavItem>
                <NavItem>
                    Sign Up
                </NavItem>
            </NavSection>
        </Nav>
    );
}
