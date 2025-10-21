// 1. Pilih tombol berdasarkan ID-nya
const tombolsapa = dpcument.getElemenById('sapaButton');
// 2. Tambahkan 'event listener' untuk aksi 'click'
tombolsapa.addEventlistener('click', function() {
  // 3. Jalankan kode ini ketika tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
