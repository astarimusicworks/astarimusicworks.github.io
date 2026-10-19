function setLanguage(lang) {
    if (!lang || (lang !== 'en' && lang !== 'id')) lang = 'en';
    try {
        localStorage.setItem('astari_lang', lang);
    } catch(e) {}
    
    if (document.body) {
        if (lang === 'en') {
            document.body.classList.remove('lang-id');
            document.body.classList.add('lang-en');
        } else {
            document.body.classList.remove('lang-en');
            document.body.classList.add('lang-id');
        }
    }
    
    document.querySelectorAll('.btn-en').forEach(b => {
        if (lang === 'en') b.classList.add('active');
        else b.classList.remove('active');
    });
    document.querySelectorAll('.btn-id').forEach(b => {
        if (lang === 'id') b.classList.add('active');
        else b.classList.remove('active');
    });
}

function initLanguage() {
    let saved = 'en';
    try {
        saved = localStorage.getItem('astari_lang') || 'en';
    } catch(e) {}
    setLanguage(saved);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}
