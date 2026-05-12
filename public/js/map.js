export function initMap() {
    const sampleLocation = [-6.202639, 107.602417]; // Lokasi sampel utama

    const map = L.map('map').setView(sampleLocation, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // =============================================
    // ZONA ALUVIAL (POLYGONS)
    // =============================================

    // Zona 1: Aluvial Pesisir Muarabaru
    const zona1 = L.polygon([
        [-6.190, 107.585],
        [-6.190, 107.620],
        [-6.215, 107.620],
        [-6.215, 107.585]
    ], {
        color: '#2563eb',
        fillColor: '#2563eb',
        fillOpacity: 0.25,
        weight: 2
    }).addTo(map);
    zona1.bindPopup("<b>Zona 1 – Aluvial Pesisir Muarabaru</b><br>Lempung berdebu, kelabu gelap.<br>Konsistensi: Liat & lengket.<br>Kandungan hara: Tinggi.<br>Pemanfaatan: Tambak & sawah.");

    // Zona 2: Aluvial Deltai Cilamaya
    const zona2 = L.polygon([
        [-6.170, 107.545],
        [-6.170, 107.580],
        [-6.195, 107.580],
        [-6.195, 107.545]
    ], {
        color: '#7c3aed',
        fillColor: '#7c3aed',
        fillOpacity: 0.20,
        weight: 2,
        dashArray: '6, 4'
    }).addTo(map);
    zona2.bindPopup("<b>Zona 2 – Aluvial Deltai Cilamaya</b><br>Endapan delta sungai Cilamaya.<br>Tekstur: Lempung liat berpasir.<br>Pemanfaatan: Sawah irigasi teknis.");

    // Zona 3: Aluvial Rendaman Pasang Surut
    const zona3 = L.polygon([
        [-6.210, 107.620],
        [-6.210, 107.660],
        [-6.240, 107.660],
        [-6.240, 107.620]
    ], {
        color: '#0891b2',
        fillColor: '#0891b2',
        fillOpacity: 0.20,
        weight: 2,
        dashArray: '6, 4'
    }).addTo(map);
    zona3.bindPopup("<b>Zona 3 – Aluvial Rendaman Pasang Surut</b><br>Pengaruh marin (laut) dominan.<br>Tekstur: Lempung liat berdebu.<br>Pemanfaatan: Tambak udang & bandeng.");

    // Zona 4: Aluvial Backswamp (Rawa Belakang)
    const zona4 = L.polygon([
        [-6.220, 107.545],
        [-6.220, 107.585],
        [-6.250, 107.585],
        [-6.250, 107.545]
    ], {
        color: '#059669',
        fillColor: '#059669',
        fillOpacity: 0.18,
        weight: 2,
        dashArray: '6, 4'
    }).addTo(map);
    zona4.bindPopup("<b>Zona 4 – Aluvial Backswamp</b><br>Rawa belakang sungai, drainase buruk.<br>Tekstur: Liat berdebu, warna kelabu kebiruan.<br>Pemanfaatan: Tambak tradisional.");

    // Zona 5: Aluvial Lanau Sungai Cilamaya
    const zona5 = L.polygon([
        [-6.160, 107.580],
        [-6.160, 107.620],
        [-6.185, 107.620],
        [-6.185, 107.580]
    ], {
        color: '#d97706',
        fillColor: '#d97706',
        fillOpacity: 0.18,
        weight: 2,
        dashArray: '6, 4'
    }).addTo(map);
    zona5.bindPopup("<b>Zona 5 – Aluvial Lanau Sungai Cilamaya</b><br>Endapan lanau & pasir halus sungai.<br>Tekstur: Lempung berlanau.<br>Pemanfaatan: Pertanian palawija.");

    // =============================================
    // TITIK SAMPEL MARKERS
    // =============================================

    // Marker utama (titik sampel Kelompok 2)
    const mainMarker = L.marker(sampleLocation).addTo(map);
    mainMarker.bindPopup("<b>🔬 Titik Sampel Kelompok 2</b><br>Empang Muarabaru, Cilamaya Wetan.<br>Jenis: Tanah Aluvial<br>Tekstur: Lempung Berdebu").openPopup();

    // Titik sampel tambahan di sekitar zona
    const samplePoints = [
        { lat: -6.195, lng: 107.595, label: "Sampel A – Tambak Muarabaru Utara", desc: "Lempung liat, drainase sangat buruk" },
        { lat: -6.210, lng: 107.610, label: "Sampel B – Pesisir Muarabaru Selatan", desc: "Lempung berdebu, pengaruh pasang surut" },
        { lat: -6.180, lng: 107.565, label: "Sampel C – Delta Cilamaya", desc: "Lempung liat berpasir, endapan delta" },
        { lat: -6.225, lng: 107.640, label: "Sampel D – Tambak Pasang Surut", desc: "Lempung liat berdebu, marin dominan" },
        { lat: -6.235, lng: 107.565, label: "Sampel E – Backswamp Rawa", desc: "Liat berdebu, warna kelabu kebiruan" },
        { lat: -6.170, lng: 107.600, label: "Sampel F – Tepi Sungai Cilamaya", desc: "Lempung berlanau, endapan lanau sungai" },
        { lat: -6.200, lng: 107.550, label: "Sampel G – Sawah Irigasi", desc: "Lempung liat, kandungan hara tinggi" },
        { lat: -6.230, lng: 107.610, label: "Sampel H – Mangrove Pesisir", desc: "Lempung berdebu, kandungan organik tinggi" },
        { lat: -6.165, lng: 107.590, label: "Sampel I – Lahan Pertanian", desc: "Lempung berlanau, cocok palawija" },
        { lat: -6.215, lng: 107.575, label: "Sampel J – Rawa Belakang Sungai", desc: "Liat, drainase sangat buruk" }
    ];

    // Custom icon untuk titik sampel tambahan
    const sampleIcon = L.divIcon({
        html: '<div style="background:#3b82f6;width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.4);"></div>',
        className: '',
        iconSize: [12, 12],
        iconAnchor: [6, 6]
    });

    samplePoints.forEach(sp => {
        const m = L.marker([sp.lat, sp.lng], { icon: sampleIcon }).addTo(map);
        m.bindPopup(`<b>${sp.label}</b><br>${sp.desc}`);
    });

    // =============================================
    // SUNGAI CILAMAYA (garis biru)
    // =============================================
    const sungaiCilamaya = L.polyline([
        [-6.140, 107.560],
        [-6.155, 107.570],
        [-6.170, 107.585],
        [-6.185, 107.595],
        [-6.200, 107.602],
        [-6.215, 107.610],
        [-6.230, 107.625],
        [-6.245, 107.645]
    ], {
        color: '#0ea5e9',
        weight: 3,
        opacity: 0.7,
        dashArray: '8, 6'
    }).addTo(map);
    sungaiCilamaya.bindPopup("<b>Sungai Cilamaya</b><br>Sumber sedimentasi fluvial utama di wilayah ini.");

    // =============================================
    // LEGENDA PETA
    // =============================================
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
        const div = L.DomUtil.create('div', 'map-legend');
        div.innerHTML = `
            <h4>Legenda Peta</h4>
            <div class="legend-item"><div class="legend-color" style="background:#2563eb;opacity:0.7;"></div> Zona 1 – Aluvial Pesisir</div>
            <div class="legend-item"><div class="legend-color" style="background:#7c3aed;opacity:0.7;"></div> Zona 2 – Aluvial Deltai</div>
            <div class="legend-item"><div class="legend-color" style="background:#0891b2;opacity:0.7;"></div> Zona 3 – Aluvial Pasang Surut</div>
            <div class="legend-item"><div class="legend-color" style="background:#059669;opacity:0.7;"></div> Zona 4 – Aluvial Backswamp</div>
            <div class="legend-item"><div class="legend-color" style="background:#d97706;opacity:0.7;"></div> Zona 5 – Aluvial Lanau Sungai</div>
            <div class="legend-item"><div class="legend-color" style="background:#0ea5e9;"></div> Sungai Cilamaya</div>
            <div class="legend-item"><div class="legend-color" style="background:#ef4444;border-radius:50%;"></div> Titik Sampel Utama</div>
            <div class="legend-item"><div class="legend-color" style="background:#3b82f6;border-radius:50%;width:8px;height:8px;"></div> Titik Sampel Tambahan</div>
        `;
        return div;
    };
    legend.addTo(map);

    // Fit map to show all zones
    const allBounds = L.featureGroup([zona1, zona2, zona3, zona4, zona5]).getBounds();
    map.fitBounds(allBounds, { padding: [20, 20] });
}
