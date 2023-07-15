import Layout from '@/components/layout/layout';
import '@/styles/globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
	return (
		<div className={rubik.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}
