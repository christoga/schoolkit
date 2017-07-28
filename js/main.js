/*
* © Andre Christoga 2017
* Licensed under the BSD 2-Clause License
*/

var config = {
  apiKey: "AIzaSyA371lEjqN2SQOrfMob6hi0iEjly0n1HU4",
  authDomain: "andrechristoga-84efe.firebaseapp.com",
  databaseURL: "https://andrechristoga-84efe.firebaseio.com",
  projectId: "andrechristoga-84efe",
  storageBucket: "andrechristoga-84efe.appspot.com",
  messagingSenderId: "760661944648"
};
firebase.initializeApp(config);
var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    submit_date = year + '-' + month + '-' + day;

function submitJajan() {
  var jajanInput = $('#jajanInput').val();

  firebase.database().ref('smk/pocket/' + submit_date).update({
    sisa: jajanInput
  }, function(error) {
    if (!error) {
      alert('It\'s up bro!')
    }
  })
}

function submitHomework() {
  var homeworkInput = $('#homeworkInput').val();

  firebase.database().ref('smk/homework/' + submit_date).update({
    homework: homeworkInput
  }, function(error) {
    if (!error) {
      alert('It\'s up bro!')
    }
  })
}

function getHomework() {
  firebase.database().ref('smk/homework/' + submit_date + '/homework/').on('value', function(snapshot) {
      var first = snapshot.val();
      var result = first.replace(/\n/g, "<br />")
      document.getElementById('defaultHomework').innerHTML = result;
  }, function(error) {
    if (!error) {
      alert('It\'s up bro!')
    }
  })
}

function modifyHomework() {
  var result = document.getElementById('defaultHomework').innerHTML.replace("<br>", "\n")
  $('#homeworkInput').val(result);
}

function submitNotes() {
  var notesTitle = $('#notesTitle').val();
  var notesText = $('#notesText').val();

  firebase.database().ref('smk/notes/' + submit_date).push({
    title: notesTitle,
    text: notesText
  }, function(error) {
    if (!error) {
      alert('It\'s up bro!')
    }
  })
}

function initializeAbsent() {
  firebase.database().ref('smk/absent/' + submit_date).update({
    ACHMAD_RIFKI: 'none',
    ADI_PRATAMA: 'none',
    ADINDA_CHANTIKA_LUBIS: 'none',
    AHMAD_ROMADHANI: 'none',
    AMMAR_ABDULLAH_ALZAHID: 'none',
    ANDRE_CHRISTOGA_PRAMADITYA: 'none',
    ARIEFIN_NUGROHO: 'none',
    AVRYLIYANAH_DEWY: 'none',
    BAYU_AJI: 'none',
    EDO_YUDHA_WASKITA: 'none',
    FAATHIR_RAMADHAN_ALFIRAH: 'none',
    FADHLI_FADHILAH: 'none',
    JULIDAR_FATIANI: 'none',
    KRIS_DAMAYANTI: 'none',
    M_AKHSIN_PRASETYO: 'none',
    MATHIUS: 'none',
    MOCHAMAD_RECHAN_ICHSANUL_KAMIL: 'none',
    MUHAMAD_KAMAL_BACRUR_ROZIKIN: 'none',
    MUHAMAD_RACHMAT_HIDAYAT: 'none',
    MUHAMAD_RESMI_AJI: 'none',
    MUHAMMAD_ABID_MULYANA: 'none',
    MUHAMMAD_AKBAR_HABIBY_KHALID: 'none',
    MUHAMMAD_ELVAN: 'none',
    MUHAMMAD_FADHIL_RABBANI: 'none',
    MUHAMMAD_RIVAN_AL_RASYID: 'none',
    NAHDA_KHAIRUNNISA: 'none',
    NAHLA_TARISAFITRI: 'none',
    NUR_AENI: 'none',
    RAMADHANU: 'none',
    REZA_SAFPUTRA: 'none',
    RISKI_RANDANTI: 'none',
    RIZKI_RAMADHAN_IMAN_MUDA: 'none',
    RIZKI_SALSA_BILLA: 'none',
    SYAHRUL_LESMANA: 'none',
    WINDI_AYU_WULANDARI: 'none',
    YAZID_AMIRULLAH: 'none'
  }, function(error) {
    if (!error) {
      alert('It\'s up bro!')
    }
  })
}

function completeAbsence() {
  firebase.database().ref('smk/absent/' + submit_date).update({
    ACHMAD_RIFKI: 'hadir',
    ADI_PRATAMA: 'hadir',
    ADINDA_CHANTIKA_LUBIS: 'hadir',
    AHMAD_ROMADHANI: 'hadir',
    AMMAR_ABDULLAH_ALZAHID: 'hadir',
    ANDRE_CHRISTOGA_PRAMADITYA: 'hadir',
    ARIEFIN_NUGROHO: 'hadir',
    AVRYLIYANAH_DEWY: 'hadir',
    BAYU_AJI: 'hadir',
    EDO_YUDHA_WASKITA: 'hadir',
    FAATHIR_RAMADHAN_ALFIRAH: 'hadir',
    FADHLI_FADHILAH: 'hadir',
    JULIDAR_FATIANI: 'hadir',
    KRIS_DAMAYANTI: 'hadir',
    M_AKHSIN_PRASETYO: 'hadir',
    MATHIUS: 'hadir',
    MOCHAMAD_RECHAN_ICHSANUL_KAMIL: 'hadir',
    MUHAMAD_KAMAL_BACRUR_ROZIKIN: 'hadir',
    MUHAMAD_RACHMAT_HIDAYAT: 'hadir',
    MUHAMAD_RESMI_AJI: 'hadir',
    MUHAMMAD_ABID_MULYANA: 'hadir',
    MUHAMMAD_AKBAR_HABIBY_KHALID: 'hadir',
    MUHAMMAD_ELVAN: 'hadir',
    MUHAMMAD_FADHIL_RABBANI: 'hadir',
    MUHAMMAD_RIVAN_AL_RASYID: 'hadir',
    NAHDA_KHAIRUNNISA: 'hadir',
    NAHLA_TARISAFITRI: 'hadir',
    NUR_AENI: 'hadir',
    RAMADHANU: 'hadir',
    REZA_SAFPUTRA: 'hadir',
    RISKI_RANDANTI: 'hadir',
    RIZKI_RAMADHAN_IMAN_MUDA: 'hadir',
    RIZKI_SALSA_BILLA: 'hadir',
    SYAHRUL_LESMANA: 'hadir',
    WINDI_AYU_WULANDARI: 'hadir',
    YAZID_AMIRULLAH: 'hadir'
  }, function(error) {
    if (!error) {
      alert('It\'s up bro!')
    }
  })
}

function editAbsent() {
  var nama = $('#studentName').val();
  var status = $('#studentStatus').val();

  firebase.database().ref('smk/absent/' + submit_date).update({
    [nama]: status
  })
}

