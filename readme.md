# Sistem Informasi Sekolah
Web ini dibuat untuk menampilkan nilai nilai dari siswa di suatu sekolah. Dimana role siswa hanya dapat melihat nilai, role guru dapat menginput nilai / memperbaiki nilai, sedangkan role 'admin' untuk mengatur semua user (guru, siswa), ruang kelas, dan mata pelajaran yang diambil seorang guru.

## Versioning
* Node Js Version 12.5.0
* NPM version 
* Sequelize CLI [Node: 12.5.0, CLI: 4.0.0, ORM: 5.10.1]
* Mysql version 5.7

## Cara Menjalankannya

* ketik pada command line => sequelize db:migrate (untuk membuat table database, relasi, atribut)
* ketik pada command line => sequelize db:seed:all (untuk membuat data default secara acak / random)
* Siswa dapat menggunakan nomor induk
* Orang tua siswa dapat login menggunakan nomor hp nya
* Semua password di set 'admin'


* [ ] CRUD User
* [ ] CRUD Kelas
* [ ] CRUD Mata PElajaran
* [ ] CRUD Guru Kelas
* [ ] CRUD Detail Kelas (Guru dan SIswa)
* [ ] CRUD Nilai




