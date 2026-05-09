/**
 * GeoDoc AI Chat — Vercel Serverless Function
 * Smart template-based chatbot about Tanah Aluvial
 * No external API key required — uses keyword matching & pre-defined Q&A
 */

const KNOWLEDGE_BASE = [
  {
    keywords: ['aluvial', 'tanah aluvial', 'apa itu', 'definisi', 'pengertian'],
    question: 'Apa itu tanah aluvial?',
    answer: 'Tanah aluvial adalah jenis tanah yang terbentuk dari endapan sedimentasi material yang diangkut oleh air sungai (fluvial) dan laut (marin). Di Cilamaya Wetan, tanah ini terbentuk selama ribuan tahun di dataran rendah pesisir, menghasilkan lapisan tanah yang subur dengan tekstur halus namun drainase terbatas. Tanah aluvial umumnya berwarna kelabu gelap karena kondisi reduksi (kekurangan oksigen) di bawah permukaan.'
  },
  {
    keywords: ['tekstur', 'lempung', 'berdebu', 'jenis tekstur'],
    question: 'Bagaimana tekstur tanah aluvial di Muarabaru?',
    answer: 'Tekstur tanah aluvial di Empang Muarabaru diklasifikasikan sebagai **lempung berdebu** (silty clay loam). Ini berarti tanah mengandung campuran partikel debu (silt) dan liat (clay) yang dominan, dengan sedikit pasir. Komposisi ini membuat tanah mampu menahan air dengan baik — cocok untuk tambak dan sawah — namun memiliki drainase alami yang buruk. Ketika basah, tanah menjadi liat dan lengket; ketika kering, tanah menjadi keras dan pejal.'
  },
  {
    keywords: ['warna', 'kelabu', 'gelap', 'hitam', 'coklat'],
    question: 'Mengapa tanah aluvial berwarna kelabu gelap?',
    answer: 'Warna kelabu gelap pada tanah aluvial Muarabaru disebabkan oleh kondisi **reduksi** (gleyification) — yaitu kondisi tanah yang jenuh air dalam waktu lama sehingga oksigen terbatas. Dalam kondisi anaerobik (tanpa oksigen), senyawa besi (Fe³⁺) tereduksi menjadi Fe²⁺ yang berwarna kelabu kebiruan. Proses ini khas terjadi di tanah pesisir rendah yang sering terendam pasang surut atau banjir sungai.'
  },
  {
    keywords: ['hara', 'subur', 'nutrisi', 'kesuburan', 'unsur'],
    question: 'Mengapa kandungan hara tanah aluvial tinggi?',
    answer: 'Kandungan hara tanah aluvial yang tinggi disebabkan oleh proses **sedimentasi berkelanjutan**. Sungai Cilamaya mengangkut material organik dan mineral dari hulu (pegunungan) dan mengendapkannya di dataran rendah pesisir. Selain itu, pengaruh pasang surut laut membawa material organik laut yang kaya nitrogen dan sulfur. Kombinasi kedua sumber sedimentasi ini, ditambah dengan dekomposisi material organik dalam kondisi anaerobik, menghasilkan tanah dengan kandungan hara yang sangat tinggi — ideal untuk pertanian dan perikanan tambak.'
  },
  {
    keywords: ['zona', '5 zona', 'sebaran', 'peta', 'wilayah'],
    question: 'Apa saja 5 zona aluvial di Cilamaya?',
    answer: 'Penelitian mengidentifikasi 5 zona aluvial di pesisir Cilamaya Wetan:\n\n🔵 **Zona 1 — Aluvial Pesisir Muarabaru**: Lempung berdebu, kelabu gelap. Titik sampel utama. Pemanfaatan: tambak & sawah.\n\n🟣 **Zona 2 — Aluvial Deltai Cilamaya**: Lempung liat berpasir, endapan delta sungai. Pemanfaatan: sawah irigasi teknis.\n\n🔵 **Zona 3 — Aluvial Rendaman Pasang Surut**: Lempung liat berdebu, pengaruh marin dominan. Pemanfaatan: tambak udang & bandeng.\n\n🟢 **Zona 4 — Aluvial Backswamp**: Liat berdebu, drainase sangat buruk, warna kelabu kebiruan. Pemanfaatan: tambak tradisional.\n\n🟠 **Zona 5 — Aluvial Lanau Sungai**: Lempung berlanau, endapan lanau & pasir halus. Pemanfaatan: pertanian palawija.'
  },
  {
    keywords: ['tambak', 'perikanan', 'udang', 'bandeng', 'ikan'],
    question: 'Bagaimana tanah aluvial mendukung perikanan tambak?',
    answer: 'Tanah aluvial sangat ideal untuk tambak karena sifat fisiknya yang **liat dan lengket**. Tekstur lempung berdebu membuat tanah mampu menahan air dengan sangat baik — pori-pori mikro antar partikel liat menciptakan lapisan kedap air alami. Ini berarti tambak tidak perlu dilapisi plastik atau semen, mengurangi biaya konstruksi secara signifikan. Di Muarabaru, tambak udang windu dan bandeng menjadi sumber pendapatan utama masyarakat. Kandungan hara tinggi juga mendukung pertumbuhan plankton dan organisme pakan alami ikan.'
  },
  {
    keywords: ['sawah', 'pertanian', 'padi', 'tanaman', 'palawija'],
    question: 'Tanaman apa yang cocok di tanah aluvial?',
    answer: 'Tanah aluvial mendukung berbagai jenis pertanian:\n\n🌾 **Padi sawah** — Tanaman utama karena tanah mampu menahan air irigasi. Kandungan hara tinggi menghasilkan produktivitas padi yang baik.\n\n🥬 **Palawija** (kacang-kacangan, cabai, tomat) — Di zona lanau sungai (Zona 5) yang drainasenya lebih baik.\n\n🌿 **Sayuran daun** — Kangkung, bayam, dan selada tumbuh baik karena kandungan nitrogen tinggi.\n\n⚠️ **Catatan**: Tanaman yang membutuhkan drainase baik (seperti singkong dan jagung) kurang cocok di zona pesisir karena genangan air berkepanjangan.'
  },
  {
    keywords: ['bata', 'material', 'bangunan', 'batu bata', 'konstruksi'],
    question: 'Mengapa tanah aluvial cocok untuk batu bata?',
    answer: 'Tanah aluvial dengan tekstur lempung berdebu sangat cocok untuk pembuatan **batu bata merah** karena beberapa alasan:\n\n1. **Plastisitas tinggi** — Kandungan liat membuat tanah mudah dibentuk dan dicetak tanpa retak\n2. **Kohesi kuat** — Partikel halus saling mengikat erat saat dikeringkan\n3. **Susut rendah** — Kandungan debu (silt) mengurangi penyusutan saat pembakaran\n4. **Ketersediaan melimpah** — Tanah aluvial tersedia dalam jumlah besar di pesisir\n\nDi Karawang, industri batu bata rumah tangga banyak ditemukan di sepanjang pesisir Cilamaya.'
  },
  {
    keywords: ['drainase', 'air', 'genangan', 'banjir', 'rob'],
    question: 'Mengapa drainase tanah aluvial buruk?',
    answer: 'Drainase buruk pada tanah aluvial disebabkan oleh kombinasi beberapa faktor:\n\n1. **Tekstur halus** — Partikel liat dan debu berukuran sangat kecil (<0.002mm), menciptakan pori-pori mikro yang menghambat aliran air\n2. **Topografi datar** — Dataran rendah pesisir memiliki kemiringan hampir 0°, sehingga air tidak mengalir secara gravitasi\n3. **Tinggi muka air tanah** — Kedekatan dengan laut membuat muka air tanah sangat tinggi\n4. **Pasang surut** — Air laut masuk ke daratan saat pasang, menghambat drainase\n5. **Struktur pejal** — Tanah tidak memiliki struktur remah yang memungkinkan perkolasi air\n\n⚠️ Masalah rob (banjir laut) semakin parah akibat kenaikan muka laut dan penurunan tanah (land subsidence) di pesisir utara Jawa.'
  },
  {
    keywords: ['fluvial', 'sungai', 'endapan sungai', 'sedimentasi'],
    question: 'Apa itu sedimentasi fluvial?',
    answer: 'Sedimentasi fluvial adalah proses pengendapan material oleh aliran sungai. Sungai Cilamaya mengangkut material dari hulu (batuan, mineral, bahan organik) dan mengendapkannya saat kecepatan air menurun di dataran rendah. Material halus seperti debu dan liat terbawa paling jauh dan mengendap di muara dan pesisir — inilah yang membentuk tanah aluvial. Proses ini berlangsung terus-menerus selama ribuan tahun, membangun lapisan tanah yang tebal dan subur di sepanjang pesisir Karawang.'
  },
  {
    keywords: ['marin', 'laut', 'pasang surut', 'endapan laut'],
    question: 'Apa itu sedimentasi marin?',
    answer: 'Sedimentasi marin adalah proses pengendapan material oleh laut, terutama melalui mekanisme pasang surut. Di pesisir Cilamaya Wetan, air laut membawa material halus (lumpur, pasir halus, bahan organik laut) ke daratan saat pasang dan mengendapkannya saat surut. Proses ini membentuk zona rendaman pasang surut (tidal flat) yang khas di pesisir utara Jawa. Sedimentasi marin memberikan pengaruh berbeda dibanding fluvial — material marin cenderung lebih bergaram (salin) dan mengandung mineral laut seperti pyrite yang bisa menyebabkan tanah masam jika dikeringkan (acid sulfate soil).'
  },
  {
    keywords: ['lokasi', 'tempat', 'mana', 'dimana', 'cilamaya', 'muarabaru', 'karawang'],
    question: 'Dimana lokasi penelitian tanah aluvial?',
    answer: 'Penelitian dilakukan di **Empang Muarabaru**, Desa Muarabaru, Kecamatan Cilamaya Wetan, Kabupaten Karawang, Jawa Barat. Titik koordinat sampel utama: **6°12\'09.5"S 107°36\'08.7"E** (-6.202639, 107.602417). Lokasi ini berada di pesisir utara Jawa Barat yang merupakan bagian dari dataran aluvial pesisir Karawang — salah satu kawasan pertanian dan perikanan tambak terbesar di Jawa Barat.'
  },
  {
    keywords: ['kelompok', 'anggota', 'siapa', 'tim', 'peneliti'],
    question: 'Siapa anggota Kelompok 2?',
    answer: 'Kelompok 2 Kelas X-11 SMAN 1 Cilamaya terdiri dari 6 anggota:\n\n1. **Batara**\n2. **Fahri**\n3. **Nurul**\n4. **Yulia**\n5. **Nike**\n6. **Nazwa**\n\nDengan bimbingan guru pengajar **Ibu Yumi Sasmita, S.Pd.**'
  },
  {
    keywords: ['struktur', 'pejal', 'massive', 'tanah'],
    question: 'Apa itu struktur tanah pejal?',
    answer: 'Struktur pejal (massive structure) adalah kondisi tanah yang tidak memiliki struktur atau agregat yang jelas — partikel-partikel tanah melekat erat satu sama lain tanpa ruang pori yang teratur. Ini khas terjadi pada tanah aluvial bertekstur liat yang mengalami tekanan dan pengendapan berat dalam waktu lama. Struktur pejal menyebabkan:\n\n- Perkolasi air sangat lambat\n- Akar tanaman sulit menembus\n- Aerasi (pertukaran udara) tanah buruk\n- Tanah menjadi sangat keras saat kering\n\nUntuk pertanian, struktur pejal perlu diolah (dibajak) untuk menciptakan struktur remah yang lebih baik bagi pertumbuhan tanaman.'
  },
  {
    keywords: ['konsistensi', 'liat', 'lengket', 'plastis'],
    question: 'Apa arti konsistensi liat dan lengket?',
    answer: 'Konsistensi liat dan lengket menggambarkan sifat fisik tanah saat basah:\n\n- **Liat (plastic)** — Tanah dapat dibentuk menjadi benang atau bola tanpa retak. Ini menunjukkan kandungan mineral liat (clay minerals seperti montmorillonite dan kaolinite) yang tinggi.\n- **Lengket (sticky)** — Tanah menempel kuat pada jari atau alat saat ditekan. Ini disebabkan oleh lapisan air yang terikat erat pada permukaan partikel liat.\n\nKonsistensi ini penting untuk:\n✅ Konstruksi tambak (tanah kedap air)\n✅ Pembuatan batu bata (mudah dicetak)\n❌ Pertanian mekanis (traktor bisa terbenam)\n❌ Fondasi bangunan (perlu perkuatan)'
  }
];

