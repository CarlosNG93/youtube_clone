import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';


const SideBar = ({ selectedCategoy, setSelectedCategory }) => (
  
	<Stack
		direction="row"
		sx={{
			overFlowY: "auto",
			height: {
				sx: 'auto',
				md: '95%'
			},
			flexDirection: {
				md: 'column'
			},
		}}
	>
		{categories.map((category) => (
			<button
				className='category-btn'
				style={{
					background: category.name === selectedCategoy && '#FC1503',
					color: 'white'
				}}
				key={category.name}
			>
				<span
					style={{
						color: category.name === selectedCategoy ? 'white' : 'red',
						marginRight: '15px'
					}}
				>
					{category.icon}
				</span>
				<span
					style={{
						opacity: category.name === selectedCategoy ? '1' : '0.8'
					}}
				>
					{category.name}
				</span>
			</button>
		))}
	</Stack>
  
)

export default SideBar;