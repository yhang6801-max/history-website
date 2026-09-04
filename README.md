# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Prepare a person image

Convert a JPG, JPEG, PNG, or WebP portrait into the project's standard 900x1200 WebP format:

```sh
npm run prepare-person-image -- napoleon-bonaparte "./input/napoleon.jpg"
```

The result is written to `src/assets/people/<person-id>.webp`. Person ids must use lowercase letters, numbers, and single hyphens. Automatic cropping uses the most visually prominent region of the source image, so review the generated portrait before using it.

Existing output files are never overwritten by default. Replace one explicitly with `--force`:

```sh
npm run prepare-person-image -- napoleon-bonaparte "./input/napoleon.jpg" --force
```

The optional `--position` argument controls which part of the source image is kept when the image must be cropped:

```sh
npm run prepare-person-image -- <person-id> <input-image> [--force] [--position <value>]
```

Allowed values are `attention`, `center`, `west`, and `northwest`. The default is `attention`, so ordinary portraits usually do not need this option. If automatic cropping focuses on the wrong subject, choose a position explicitly. For example, the wide Alexander mosaic works better with its western area retained:

```sh
npm run prepare-person-image -- alexander-the-great "./input/alexander.jpg" --position west
```

`--position` and `--force` can be used together in either order.

On Windows, wrap paths containing spaces in quotes.

## Portrait selection

For each new person, prefer a real photograph from Wikimedia Commons when one exists; otherwise prefer a two-dimensional painted or engraved portrait. Avoid photographs of sculptures or busts where suitable alternatives exist. Choose a clearly identifiable person, a complete and legible face, and a composition suitable for portrait cropping.

Before downloading, check the Commons file description for the actual creator, original source, license or public-domain basis, and required credits (including restorers). Do not infer rights from the subject, age, or uploader. Record the file-page URL, rights information, credits, and actual edits in `imageAttribution`. Review both the source and processed image. Use limited download retries and try another suitable source before changing the image tool.

Image discovery, rights verification, biography research, and data entry are separate editorial steps; `prepare-person-image` only processes an input image.
