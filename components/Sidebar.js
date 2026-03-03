import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="/images/placeholder.png" alt="Webert" className="avatar" />
        <h2>Bora aprender!?!?</h2>
        <p>Lugar onde tento trazer com palavras mais simples o que eu tive dificuldade de compreender.</p>
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
