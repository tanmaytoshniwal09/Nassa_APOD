const apiKey = "VZrYFH9YCfMrd7Lha2by1GnSH0tvhNPjM9duDvUz";
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
const picName=document.getElementById("PicName");
const picIntro=document.getElementById("intro");
const imageElement = document.querySelector(".apod-image");
const imageDate=document.querySelector("#date");
const copyright=document.querySelector("#copyright");
const changeWallpaper=async function(){
    try {
        // Fetch APOD from NASA API
      
        const response = await fetch(url);
        const data = await response.json();
        // Extracting the Pic name
        PicName.innerText=data.title;

        // Ectractiong explanation of the pic 
        picIntro.innerText= data.explanation;

        // Extract image URL
        console.log("explaination--> "+data.explanation);
        // const imageUrl = data.url;
         imageElement.src = data.url;
         
         imageDate.innerText=data.date;
        
         copyright.innerText=data.copyright;

        // Append image element to the container
        // const container = document.getElementById("image-container");
        // container.appendChild(imgElement);
   
    } catch (error) {
        console.error('Error:', error);
    }
}

const button = document.getElementById("fetch-image-button");
button.addEventListener("click", changeWallpaper);
