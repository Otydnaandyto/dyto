// const navLinkEls = document.querySelectorAll('.nav_link');

// navLinkEls.foreach(navLinkEL => {
//     navlink.addEventListener('click', () => {
//         document.querySelector('.active')?.classList.remove('active')
//         navLinkEL.classList.add('active');
//     });
// });


function WhatsApp() {
    const nama = document.getElementById("namaLengkap").value;
    const email = document.getElementById("eml").value;
    const Telp = document.getElementById("NoTelp").value;
    const subjek = document.getElementById("Sbjk").value;
    const text = document.getElementById("pesan").value;

    console.log(`Nama kamu adalah ${nama}`);
    console.log(`Email kamu adalah ${email}`);
    console.log(`Nomer telephone kamu adlaah ${Telp}`);
    console.log(`Subjek yang ingin kamu sampaikan adalah ${subjek}`);
    console.log(`Pesan yang kamu sampaikan adalah ${text}`);


    const walink = "https://wa.me/6281808478913?text="
        + "Nama: " + nama + "%0a"
        + "Email: " + email + "%0a"
        + "Nomor Telepon: " + Telp + "%0a"
        + "Subjek: " + subjek + "%0a"
        + "Pesan: " + text;

    window.open(walink, '_blank').focus();
}


