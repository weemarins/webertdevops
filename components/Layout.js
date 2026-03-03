import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'Webert DevOps' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Blog sobre DevOps, Kubernetes, OpenShift, Cloud e infraestrutura" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header style={{ padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0 }}><Link href="/">Webert DevOps</Link></h1>
          <nav>
            <Link href="/"><a style={{ marginRight: '1rem' }}>Home</a></Link>
            <Link href="/tags"><a style={{ marginRight: '1rem' }}>Tags</a></Link>
            <Link href="/about"><a>Sobre</a></Link>
          </nav>
        </div>
      </header>
      <main className="container">{children}</main>
      <footer>
        <div className="container">
          <p>Autor: Webert Marins</p>
          <p>Especialista em Kubernetes e Cloud</p>
          <p><a href="#">LinkedIn</a></p>
        </div>
      </footer>
    </>
  );
}
