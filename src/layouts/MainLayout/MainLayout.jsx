import FooterNav from '../../components/FooterNav/FooterNav';
import NavBar from '../../components/NavBar/NavBar';
import MainContainer from '../MainContainer/MainContainer';

const MainLayout = () => {
	return (
		<>
			<main
				data-testid='main__layout__container'
				className='flex flex-col flex-nowrap justify-between h-full gap-5'
			>
				<section className='basis-1/12'>
					<header className='border-b-2 border-gray-200'>
						<NavBar />
					</header>
				</section>
				<section className='basis-10/12'>
					<div className='container mx-auto px-4'>
						<MainContainer />
					</div>
				</section>
				<section className='basis-1/12'>
					<FooterNav />
				</section>
			</main>
		</>
	);
};

export default MainLayout;
