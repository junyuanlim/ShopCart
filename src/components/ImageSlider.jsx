import React from "react"


export default function ImageSlider(props) {
    const imageArray = [
        {
            url:"https://as1.ftcdn.net/v2/jpg/03/20/68/66/1000_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg",
            text:"Come shop with us"
        },
        {
            url:"https://images.pexels.com/photos/4049209/pexels-photo-4049209.jpeg",
            text:""

        },
        {
            url:"https://images.pexels.com/photos/4049209/pexels-photo-4049209.jpeg"
        },
        {
            url:"https://images.pexels.com/photos/4049209/pexels-photo-4049209.jpeg"
        },
        {
            url:"https://images.pexels.com/photos/4049209/pexels-photo-4049209.jpeg"
        },
    ]

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length)
    }
  
    const handlePreviousImage = () => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === 0) {
          return imageArray.length - 1
        } else {
          return prevIndex - 1
        }
      })
    }

    const goToImage = (imageIndex) => {
        setCurrentImageIndex(imageIndex)
    }
    
    return (
        <div className="pt-20 w-full h-[500px] max-w-[1400px] relative">
          <div
                className="w-full h-full rounded bg-cover bg-left transition-all ease-in duration-300 relative"
                style={{ backgroundImage: `url(${imageArray[currentImageIndex].url})` }}>
                <div className="absolute top-1/2 left-0 text-4xl text-gray-800 hover:text-gray-300 cursor-pointer">
                    <ion-icon onClick={handlePreviousImage} name="chevron-back-outline"></ion-icon>
                </div>
                <div className="absolute top-1/2 right-0 text-4xl text-gray-800 hover:text-gray-300 cursor-pointer">
                    <ion-icon onClick={handleNextImage} name="chevron-forward-outline"></ion-icon>
                </div>
                <div><h3 className="absolute right-1/4 top-1/4 text-3xl font-[Poppins] font-extrabold text-white">Text</h3></div>
            </div>
            <div className="flex justify-center pt-5 gap-3">
                {imageArray.map((image, imageIndex) => {
                    return <div className="text-xs cursor-pointer" key={imageIndex}>
                        <ion-icon onClick={() => goToImage(imageIndex)} name={imageIndex==currentImageIndex ? "ellipse": "ellipse-outline"}></ion-icon>
                        </div>
                })}
            </div>
        </div>
      )
}