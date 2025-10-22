import { PlaceHolderImages } from "./placeholder-images";

function createImageMap() {
  const map: { [key: string]: { imageUrl: string; imageHint: string } } = {};
  PlaceHolderImages.forEach(img => {
    map[img.id] = { imageUrl: img.imageUrl, imageHint: img.imageHint };
  });
  return map;
}

export const placeholderImages = createImageMap();
