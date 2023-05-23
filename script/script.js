function validate() {
    let email = document.getElementById("email").value;
    let produk = document.getElementById("produk").value;
    let jam = document.getElementById("jam").value;
    let durasi = document.getElementById("durasi").value;


    let dur = "false";
    let pro = "false";
    let mail = "false";
    let time = "false";
    if (!email.includes("@")) {
        alert("Please input your email");
        mail = "false";
    } else {
        mail = "true";
    }

    if (produk == "select your room") {
        alert("Please select your room");
        pro = "false";
    } else {
        pro = "true";
    }

    if (jam == "select your time") {
        alert("please select your time");
        time = "false";
    } else {
        time = "true";
    }

    if (durasi == "select your duration") {
        alert("Please select your duration");
        dur = "false";
    } else {
        dur = "true";
    }

    console.log(mail);
    console.log(pro);
    console.log(dur);
    console.log(time);

    if (mail == "true" && pro == "true" && dur == "true" && time == "true") {
        dur = "false";
        pro = "false";
        mail = "false";
        time = "false";
        console.log(mail);
        console.log(pro);
        console.log(dur);
        console.log(time);
        location.assign("sukses.html");
    }
}

//
var roomImages = ["", "images/11.jpg", "images/12.jpg", "images/13.jpg", "images/14.jpg", "images/15.jpg", "images/16.jpg", "images/17.jpg", "images/18.jpg"];
var currentImageIndex = 0;
var roomSelect = document.getElementById("produk");

roomSelect.addEventListener("change", function() {
    var roomIndex = roomSelect.selectedIndex;
    if (roomIndex >= 0 && roomIndex < roomImages.length) {
        currentImageIndex = roomIndex;
        document.getElementById("room-image").src = roomImages[currentImageIndex];
    }
});