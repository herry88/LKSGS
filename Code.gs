function doGet(e) {
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('Daftar Pemenang LKS Tingkat Wilayah')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Fungsi untuk mengambil data dari Google Spreadsheet
 * Asumsi: Kolom di sheet berada dalam urutan NIS, NamaSiswa, NamaSekolah, BidangLomba, Wilayah
 * dan Baris 1 adalah Header.
 */
function getWinnersData() {
  // Mengambil data menggunakan ID Spreadsheet yang diberikan
  var spreadsheetId = "1kQSbxKvLVklqlR3XP9hstt2EGGuT4Jg8DY1Rv3H65yA";
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheets()[0]; // Mengambil sheet pertama
  var data = sheet.getDataRange().getDisplayValues();
  
  if (data.length <= 1) {
    return []; // Tidak ada data selain header
  }
  
  var winners = [];
  
  // Mulai dari i = 1 untuk melewati baris header
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    
    // Pastikan baris tidak kosong sepenuhnya
    if (row[0] || row[1]) {
      winners.push({
        nis: row[0],
        namaSiswa: row[1],
        namaSekolah: row[2],
        bidangLomba: row[3],
        wilayah: row[4]
      });
    }
  }
  
  return winners;
}

/**
 * Fungsi untuk menambahkan data pemenang baru ke Spreadsheet
 */
function addWinner(data) {
  var spreadsheetId = "1kQSbxKvLVklqlR3XP9hstt2EGGuT4Jg8DY1Rv3H65yA";
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheets()[0];
  
  // Menambahkan baris baru ke paling bawah
  sheet.appendRow([
    data.nis,
    data.namaSiswa,
    data.namaSekolah,
    data.bidangLomba,
    data.wilayah
  ]);
  
  return true; // Berhasil
}
