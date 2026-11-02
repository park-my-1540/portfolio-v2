'use client';
import Main from '@/components/templates/Main';
import { Filtered } from '@/types/common';
export default function Home({ list }: { list: Filtered[] }) {
  return <main id="main-container"><Main list={list} /></main>;
}
