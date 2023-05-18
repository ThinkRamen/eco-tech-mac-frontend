import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
	return (
		<header>
			<Navbar
				bg='dark'
				variant='dark'
				expand='lg'
				className='d-grid justify-content-evenly'
				collapseOnSelect
			>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							Eco Tech Mac<i className='fas fa-laptop px-2'></i>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<LinkContainer to='/login'>
								<Nav.Link>
									LOGIN
									<i className='fas fa-user px-2' />
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/cart'>
								<Nav.Link>
									CART
									<i className='fas fa-shopping-cart px-2' />
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
