import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
import RacingreiseApp from '../components/RacingreiseApp';

export default function Home() {
  return <RacingreiseApp />;
}
