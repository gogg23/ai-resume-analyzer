import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resume Analyzer' },
    { name: 'description', content: 'Smart ' },
  ];
}

export default function Home() {
  return <Welcome />;
}
