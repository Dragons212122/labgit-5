import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../components/utils.module.css'; // Import style mới

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Header with profile picture and name */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
        <Image
          priority
          src="/profile.png"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt="Ảnh đại diện"
          style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)' }}
        />
        <h1 className={utilStyles.heading2XL} style={{ background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Pham Ngoc Kha</h1>
      </div>

      <section className={utilStyles.headingLg}>
        <p style={{ textAlign: 'center' }}>Chào mừng bạn đến với Blog cá nhân của tôi!</p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Danh sách bài viết</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} style={{ color: '#0070f3', fontWeight: 'bold', textDecoration: 'none' }}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}