const ambatukamImg = document.querySelector(".banner-image");

const getNewBanner = async () =>
{
    var url = "https://rzcodez.github.io/banner-web/banner-img.json";    
    
    const response = await fetch(url);
    
    console.log(typeof response);
    
    const allImages = await response.json();
    
    const index = Math.floor(Math.random()*allImages.length);
    
    const image = allImages[index].img;
    
    ambatukamImg.style.backgroundImage = `url("${image}")`;
}
getNewBanner();