import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const MainLayout = () => {
	return (
		<>
			<main data-testid='main__layout__container'>
				<section>
					<header>
						<NavBar />
					</header>
				</section>
				<section>Here is body</section>
				<section>
					<Footer />
				</section>
			</main>
		</>
	);
};

export default MainLayout;
