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