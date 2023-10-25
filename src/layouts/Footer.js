import React from "react";

function Footer() {
    return (
        <footer className="bg-white text-gray-900 p-4">
            <div className="container mx-auto">
                <p>Hak Cipta © {new Date().getFullYear()} Nama Situs</p>
                {/* Tambahkan informasi kontak, tautan sosial media, dsb. */}
            </div>
        </footer>
    );
}

export default Footer;