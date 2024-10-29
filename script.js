const fasilitasUmum = [
  {
    id: 1,
    nama: "Masjid An-Nur",
    deskripsi: "Masjid ini merupakan salah satu masjid terbesar di Pekanbaru.",
    jamBuka: "05:00 - 20:00",
    lokasi: "Jl. Masjid No. 1, Pekanbaru",
    gambar:
      "https://cda.1001malam.com/uploads/landmarks/masjidagungannur_pekanbaru_299.jpg",
  },
  {
    id: 2,
    nama: "RSUD Pekanbaru",
    deskripsi:
      "Rumah Sakit Umum Daerah Pekanbaru, menyediakan pelayanan kesehatan lengkap.",
    jamBuka: "24 Jam",
    lokasi: "Jl. Sudirman No. 20, Pekanbaru",
    gambar:
      "https://mediacenter.riau.go.id/foto_berita/medium/pendaftaran-poliklinik-rsud-arifin.jpg",
  },
  {
    id: 3,
    nama: "Taman Kota",
    deskripsi: "Taman publik yang ideal untuk bersantai dan berolahraga.",
    jamBuka: "06:00 - 18:00",
    lokasi: "Jl. Taman No. 2, Pekanbaru",
    gambar: "https://gentaonline.com/assets/berita/original/66003915388-1.jpg",
  },
  {
    id: 4,
    nama: "Sekolah Dasar Negeri 1",
    deskripsi: "Sekolah dasar yang menyediakan pendidikan berkualitas.",
    jamBuka: "07:00 - 16:00",
    lokasi: "Jl. Pendidikan No. 5, Pekanbaru",
    gambar:
      "https://img.antaranews.com/cache/1200x800/2021/06/28/IMG_20210628_101626.jpg",
  },
  {
    id: 5,
    nama: "Pasar Hahaha",
    deskripsi: "Pasar lengkap dengan berbagai kebutuhan sehari-hari.",
    jamBuka: "08:00 - 22:00",
    lokasi: "Jl. Belanja No. 10, Pekanbaru",
    gambar:
      "https://mediacenter.riau.go.id/foto_berita/medium/pasar-rakyat-palapa-pekanbaru-mampu.jpg",
  },
  {
    id: 8,
    nama: "Halte Bus 123",
    deskripsi: "Tempat perbehentian bus dari rumbai ke panam",
    jamBuka: "09:00 - 20:00",
    lokasi: "Jl. Fun No. 15, Pekanbaru",
    gambar:
      "https://betuah.com/assets/berita/original/91081566596-img-20211115-wa0006.jpg",
  },
];

let container = document.getElementById("fasilitas-container");

fasilitasUmum.map((fasilitas) => {
  container.innerHTML += `
      <div class="bg-white shadow-md w-full rounded-lg overflow-hidden transition-transform transform hover:shadow-xl mb-4">
        <img
          src="${fasilitas.gambar}"
          class="w-full h-[170px] object-cover"
          alt="${fasilitas.nama}"
        />
        <div class="p-4">
          <h1 class="font-bold text-lg text-sky-900 mb-2 truncate ...">${fasilitas.nama}</h1>
          <p class="text-sm text-gray-600 mb-2 truncate ...">
            Deskripsi: ${fasilitas.deskripsi}
          </p>
          <p class="text-sm font-semibold text-gray-800">
            Jam Buka: ${fasilitas.jamBuka}
          </p>
          <p class="text-sm text-gray-500">
            Lokasi: ${fasilitas.lokasi}
          </p>
        </div>
      </div>
    `;
});

function initMap() {
  const pekanbaru = { lat: 0.5071, lng: 101.4478 }; // Pekanbaru coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: pekanbaru,
  });

  // Example marker
  new google.maps.Marker({
    position: pekanbaru,
    map: map,
    title: "Pekanbaru",
  });
}

 function toggleMenu() {
   document.getElementById("mobileMenu").classList.toggle("hidden");
 }