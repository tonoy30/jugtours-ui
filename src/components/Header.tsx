import { Button, HStack, Stack } from '@chakra-ui/react';

const Header = () => {
	return (
		<HStack
			w='100%'
			color={'white'}
			p={2}
			justifyContent='space-between'
			align='center'
			bg={'blackAlpha.800'}
		>
			<h1>Header</h1>
			<Stack direction='row' spacing={8} align='center'>
				<Button colorScheme='teal' variant='solid'>
					Login
				</Button>
				<Button colorScheme='teal' variant='outline'>
					Register
				</Button>
			</Stack>
		</HStack>
	);
};

export default Header;
