
# React-Image 🖼

Lightweight React Component To Lazy Load Images.

[![bundle size](https://img.shields.io/bundlephobia/minzip/@kunalukey/react-image?style=for-the-badge)](https://bundlephobia.com/package/@kunalukey/react-image)
[![license](https://img.shields.io/github/license/helloukey/react-image?style=for-the-badge)](LICENSE)
[![npm release](https://img.shields.io/npm/v/@kunalukey/react-image?color=orange&style=for-the-badge)](https://www.npmjs.com/package/@kunalukey/react-image)
[![zero dependency](https://img.shields.io/badge/dependencies-0-success?style=for-the-badge)](package.json)

## Features

- Super Lightweight (Less than **1KB**) 🔥 
- Easy Setup ⚙
- Easy Customization ⛏
- Zero Dependencies! 🤯

## Installation

Install **React-Image** with npm

```bash
  npm install @kunalukey/react-image
```

## Usage/Examples

- React 16.8.0 and higher is required.
- You should have a placeholder image saved locally in your project. You can create one and download it from **[HERE](https://placeholderimage.dev/)**

```javascript
import { LazyImage } from "@kunalukey/react-image";
import placeholderImage from "../assets/placeholder.png";

const MyComponent = () => {

  return (
    <div>
          <LazyImage
            placeholderSrc={placeholderImage}
            placeholderStyle={{ width: "100%" }}
            placeholderClassName="placeholderClassName"
            src="https://source.unsplash.com/random/1920x1080"
            alt="my-image"
            className="imageClassName"
            style={{ width: "100%" }}
          />
    </div>
  );
};

export default MyComponent;
```

## Props

| Props                | Required | Description                                                 |
|----------------------|----------|-------------------------------------------------------------|
| placeholderSrc       | **true** | Placeholder image src (locally saved image is recommended). |
| placeholderClassName | -        | className for placeholder image.                            |
| placeholderStyle     | -        | style for placeholder image.                                |
| src                  | **true** | src for an actual image.                                    |
| alt                  | -        | alt tag for an actual image.                                |
| className            | -        | className for an actual image.                              |
| style                | -        | style for an actual image.                                  |

## License

[![license](https://img.shields.io/github/license/helloukey/react-image?style=for-the-badge)](LICENSE)
