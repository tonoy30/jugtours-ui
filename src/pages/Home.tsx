import { Box, StackDivider, VStack } from '@chakra-ui/react';
import { useState } from 'react';

export const Home = () => {
	const [count, setCount] = useState(0);

	return (
		<VStack
			divider={<StackDivider borderColor='gray.200' />}
			spacing={4}
			align='stretch'
		>
			<Box h='40px' bg='yellow.200'>
				1
			</Box>
			<Box h='40px' bg='tomato'>
				2
			</Box>
			<Box h='40px' bg='pink.100'>
				3
			</Box>
			<Box h='40px' bg='pink.300'>
				4
			</Box>
		</VStack>
	);
};
