# Category Box Display

A simple content management single-page application that displays content in a box design with category filtering.

## Features

- Content loaded dynamically from a JSON file
- Category-based filtering via top navigation bar
- Each content box displays:
  - Optional black and white logo
  - Optional description (2-3 sentences)
  - Up to four buttons with different colors (hidden if not provided)
- Built with React, TypeScript, and Tailwind CSS
- Easily deployable to GitHub Pages

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Customizing Content

All content is stored in the `public/data.json` file. You can modify this file to update the content displayed on the page.

### JSON Structure

```json
{
  "boxes": [
    {
      "id": "unique-id",
      "category": "category-name",
      "title": "Box Title",
      "logo": "/img/logo-filename.png",
      "description": "Short description of the box content (2-3 sentences).",
      "buttons": [
        {
          "text": "Button Text",
          "url": "https://example.com/link-url",
          "color": "primary"
        }
      ]
    }
  ]
}
```

### Fields

- `id`: Unique identifier for the box (required)
- `category`: Category for filtering (required)
- `title`: Title of the box (required)
- `logo`: Path to black and white logo image (optional)
- `description`: Short description text (optional)
- `buttons`: Array of button objects (optional)
  - `text`: Button text (required)
  - `url`: Button link URL (required)
  - `color`: Button color (required, options: "primary", "secondary", "tertiary", "quaternary")

## Adding Images

Place your black and white logo images in the `public/img/` directory, then reference them in the data.json file.

## Deployment to GitHub Pages

1. The `vite.config.ts` file has already been configured with `base: './'` for GitHub Pages compatibility.

2. Build the project:
```
npm run build
```

3. Deploy to GitHub Pages by pushing the `dist` folder to the `gh-pages` branch:

   If you have the gh-pages package installed:
   ```
   npx gh-pages -d dist
   ```

   Or manually:
   ```
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

4. Wait a few minutes, then access your site at `https://[your-username].github.io/[repository-name]/`

## Customization

You can customize the appearance of the boxes and buttons by modifying the `src/pages/Index.tsx` file and the Tailwind CSS classes.

## License

MIT
