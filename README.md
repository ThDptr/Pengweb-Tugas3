# Analisis Ulasan Produk Berbasis AI
**Review Analyzer - THD Edition**

Dibuat oleh: **Tengku Hafid Diraputra**  
NIM: **123140043**

---

## Deskripsi Proyek

Aplikasi web modern untuk menganalisis sentimen dan mengekstrak insight dari ulasan produk menggunakan kecerdasan buatan (AI). Sistem ini memanfaatkan teknologi Natural Language Processing untuk memberikan analisis mendalam tentang opini pelanggan.

## Fitur Utama

✨ **Analisis Sentimen Real-time**
- Deteksi otomatis sentimen: Positif, Negatif, atau Netral
- Skor kepercayaan tinggi menggunakan model DistilBERT
- Visualisasi hasil yang intuitif dengan kode warna

🔍 **Ekstraksi Poin Kunci**
- Identifikasi otomatis tema utama dari ulasan
- Ringkasan insight berbasis AI menggunakan Google Gemini
- Dukungan multi-bahasa (Inggris & Indonesia)

📊 **Riwayat Analisis**
- Penyimpanan otomatis semua analisis
- Pagination untuk navigasi mudah
- Filter berdasarkan sentimen

🎨 **Desain Modern & Responsif**
- Tema eksklusif: Hitam, Emas, dan Putih
- Mode gelap/terang dengan animasi halus
- Antarmuka responsif untuk semua perangkat
- Branding THD yang elegan

## Teknologi yang Digunakan

**Frontend:**
- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Shadcn/ui Components
- TypeScript

**Backend:**
- Python 3.13 (Pyramid Framework)
- PostgreSQL (Database)
- SQLAlchemy (ORM)

**AI/ML:**
- Hugging Face Transformers (DistilBERT)
- Google Gemini API
- Natural Language Processing

## Cara Menjalankan

### Prasyarat
- Python 3.13+
- PostgreSQL
- Node.js 18+
- API Keys (Hugging Face & Gemini)

### Setup Backend
```bash
cd backend
uv venv
.venv\Scripts\activate
uv pip install -r requirements.txt
uv pip install -e .
pserve development.ini
```

### Setup Frontend
```bash
cd frontend
bun install
bun run dev
```

Aplikasi akan berjalan di:
- Frontend: http://localhost:5173
- Backend API: http://localhost:6543

## Struktur Proyek

```
├── backend/          # Python Pyramid API
│   ├── app/         # Aplikasi utama
│   ├── models.py    # Model database
│   └── services/    # AI services
├── frontend/        # React frontend
│   ├── src/
│   │   ├── components/  # Komponen UI
│   │   ├── stores/      # State management
│   │   └── lib/         # Utilities
└── assets/          # Aset (logo, screenshot)
```

## Fitur Keamanan

- Input validation & sanitization
- Error handling komprehensif
- Database transaction management
- Environment variables untuk API keys

## Lisensi

MIT License

---

**Dibuat dengan ❤️ dan AI**  
© 2025 Tengku Hafid Diraputra
