import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Final Blog</title>
      </Head>
      <header>
        {home ? <h1>Trang Chủ Blog</h1> : <Link href="/">← Quay lại</Link>}
      </header>
      <main>{children}</main>
    </div>
  );
}