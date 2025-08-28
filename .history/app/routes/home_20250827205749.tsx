import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resume Analyzer' },
    { name: 'description', content: 'Personalized career insights' },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')]">
    <Navbar
    <section className='main-section'>
      <div className='page-heading'>
        <h1>Monitor job applications & resume ratings</h1>
        <h2>AI-powered review & feedback.</h2>
      </div>

    </section>
  </main>;
}
