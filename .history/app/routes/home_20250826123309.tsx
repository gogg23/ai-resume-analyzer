import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resume Analyzer' },
    { name: 'description', content: 'Personalized career insights'},
  ];
}

export default function Home() {
  return <main></main>;
}
