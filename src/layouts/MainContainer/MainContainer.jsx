import ImageCard from '../../components/ImageCard/ImageCard';
import SearchBar from '../../components/SearchBar/SearchBar';
const MainContainer = () => {
	return (
		<div>
			<div className=''>
				<SearchBar />
			</div>
			<section className='py-10'>
				<div className='flex flex-row flex-wrap gap-10 justify-evenly'>
					{[...Array(24).keys()].map(() => (
						<div>
							<ImageCard />
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default MainContainer;
