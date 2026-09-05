# Historical Figures / 历史人物

A React and TypeScript website presenting 37 historical figures in English and Simplified Chinese. Each detail page includes a biography, timeline, research links, and the portrait's creator, source, rights basis, and modification notes.

## Local development and validation

Use Node.js 24 and install the exact dependency graph from the lock file:

```sh
npm ci
npm run lint
npm run test:language
npm run test:prepare-person-image
npm run build
npm run preview
```

Building and previewing locally do not publish the site. No deployment workflow or GitHub Pages configuration is included. Browser acceptance scripts in `test/` run against an already-started preview and require Playwright plus a Chromium-compatible browser. The image-rights browser test supports bounded subsets through `AUDIT_IDS` and saves intermediate results under the ignored `node_modules/.cache/` directory.

## Tooling background

The project uses Vite, React, TypeScript, and Oxlint.

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

Allowed values are `attention`, `center`, `west`, and `northwest`. The default is `attention`, so ordinary portraits usually do not need this option. If automatic cropping focuses on the wrong subject, choose a position explicitly and review the result before connecting it to a person record.

`--position` and `--force` can be used together in either order.

On Windows, wrap paths containing spaces in quotes.

## Portrait selection

For each new person, prefer a real photograph from Wikimedia Commons when one exists; otherwise prefer a two-dimensional painted or engraved portrait. Avoid photographs of sculptures or busts where suitable alternatives exist. Choose a clearly identifiable person, a complete and legible face, and a composition suitable for portrait cropping.

Before downloading, check the Commons file description for the actual creator, original source, license or public-domain basis, and required credits (including restorers). Do not infer rights from the subject, age, or uploader. Record the file-page URL, rights information, credits, and actual edits in `imageAttribution`. Review both the source and processed image. Use limited download retries and try another suitable source before changing the image tool.

Image discovery, rights verification, biography research, and data entry are separate editorial steps; `prepare-person-image` only processes an input image.

## Language support / 中英文试点

The public UI and all 37 biographies support English and Simplified Chinese. English is the first-visit default, and the browser remembers language choices. New people must be prepared in both languages; incomplete translations safely fall back to English with a notice.

See [双语内容维护与验收说明](docs/bilingual-pilot.md) for data organization, preview and acceptance steps. Run `npm run test:language` with Node 24 for language data checks.


当前 37 人：霍金、甘地、费马、丘吉尔、斯大林分别位于第 11、12、13、14、22 位，其余人物保持原相对顺序。图片署名在人物详情页统一展示。[当前 37 人上线前审计](docs/pre-deployment-audit-2026-09-05.md)；[此前 40 人扩充验收记录](docs/four-person-replacement/README.md)作为历史证据保留。后续扩充名单待另行安排。