// Greeting message
const GREETING = {
  role: 'assistant',
  content: 'Halo! 👋 Saya asisten AI GeoDoc. Saya bisa menjawab pertanyaan tentang tanah aluvial, penelitian Kelompok 2, dan geografi Cilamaya Wetan. Silakan tanyakan apa saja atau pilih dari pertanyaan di bawah!'
};

// Quick reply templates
const QUICK_REPLIES = [
  'Apa itu tanah aluvial?',
  'Bagaimana tekstur tanahnya?',
  'Mengapa haranya tinggi?',
  'Apa saja 5 zona aluvial?',
  'Mengapa drainasenya buruk?',
  'Dimana lokasi penelitian?'
];

/**
 * Find the best matching answer using keyword scoring
 */
function findBestAnswer(userMessage) {
  const msg = userMessage.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    
    // Check keyword matches
    for (const keyword of item.keywords) {
      if (msg.includes(keyword.toLowerCase())) {
        score += keyword.split(' ').length; // Multi-word keywords score higher
      }
    }

    // Check if the question itself is similar
    const questionWords = item.question.toLowerCase().split(' ');
    for (const word of questionWords) {
      if (word.length > 3 && msg.includes(word)) {
        score += 0.5;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && bestScore >= 1) {
    return bestMatch.answer;
  }

  // Fallback response
  return 'Maaf, saya belum memiliki informasi spesifik tentang pertanyaan tersebut. Coba tanyakan tentang: tanah aluvial, tekstur tanah, zona sebaran, perikanan tambak, atau lokasi penelitian Kelompok 2 di Cilamaya Wetan. 🌍';
}

/**
 * Vercel Serverless Function handler
 */
export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    // Return quick replies and greeting for initial load
    return res.status(200).json({
      greeting: GREETING,
      quickReplies: QUICK_REPLIES
    });
  }

  if (req.method === 'POST') {
    const { message } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const answer = findBestAnswer(message);

    return res.status(200).json({
      role: 'assistant',
      content: answer
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
