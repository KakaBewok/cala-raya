import DataTypes from "../types/data-types";

const data: DataTypes[] = [
  {
    brideAndGroom: {
      groom: {
        photo: "https://slametandfatma.wedding/galeri/slamett.jpeg",
        nickname: "Slamet",
        fullName: "Slamet Riyadi",
        father: "Arpa",
        mother: "Hasiri",
      },
      bride: {
        photo: "https://slametandfatma.wedding/galeri/fatmaa.jpeg",
        nickname: "Fatma",
        fullName: "Fatmawati",
        father: "Suyadi",
        mother: "Parjinem",
      },
    },
    slug: "slamet-fatma",
    audioUrl: "https://slametandfatma.wedding/audio/myaudio.mp3",
    weddingDate: "20 April 2025",
    thumbnailImageUrl: "https://slametandfatma.wedding/galeri/nikahfix.jpg",
    videoUrl: "https://slametandfatma.wedding/video/myvideo.mp4",
    introduction:
      "Setelah Slamet dan Fatma dipertemukan dalam situasi yang tepat, di mana keduanya telah siap untuk memulai hubungan bersama, tibalah mereka di awal perjalanan baru menuju pernikahan.",
    openingMessages: {
      image: "https://slametandfatma.wedding/galeri/news.jpg",
      content: `<p>Halo! Karena kalian adalah orang penting yang mengisi hari-hari kami, kami ingin informasikan bahwa kami akan segera menikah! &lt;3 </p><p className="mt-4"> Tapi sebelumnya, kami mohon maaf kepada teman dan kerabat semua karena tidak bisa mengundang kalian hadir di hari bahagia kami, dikarenakan pernikahan kami bersifat intimate wedding yang dilaksanakan di Bekasi dan hanya dihadiri oleh keluarga dan orang terdekat.</p><p className="mt-4">Walaupun begitu, kami harapkan sebaik-baiknya doa untuk kelancaran pernikahan dan hari-hari bahagia setelahnya.</p><p className="mt-4">Dengan penuh cinta,</p><p>The bride and groom &lt;3</p>`,
    },
    loveStory: [
      {
        imageUrl: "https://slametandfatma.wedding/galeri/story1.jpeg",
        title: "Episode 1: How We Met Each Other that Time",
        description:
          "Slamet dan Fatma pertama kali bertemu pada tahun 2015 sebagai teman satu regu saat masa orientasi siswa Sekolah Menengah Kejuruan.",
      },
      {
        imageUrl: "https://slametandfatma.wedding/galeri/story2.jpg",
        title: "Episode 2: A Love That Grows With Time",
        description:
          "Selama 1 tahun berteman, akhirnya mereka menyadari bahwa perasaan yang mereka miliki satu sama lain bukan hanya sebatas teman sekolah belaka, melainkan...",
      },
      {
        imageUrl: "https://slametandfatma.wedding/galeri/story3.jpeg",
        title: "Episode 3: Choose to Spend Life Together",
        description:
          "Setelah 8 tahun lebih menjalin hubungan, pada Desember 2024 Slamet menyampaikan niatnya untuk melamar Fatma.",
      },
      {
        imageUrl: "https://slametandfatma.wedding/galeri/story4.jpeg",
        title: "[Coming Soon] Final Episode: The Beginning of Forever",
        description:
          "Ketika hari H itu datang, Slamet dan Fatma akan berbagi kisah haru mereka di sini. Sampai bertemu lagi di cerita bahagia selanjutnya!",
      },
    ],
    gallery: [
      "https://slametandfatma.wedding/galeri/1.jpg",
      "https://slametandfatma.wedding/galeri/2.jpg",
      "https://slametandfatma.wedding/galeri/3.jpg",
      "https://slametandfatma.wedding/galeri/4.jpg",
      "https://slametandfatma.wedding/galeri/5.jpg",
      "https://slametandfatma.wedding/galeri/6.jpg",
      "https://slametandfatma.wedding/galeri/7.jpg",
      "https://slametandfatma.wedding/galeri/8.jpg",
      "https://slametandfatma.wedding/galeri/9.jpg",
    ],
    showMenu: {
      breakingNews: true,
      brideAndGroom: true,
      loveStory: true,
      gallery: true,
      wish: true,
    },
    giftInfo: [
      {
        providerName: "BCA",
        accountNumber: "1234567890",
        accountHolder: "Aulia & Bima",
        address:
          "Jl. Raya No. 123, Jakarta. Jl. Raya No. 123, Jakarta. Jl. Raya No. 123, Jakarta",
      },
    ],
    theme: "netflix",
    location: {
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2186564568997!2d105.75484540000001!3d-1.6225196000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e23ad5f50173607%3A0xd1ca675aab4741c9!2sMbak%20Hasiri!5e0!3m2!1sen!2sid!4v1744121209620!5m2!1sen!2sid",
      address:
        "Jl. Raya Puncak, Kec. Megamendung, Kab. Bogor Provinsi Jawab Barat Indonesia.",
    },
  },
];

export default data;
