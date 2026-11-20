# QuestPlay - Sistem Manajemen Rental Game (PS / Xbox / PC)

Aplikasi web manajemen rental game di tempat (_on-site_) untuk mengelola operasional konsol PlayStation, Xbox, dan PC secara _real-time_[cite: 1].

## Fitur Utama

- **Live Per-Second Billing:** Perhitungan biaya berjalan setiap detik secara presisi tanpa pembulatan per jam[cite: 1].
- **Papan Perangkat Publik:** Pemantauan status seluruh unit (Tersedia, Dipesan, Dipakai, Dijeda, Maintenance) secara langsung tanpa perlu login[cite: 1].
- **Sistem Gamifikasi Member:** Akumulasi poin berbasis _ledger_, sistem _tier_ (Bronze, Silver, Gold), serta penyelesaian _quest_ harian/mingguan yang dapat ditukar hadiah[cite: 1].
- **Reservasi & F&B POS:** Pemesanan unit dengan batas waktu tahan (_hold time_), pemesanan jajanan ke unit, serta dukungan pembayaran tunai maupun _payment gateway_[cite: 1].

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL (Prisma ORM)[cite: 1]

---

## Progres Milestone

### Tahap 1 (20 November 2026) — Setup Fondasi & Arsitektur Proyek

- **Setup Backend Express.js:** Inisialisasi server REST API menggunakan Express.js beserta konfigurasi middleware keamanan dasar (`helmet`, `cors`, dan `dotenv`).
- **Inisialisasi Frontend React:** Pembuatan kerangka aplikasi Single Page Application (SPA) menggunakan React dan Vite untuk performa _development_ yang optimal.
- **Konfigurasi Styling Tailwind CSS:** Integrasi Tailwind CSS pada proyek frontend serta pembersihan template awal untuk persiapan antarmuka pengguna.
