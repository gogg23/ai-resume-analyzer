import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resume Analyzer' },
    { name: 'description', content: 'Personalized career insights' },
  ];
}

export default function Home() {
  return <main>
    <section className='main-section'>
      <div className='page-heading'>
        <h1 >

        </h1>

      </div>

    </section>
  </main>;
}
