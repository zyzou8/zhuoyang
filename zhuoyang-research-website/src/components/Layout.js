import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import { getAssetPath } from '../utils/assetPath';

const SITE_URL = 'https://zyzou8.github.io/zhuoyang';
const DEFAULT_TITLE = 'Zhuoyang Zou | PhD Student in Computer Science at Penn State';
const DEFAULT_DESCRIPTION =
  'Zhuoyang Zou is a Computer Science PhD student at Pennsylvania State University advised by Prof. Wenpeng Yin, ' +
  'researching large language models (LLMs), multi-agent collaboration, and reasoning for scientific and healthcare applications.';
const KEYWORDS = [
  'Zhuoyang Zou', 'Penn State', 'Pennsylvania State University', 'PhD student', 'Computer Science',
  'Large Language Models', 'LLM', 'Multi-agent systems', 'LLM reasoning', 'AI for science',
  'Scientific peer review', 'AI in healthcare', 'Natural Language Processing', 'NLP', 'Wenpeng Yin',
].join(', ');

// Structured data so search engines can recognize this as Zhuoyang Zou's profile page.
const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zhuoyang Zou',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/profile-photo.jpg`,
  jobTitle: 'PhD Student in Computer Science',
  affiliation: { '@type': 'CollegeOrUniversity', name: 'Pennsylvania State University' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Northwestern University' },
    { '@type': 'CollegeOrUniversity', name: 'The Chinese University of Hong Kong' },
  ],
  knowsAbout: ['Large Language Models', 'Multi-agent Systems', 'LLM Reasoning', 'AI for Science', 'AI in Healthcare'],
  sameAs: [
    'https://scholar.google.com/citations?user=n8gewTkAAAAJ',
    'https://github.com/zyzou8',
    'https://www.linkedin.com/in/zhuoyangzou/',
  ],
};

export default function Layout({ children, title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION }) {
  const { asPath } = useRouter();
  const url = `${SITE_URL}${asPath.split(/[?#]/)[0]}`;
  const image = `${SITE_URL}/profile-photo.jpg`;

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="author" content="Zhuoyang Zou" />
        <link rel="canonical" href={url} />

        {/* Link previews (LinkedIn, Slack, X, etc.) */}
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Zhuoyang Zou" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <link rel="icon" type="image/svg+xml" href={getAssetPath('favicon.svg')} />
        <link rel="icon" type="image/png" sizes="32x32" href={getAssetPath('favicon-32.png')} />
        <link rel="apple-touch-icon" href={getAssetPath('apple-touch-icon.png')} />
        <meta name="theme-color" content="#334155" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
