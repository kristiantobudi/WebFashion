import React from "react";

export default function Promo() {
  return (
  <div className='grid grid-cols-6 gap-y-20 text-black flex-col items-center justify-center py-20 pl-10'>
    <div className='text-center col-start-2 col-end-4'>
      <h3 className='text-3xl mb-3 font-Work'>SUPER FLASH SALE</h3>
      <p className="text-lg-mb-5 font-Work">Penawaran Terbaik Secepat Kilat! Stok Terbatas!</p>
    </div>
    
    <div className="text-center col-end-6 col-span-2">
      <button className="bg-red-500 text-white py-3 px-8 rounded-lg font-Work hover:bg-red-600 transition duration-300 ease-in-out">Shop Now</button>
    </div>

    <div className="text-center col-start-2 col-span-4">
    <h4 className='text-2xl mb-3 font-Work'>VOUCHER DISKON RP100.000 SPESIAL UNTUKMU!</h4>
      <h5 className="text-sm font-Work">Pakai kodenya sekarang: URBANGO100</h5>
      <h5 className="text-sm font-light font-Work py-2">*S&K Berlaku</h5>
    </div>
  </div>
  );
}