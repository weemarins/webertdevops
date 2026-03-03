import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="/images/profile.png" alt="Webert DevOps" className="avatar" />
        <h2>Webert DevOps</h2>
        <p>Blog sobre DevOps, Kubernetes, Cloud e infraestrutura. Conteúdo técnico e prático.</p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/tags"><a>Tags</a></Link></li>
          <li><Link href="/categories"><a>Categories</a></Link></li>
          <li><Link href="/archives"><a>Archives</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
        </ul>
      </nav>
    </aside>
  );
}
