import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Nama Situs</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/produk">Produk</Link></li>
            {/* Tambahkan menu lainnya sesuai kebutuhan */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
