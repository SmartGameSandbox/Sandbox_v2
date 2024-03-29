// This module contains the logic for creating draggable images that represent game objects (Card, Token, etc).
// The name is a relic of the prehistoric time when only cards existed.
// Please do rename this to Component or whatever you see fit.
// Replace (Ctrl + R) Card with the new name if you do. (Check usages to find where to replace)
// Notes: Should be refactored to hold a reference to the object this component represents instead of copying
// their properties (type, isLandscape, etc).
// Notes: Actions (onDragMove, etc) should exist within gameaction.jsx and be assigned when this component is created
// ie: inside deck.jsx.

import useImage from "use-image";
import { Image } from "react-konva";
const Buffer = require("buffer").Buffer;

const Card = ({
  src,
  id,
  type,
  x,
  y,
  isLandscape,
  onDragMove,
  onDragEnd,
}) => {

  const [img] = useImage(`data:image/${src.contentType};base64,${Buffer.from(src.data).toString("base64")}`);
  return (
    <Image
      key={id}
      x={x}
      y={y}
      image={img}
      isLandscape={isLandscape}
      rotation={isLandscape ? 90: 0}
      draggable
      onDragMove={(e) => {onDragMove(e, id);}}
      onDragEnd={(e) => {onDragEnd(e, id);}}
    />
  );
}

export default Card;
