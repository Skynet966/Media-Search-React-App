import { useCallback, useState, useId } from 'react';
import ImageCard from '../../components/ImageCard/ImageCard';
import SearchBar from '../../components/SearchBar/SearchBar';
const MainContainer = () => {
	const uniqueId = useId();
	const [searchParams, setSearchParams] = useState({
		searchText: '',
		mediaType: ''
	});
	const onHandleChange = useCallback(
		(searchText, mediaType) => {
			setSearchParams({
				searchText,
				mediaType
			});
			console.log(searchText, mediaType);
		},
		[setSearchParams]
	);
	return (
		<div>
			<div className=''>
				<SearchBar onChange={onHandleChange} />
			</div>
			<section className='py-10'>
				<div className='flex flex-row flex-wrap gap-10 justify-evenly'>
					{[...Array(24).keys()].map((v, i) => (
						<div key={`${uniqueId}-${i}`}>
							<ImageCard />
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default MainContainer;
