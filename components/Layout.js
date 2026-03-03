import Head from 'next/head';
import Link from 'next/link';
import Sidebar from './Sidebar';

export default function Layout({ children, title = 'Webert DevOps' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Blog sobre DevOps, Kubernetes, OpenShift, Cloud e infraestrutura" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="layout">
        <Sidebar />
        <div className="content">
          <main className="container">{children}</main>
          <footer>
            <div className="container">
              <p>Autor: Webert Marins</p>
              <p>Especialista em Kubernetes e Cloud</p>
              <p><a href="#">LinkedIn</a></p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
