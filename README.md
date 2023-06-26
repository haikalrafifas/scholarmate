# Scholarmate
---
Aplikasi web penyedia informasi beasiswa, profil jurusan, dan prospek karir.

# Fitur-Fitur
---
1. Server secara otomatis membuat request API eksternal setiap 1 menit, lalu menambahkan/merubah data di dalam database MySQL.
2. Terdapat API lokal untuk mengambil data beasiswa berdasarkan id dari database di endpoint `/api/scholarship/:id`, namun untuk mengambil semua data, terdapat pada endpoint `/api/scholarship/all`.
3. Halaman statis di endpoint `/`.

# Dependensi
---
- NodeJS (axios, dotenv, express, mysql2, node-cron)
- MySQL

# Inisialisasi
---
1. Install terlebih dahulu dependensi yang dibutuhkan
2. Nyalakan daemon MySQL, baik menggunakan CLI maupun dengan GUI seperti XAMPP
   ```
   /path/to/mysqld
   ```
3. Buka terminal menuju source code
   ```
   cd /path/to/scholarmate
   ```
4. Import file SQL ke database, baik dengan CLI maupun dengan GUI seperti phpMyAdmin
   ```
   /path/to/mysql -u [username] -p < scholarmate.sql
   ```
5. Jalankan perintah dibawah pada terminal dan tunggu hingga selesai
   ```
   npm install
   ```
6. Jika sudah, nyalakan server dengan perintah dibawah
   ```
   npm start
   ```