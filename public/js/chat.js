/**
 * GeoDoc - AI Chat Module (Client-side)
 * Algoritma pemahaman berbasis kosakata — tanpa API eksternal
 */

// =============================================
// KNOWLEDGE BASE
// =============================================
const KNOWLEDGE_BASE = [
    {
        keywords: ['aluvial', 'tanah aluvial', 'apa itu', 'definisi', 'pengertian'],
        answer: 'Tanah aluvial adalah jenis tanah yang terbentuk dari endapan sedimentasi material yang diangkut oleh air sungai (fluvial) dan laut (marin). Di Cilamaya Wetan, tanah ini terbentuk selama ribuan tahun di dataran rendah pesisir, menghasilkan lapisan tanah yang subur dengan tekstur halus namun drainase terbatas. Tanah aluvial umumnya berwarna kelabu gelap karena kondisi reduksi (kekurangan oksigen) di bawah permukaan.'
    },
    {
        keywords: ['tekstur', 'lempung', 'berdebu', 'jenis tekstur'],
        answer: 'Tekstur tanah aluvial di Empang Muarabaru diklasifikasikan sebagai **lempung berdebu** (silty clay loam). Ini berarti tanah mengandung campuran partikel debu (silt) dan liat (clay) yang dominan, dengan sedikit pasir. Komposisi ini membuat tanah mampu menahan air dengan baik — cocok untuk tambak dan sawah — namun memiliki drainase alami yang buruk. Ketika basah, tanah menjadi liat dan lengket; ketika kering, tanah menjadi keras dan pejal.'
    },
    {
        keywords: ['warna', 'kelabu', 'gelap', 'hitam', 'coklat'],
        answer: 'Warna kelabu gelap pada tanah aluvial Muarabaru disebabkan oleh kondisi **reduksi** (gleyification) — yaitu kondisi tanah yang jenuh air dalam waktu lama sehingga oksigen terbatas. Dalam kondisi anaerobik (tanpa oksigen), senyawa besi (Fe³⁺) tereduksi menjadi Fe²⁺ yang berwarna kelabu kebiruan. Proses ini khas terjadi di tanah pesisir rendah yang sering terendam pasang surut atau banjir sungai.'
    },
    {
        keywords: ['hara', 'subur', 'nutrisi', 'kesuburan', 'unsur'],
        answer: 'Kandungan hara tanah aluvial yang tinggi disebabkan oleh proses **sedimentasi berkelanjutan**. Sungai Cilamaya mengangkut material organik dan mineral dari hulu (pegunungan) dan mengendapkannya di dataran rendah pesisir. Selain itu, pengaruh pasang surut laut membawa material organik laut yang kaya nitrogen dan sulfur. Kombinasi kedua sumber sedimentasi ini, ditambah dengan dekomposisi material organik dalam kondisi anaerobik, menghasilkan tanah dengan kandungan hara yang sangat tinggi — ideal untuk pertanian dan perikanan tambak.'
    },
    {
        keywords: ['zona', '5 zona', 'sebaran', 'peta', 'wilayah'],
        answer: 'Penelitian mengidentifikasi 5 zona aluvial di pesisir Cilamaya Wetan:\n\n🔵 **Zona 1 — Aluvial Pesisir Muarabaru**: Lempung berdebu, kelabu gelap. Titik sampel utama. Pemanfaatan: tambak & sawah.\n\n🟣 **Zona 2 — Aluvial Deltai Cilamaya**: Lempung liat berpasir, endapan delta sungai. Pemanfaatan: sawah irigasi teknis.\n\n🔵 **Zona 3 — Aluvial Rendaman Pasang Surut**: Lempung liat berdebu, pengaruh marin dominan. Pemanfaatan: tambak udang & bandeng.\n\n🟢 **Zona 4 — Aluvial Backswamp**: Liat berdebu, drainase sangat buruk, warna kelabu kebiruan. Pemanfaatan: tambak tradisional.\n\n🟠 **Zona 5 — Aluvial Lanau Sungai**: Lempung berlanau, endapan lanau & pasir halus. Pemanfaatan: pertanian palawija.'
    },
    {
        keywords: ['tambak', 'perikanan', 'udang', 'bandeng', 'ikan'],
        answer: 'Tanah aluvial sangat ideal untuk tambak karena sifat fisiknya yang **liat dan lengket**. Tekstur lempung berdebu membuat tanah mampu menahan air dengan sangat baik — pori-pori mikro antar partikel liat menciptakan lapisan kedap air alami. Ini berarti tambak tidak perlu dilapisi plastik atau semen, mengurangi biaya konstruksi secara signifikan. Di Muarabaru, tambak udang windu dan bandeng menjadi sumber pendapatan utama masyarakat. Kandungan hara tinggi juga mendukung pertumbuhan plankton dan organisme pakan alami ikan.'
    },
    {
        keywords: ['sawah', 'pertanian', 'padi', 'tanaman', 'palawija'],
        answer: 'Tanah aluvial mendukung berbagai jenis pertanian:\n\n🌾 **Padi sawah** — Tanaman utama karena tanah mampu menahan air irigasi. Kandungan hara tinggi menghasilkan produktivitas padi yang baik.\n\n🥬 **Palawija** (kacang-kacangan, cabai, tomat) — Di zona lanau sungai (Zona 5) yang drainasenya lebih baik.\n\n🌿 **Sayuran daun** — Kangkung, bayam, dan selada tumbuh baik karena kandungan nitrogen tinggi.\n\n⚠️ **Catatan**: Tanaman yang membutuhkan drainase baik (seperti singkong dan jagung) kurang cocok di zona pesisir karena genangan air berkepanjangan.'
    },
    {
        keywords: ['bata', 'material', 'bangunan', 'batu bata', 'konstruksi'],
        answer: 'Tanah aluvial dengan tekstur lempung berdebu sangat cocok untuk pembuatan **batu bata merah** karena beberapa alasan:\n\n1. **Plastisitas tinggi** — Kandungan liat membuat tanah mudah dibentuk dan dicetak tanpa retak\n2. **Kohesi kuat** — Partikel halus saling mengikat erat saat dikeringkan\n3. **Susut rendah** — Kandungan debu (silt) mengurangi penyusutan saat pembakaran\n4. **Ketersediaan melimpah** — Tanah aluvial tersedia dalam jumlah besar di pesisir\n\nDi Karawang, industri batu bata rumah tangga banyak ditemukan di sepanjang pesisir Cilamaya.'
    },
    {
        keywords: ['drainase', 'air', 'genangan', 'banjir', 'rob'],
        answer: 'Drainase buruk pada tanah aluvial disebabkan oleh kombinasi beberapa faktor:\n\n1. **Tekstur halus** — Partikel liat dan debu berukuran sangat kecil (<0.002mm), menciptakan pori-pori mikro yang menghambat aliran air\n2. **Topografi datar** — Dataran rendah pesisir memiliki kemiringan hampir 0°, sehingga air tidak mengalir secara gravitasi\n3. **Tinggi muka air tanah** — Kedekatan dengan laut membuat muka air tanah sangat tinggi\n4. **Pasang surut** — Air laut masuk ke daratan saat pasang, menghambat drainase\n5. **Struktur pejal** — Tanah tidak memiliki struktur remah yang memungkinkan perkolasi air\n\n⚠️ Masalah rob (banjir laut) semakin parah akibat kenaikan muka laut dan penurunan tanah (land subsidence) di pesisir utara Jawa.'
    },
    {
        keywords: ['fluvial', 'sungai', 'endapan sungai', 'sedimentasi'],
        answer: 'Sedimentasi fluvial adalah proses pengendapan material oleh aliran sungai. Sungai Cilamaya mengangkut material dari hulu (batuan, mineral, bahan organik) dan mengendapkannya saat kecepatan air menurun di dataran rendah. Material halus seperti debu dan liat terbawa paling jauh dan mengendap di muara dan pesisir — inilah yang membentuk tanah aluvial. Proses ini berlangsung terus-menerus selama ribuan tahun, membangun lapisan tanah yang tebal dan subur di sepanjang pesisir Karawang.'
    },
    {
        keywords: ['marin', 'laut', 'pasang surut', 'endapan laut'],
        answer: 'Sedimentasi marin adalah proses pengendapan material oleh laut, terutama melalui mekanisme pasang surut. Di pesisir Cilamaya Wetan, air laut membawa material halus (lumpur, pasir halus, bahan organik laut) ke daratan saat pasang dan mengendapkannya saat surut. Proses ini membentuk zona rendaman pasang surut (tidal flat) yang khas di pesisir utara Jawa. Sedimentasi marin memberikan pengaruh berbeda dibanding fluvial — material marin cenderung lebih bergaram (salin) dan mengandung mineral laut seperti pyrite yang bisa menyebabkan tanah masam jika dikeringkan (acid sulfate soil).'
    },
    {
        keywords: ['lokasi', 'tempat', 'mana', 'dimana', 'cilamaya', 'muarabaru', 'karawang'],
        answer: 'Penelitian dilakukan di **Empang Muarabaru**, Desa Muarabaru, Kecamatan Cilamaya Wetan, Kabupaten Karawang, Jawa Barat. Titik koordinat sampel utama: **6°12\'09.5"S 107°36\'08.7"E** (-6.202639, 107.602417). Lokasi ini berada di pesisir utara Jawa Barat yang merupakan bagian dari dataran aluvial pesisir Karawang — salah satu kawasan pertanian dan perikanan tambak terbesar di Jawa Barat.'
    },
    {
        keywords: ['kelompok', 'anggota', 'siapa', 'tim', 'peneliti'],
        answer: 'Kelompok 2 Kelas X-11 SMAN 1 Cilamaya terdiri dari 6 anggota:\n\n1. **Batara**\n2. **Fahri**\n3. **Nurul**\n4. **Yulia**\n5. **Nike**\n6. **Nazwa**\n\nDengan bimbingan guru pengajar **Ibu Yumi Sasmita, S.Pd.**'
    },
    {
        keywords: ['struktur', 'pejal', 'massive', 'tanah'],
        answer: 'Struktur pejal (massive structure) adalah kondisi tanah yang tidak memiliki struktur atau agregat yang jelas — partikel-partikel tanah melekat erat satu sama lain tanpa ruang pori yang teratur. Ini khas terjadi pada tanah aluvial bertekstur liat yang mengalami tekanan dan pengendapan berat dalam waktu lama. Struktur pejal menyebabkan:\n\n- Perkolasi air sangat lambat\n- Akar tanaman sulit menembus\n- Aerasi (pertukaran udara) tanah buruk\n- Tanah menjadi sangat keras saat kering\n\nUntuk pertanian, struktur pejal perlu diolah (dibajak) untuk menciptakan struktur remah yang lebih baik bagi pertumbuhan tanaman.'
    },
    {
        keywords: ['konsistensi', 'liat', 'lengket', 'plastis'],
        answer: 'Konsistensi liat dan lengket menggambarkan sifat fisik tanah saat basah:\n\n- **Liat (plastic)** — Tanah dapat dibentuk menjadi benang atau bola tanpa retak. Ini menunjukkan kandungan mineral liat (clay minerals seperti montmorillonite dan kaolinite) yang tinggi.\n- **Lengket (sticky)** — Tanah menempel kuat pada jari atau alat saat ditekan. Ini disebabkan oleh lapisan air yang terikat erat pada permukaan partikel liat.\n\nKonsistensi ini penting untuk:\n✅ Konstruksi tambak (tanah kedap air)\n✅ Pembuatan batu bata (mudah dicetak)\n❌ Pertanian mekanis (traktor bisa terbenam)\n❌ Fondasi bangunan (perlu perkuatan)'
    },
    {
        keywords: ['sekolah', 'sma', 'sman', 'cilamaya', 'guru', 'yumi'],
        answer: 'Penelitian ini dilakukan oleh siswa **SMAN 1 Cilamaya** (SMA Negeri 1 Cilamaya), yang terletak di Kecamatan Cilamaya, Kabupaten Karawang, Jawa Barat. Guru pengajar mata pelajaran Geografi yang membimbing penelitian ini adalah **Ibu Yumi Sasmita, S.Pd.** Sekolah ini aktif dalam kegiatan penelitian lapangan sebagai bagian dari kurikulum Geografi kelas X.'
    },
    {
        keywords: ['peta', 'interaktif', 'leaflet', 'openstreetmap', 'gis'],
        answer: 'Peta interaktif pada laporan ini menggunakan **Leaflet.js** dengan data dari **OpenStreetMap**. Peta menampilkan 5 zona aluvial berwarna, 10 titik sampel tambahan, dan jalur Sungai Cilamaya sebagai sumber sedimentasi fluvial. Peta mendukung zoom, drag (desktop), dan two-finger gesture (mobile). Legenda otomatis tersedia di pojok kanan bawah peta.'
    },
    {
        keywords: ['halo', 'hai', 'hi', 'hello', 'selamat', 'pagi', 'siang', 'sore', 'malam'],
        answer: 'Halo! 👋 Selamat datang di GeoDoc AI! Saya siap menjawab pertanyaan Anda tentang:\n\n🌍 Tanah aluvial dan karakteristiknya\n🔬 Tekstur, warna, struktur, dan konsistensi tanah\n🗺️ 5 zona sebaran aluvial di Cilamaya\n🌾 Pemanfaatan tanah untuk pertanian & perikanan\n💧 Drainase dan masalah rob\n👥 Anggota Kelompok 2\n\nSilakan tanyakan apa saja! 😊'
    }
];

