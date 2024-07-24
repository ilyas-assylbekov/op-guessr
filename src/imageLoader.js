// src/imageLoader.js
function importAll(r) {
    return r.keys().map(r);
}

export const easyImages = importAll(require.context('./easy', false, /\.(png|jpe?g|svg)$/));
export const hardImages = importAll(require.context('./hard', false, /\.(png|jpe?g|svg)$/));

export const easyImageTags = require('./easyImages.json');
export const hardImageTags = require('./hardImages.json');
  