// Google Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCcYiHY75iQNtyjziSVQjYLP-JW1sxKQqU",
    authDomain: "basic-database-for-website.firebaseapp.com",
    databaseURL: "https://basic-database-for-website-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "basic-database-for-website",
    storageBucket: "basic-database-for-website.firebasestorage.app",
    messagingSenderId: "155093350408",
    appId: "1:155093350408:web:b253cedd59a4670b3bf9bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const visitorCountRef = database.ref('visitor_count');
const countElement = document.getElementById('visitor-count');

// Update count live
visitorCountRef.on('value', snapshot => {
  const count = snapshot.val();
  countElement.innerText = (count !== null ? count : 0);
});

// Only first visit in session add count
if (!sessionStorage.getItem("hasVisited")) {
    sessionStorage.setItem("hasVisited", "true");
    visitorCountRef.transaction(currentValue => {
        return (currentValue || 0) + 1;
    });
}
