import React, {useState} from 'react'

const BackgroundHoc = ({children, backGroundImage = "/images/bg_home_desktop.jpg"}) => {
    const [backgroundImage, setBackgroundImage] = useState(backGroundImage);
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "100vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        {children}
      </div>
    </>
  )
}

export default BackgroundHoc