// ============================================================
// DAFTAR LAGU DEMO / AUDIO (Di luar Spotify)
// ============================================================
// Cukup tambahkan judul dan nama file MP3 yang Anda upload ke folder audio/
const audioTracks = [
    {
        title: "POPOPO",
        tag: "Demo / Audio",
        file: "audio/POPOPO.mp3"
    }
];

function renderAudioTracks() {
    const container = document.getElementById('audioTrackList');
    if (!container) return;
    
    if (audioTracks.length === 0) {
        container.innerHTML = `
            <div class="info-box" style="text-align: center;">
                <span class="lang-en">✦ No unreleased audio tracks yet.</span>
                <span class="lang-id">✦ Belum ada track audio unreleased.</span>
            </div>
        `;
        return;
    }
    
    container.innerHTML = audioTracks.map(track => `
        <div class="audio-track-card">
            <div class="audio-track-info">
                <div>
                    <div class="audio-track-title">${track.title}</div>
                    <p style="color: var(--muted); font-size: 0.82rem; margin: 0.2rem 0 0;">Astari &nbsp;·&nbsp; Audio Track</p>
                </div>
                <span class="audio-track-tag">${track.tag || 'Audio'}</span>
            </div>
            <audio controls class="custom-audio-player" preload="metadata">
                <source src="${track.file}" type="audio/mpeg">
                Browser Anda tidak mendukung pemutar audio ini.
            </audio>
        </div>
    `).join('');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAudioTracks);
} else {
    renderAudioTracks();
}
