import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<>
			<Head></Head>

			{children}
		</>
	);
};

export default Layout;