// Quick reply suggestions
const QUICK_REPLIES = [
    'Apa itu tanah aluvial?',
    'Bagaimana tekstur tanahnya?',
    'Mengapa haranya tinggi?',
    'Apa saja 5 zona aluvial?',
    'Mengapa drainasenya buruk?',
    'Dimana lokasi penelitian?'
];

// =============================================
// ALGORITMA PEMAHAMAN BERBASIS KOSAKATA
// =============================================
function findBestAnswer(userMessage) {
    const msg = userMessage.toLowerCase().trim();

    // Normalisasi kata informal
    const normalizations = {
        'gimana': 'bagaimana', 'gmn': 'bagaimana', 'dmn': 'dimana',
        'mn': 'dimana', 'apa': 'apa', 'knp': 'kenapa', 'mengapa': 'mengapa',
        'yg': 'yang', 'tdk': 'tidak', 'ga': 'tidak', 'gak': 'tidak',
        'utk': 'untuk', 'dgn': 'dengan', 'bs': 'bisa', 'bgt': 'banget'
    };

    let normalizedMsg = msg;
    for (const [slang, formal] of Object.entries(normalizations)) {
        normalizedMsg = normalizedMsg.replace(new RegExp('\\b' + slang + '\\b', 'g'), formal);
    }

    let bestMatch = null;
    let bestScore = 0;

    for (const item of KNOWLEDGE_BASE) {
        let score = 0;

        // 1. Pencocokan kata kunci (multi-word = skor lebih tinggi)
        for (const keyword of item.keywords) {
            const kw = keyword.toLowerCase();
            if (normalizedMsg.includes(kw)) {
                score += kw.split(' ').length * 2;
            }
            // Pencocokan parsial untuk kata tunggal
            if (kw.length > 3 && normalizedMsg.includes(kw.substring(0, Math.ceil(kw.length * 0.7)))) {
                score += 0.5;
            }
        }

        // 2. Kemiripan kosakata dengan pertanyaan template
        const questionWords = item.keywords.join(' ').toLowerCase().split(/\s+/);
        const msgWords = normalizedMsg.split(/\s+/);
        for (const mWord of msgWords) {
            if (mWord.length > 2 && questionWords.some(qWord => qWord.includes(mWord) || mWord.includes(qWord))) {
                score += 0.8;
            }
        }

        // 3. Bonus kecocokan eksak
        for (const keyword of item.keywords) {
            if (normalizedMsg === keyword.toLowerCase()) {
                score += 5;
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

    return 'Maaf, saya belum memiliki informasi spesifik tentang pertanyaan tersebut. Coba tanyakan tentang: tanah aluvial, tekstur tanah, zona sebaran, perikanan tambak, drainase, atau lokasi penelitian Kelompok 2 di Cilamaya Wetan. 🌍';
}

// =============================================
// CHAT UI CONTROLLER
// =============================================
export function initChat() {
    const chatFab = document.getElementById('chatFab');
    const chatWindow = document.getElementById('chatWindow');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatQuickReplies = document.getElementById('chatQuickReplies');
    const chatBadge = document.getElementById('chatBadge');

    let chatOpen = false;
    let chatInitialized = false;
    let isChatLoading = false;

    // Toggle chat window
    function toggleChat() {
        chatOpen = !chatOpen;
        chatFab.classList.toggle('open', chatOpen);
        chatWindow.classList.toggle('open', chatOpen);

        if (chatOpen && !chatInitialized) {
            addMessage('assistant', 'Halo! 👋 Saya asisten AI GeoDoc. Saya bisa menjawab pertanyaan tentang tanah aluvial, penelitian Kelompok 2, dan geografi Cilamaya Wetan. Silakan tanyakan apa saja atau pilih dari pertanyaan di bawah!');
            renderQuickReplies(QUICK_REPLIES);
            chatInitialized = true;
        }

        if (chatOpen) {
            setTimeout(() => chatInput.focus(), 400);
        }
    }

    chatFab.addEventListener('click', toggleChat);

    // Render quick reply buttons
    function renderQuickReplies(replies) {
        chatQuickReplies.innerHTML = '';
        replies.forEach(text => {
            const btn = document.createElement('button');
            btn.className = 'quick-reply-btn';
            btn.textContent = text;
            btn.addEventListener('click', () => {
                sendMessage(text);
            });
            chatQuickReplies.appendChild(btn);
        });
    }

    // Add message bubble to chat
    function addMessage(role, content) {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${role}`;

        if (role === 'assistant') {
            const formatted = content
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br>')
                .replace(/🔵|🟣|🟢|🟠|🌾|🥬|🌿|⚠️|✅|❌/g, match => match);
            bubble.innerHTML = `<p>${formatted}</p>`;
        } else {
            bubble.textContent = content;
        }

        chatQuickReplies.innerHTML = '';
        chatMessages.appendChild(bubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Show typing indicator
    function showTyping() {
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.id = 'typingIndicator';
        typing.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typing);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Hide typing indicator
    function hideTyping() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    // Kirim pesan (100% client-side, tanpa API)
    async function sendMessage(text) {
        if (!text.trim() || isChatLoading) return;

        const message = text.trim();
        chatInput.value = '';
        chatSendBtn.disabled = true;
        chatQuickReplies.innerHTML = '';

        // Tambah pesan pengguna
        addMessage('user', message);

        // Tampilkan typing indicator (simulasi delay)
        isChatLoading = true;
        showTyping();

        // Simulasi delay agar terasa natural (800-1500ms)
        const delay = 800 + Math.random() * 700;
        await new Promise(resolve => setTimeout(resolve, delay));

        // Cari jawaban terbaik dari knowledge base lokal
        const answer = findBestAnswer(message);
        hideTyping();
        addMessage('assistant', answer);

        // Tampilkan follow-up quick replies
        const followUpReplies = QUICK_REPLIES
            .filter(q => {
                const qKey = q.toLowerCase().split(' ')[0].substring(0, 5);
                return !message.toLowerCase().includes(qKey);
            })
            .slice(0, 3);
        if (followUpReplies.length > 0) {
            renderQuickReplies(followUpReplies);
        }

        isChatLoading = false;
    }

    // Input handling
    chatInput.addEventListener('input', () => {
        chatSendBtn.disabled = !chatInput.value.trim();
    });

    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(chatInput.value);
        }
    });

    chatSendBtn.addEventListener('click', () => {
        sendMessage(chatInput.value);
    });

    // Auto-open chat hint after 5 seconds (badge pulse)
    setTimeout(() => {
        if (!chatOpen) {
            chatBadge.style.animation = 'badge-pulse 1s infinite';
        }
    }, 5000);
}
