import { Navbar } from 'flowbite-react';
import MSAicon from './icon/msa-icon.png';
const NavBar = () => {
	return (
		<Navbar fluid={true} rounded={true}>
			<Navbar.Brand href='/'>
				<img src={MSAicon} className='mr-3 h-6 sm:h-9' alt='Media Search' />
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Media Search
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link href='/' active={true}>
					Home
				</Navbar.Link>
				<Navbar.Link href='/'>About</Navbar.Link>
				<Navbar.Link href='/'>Services</Navbar.Link>
				<Navbar.Link href='/'>Pricing</Navbar.Link>
				<Navbar.Link href='/'>Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
