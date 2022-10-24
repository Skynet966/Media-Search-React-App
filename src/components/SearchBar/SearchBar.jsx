import React from 'react';
import { Card, TextInput, Button, Select, Label } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';
const SearchBar = () => {
	return (
		<Card>
			<h5 className='text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				Search images, music and videos.
			</h5>
			<form className='flex items-center gap-2'>
				<label for='simple-text-search' className='sr-only'>
					Search for images, music and videos.
				</label>
				<div className='flex flex-row flex-wrap sm:flex-nowrap justify-around gap-2 w-full'>
					<TextInput
						id='simple-text-search'
						type='text'
						className='w-full sm:basis-11/12'
						placeholder='Search Here...'
						required
					/>
					<Select id='countries' required={true} className='w-36'>
						<option selected>Images</option>
						<option>Videos</option>
						<option>Music</option>
					</Select>
					<Button type='submit' size='lg' className='w-1/2 sm:w-auto'>
						<FaSearch />
						<span className='sr-only'>Search</span>
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default SearchBar;
