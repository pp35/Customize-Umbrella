window.onload = function () {
  changeBackgroundColor("blue");

  hideLogoPreview();
};

function changeSlide(index) {
  const slider = document.getElementById("slider");
  const slideWidth = document.querySelector(".slide").offsetWidth;
  const slides = document.querySelectorAll(".slide");
  const logoPreview = document.getElementById("logoPreview");

  logoPreview.style.display = "none";

  showLoader();

  setTimeout(() => {
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    slides[index].style.display = "block";

    hideLoader();

    setTimeout(() => {
      logoPreview.style.display = "block";
    }, 1000);
    uploadLogo();
  }, 1000);
}

function changeBackgroundColor(color) {
  showLoader();

  setTimeout(() => {
    document.body.style.backgroundColor = color;
    hideLoader();
  }, 1000);
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    const logoPreview = document.getElementById("logoPreview");
    logoPreview.style.display = "none";

    document.getElementById("uploadIcon").style.display = "none";
    document.getElementById("uploadLoader").style.display = "inline";

    reader.onload = function (e) {
      const logoUrl = e.target.result;
      logoPreview.style.backgroundImage = `url('${logoUrl}')`;

      setTimeout(() => {
        logoPreview.style.display = "block";
        hideLoader();
 
        document.getElementById("uploadIcon").style.display = "inline";
        document.getElementById("uploadLoader").style.display = "none";
      }, 2000);

      setTimeout(() => {
        uploadLogo();
      }, 2000);
    };
    reader.readAsDataURL(file);
  }
}

function showLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
}

function hideLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
}

function hideLogoPreview() {
  const logoPreview = document.getElementById("logoPreview");
  logoPreview.style.display = "none";
}

function uploadLogo() {
  console.log("Logo uploaded successfully!");
}
