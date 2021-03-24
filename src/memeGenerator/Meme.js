import React from "react";
import { StyledImage, ImageBox } from "./modules/StyledImg";

const Meme = (props) => {
  const { url, name, onClick } = props;
  return (
    <ImageBox>
      <StyledImage src={url} alt={name} onClick={onClick} />
    </ImageBox>
  );
};

export default Meme;
