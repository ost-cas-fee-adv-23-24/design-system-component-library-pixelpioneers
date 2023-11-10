# Styling

We use [TailwindCSS](https://tailwindcss.com/) - a **utility-first CSS framework**. To add styling you can use primitive utilities such as p-6, mx-auto, text-fg. You can find more information about configuring and using tailwind in the [documentation](https://tailwindcss.com/docs).

**Important: To add styling we do not use [the CSS Modules setup of Next.js](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) or sass, less, stylus.**

## Base Styling

Tailwind has a layer system that is designed after [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/#what-is-itcss).

## How to generate icons

1. Find your icon in [Figma - Design System - Icons](https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=407-101&mode=design&t=n3s826L1tz6QinwZ-0) (Generally: 16x16)
2. Mark the current **variant of the icon component** and **export it as vector (SVG)**
3. Open the site [SVG-OMG](https://jakearchibald.github.io/svgomg/) and put the vector code there
4. Please disable on the website SVG-OMG following setting: "Remove viewBox" - so the viewBox is still in the output
5. Copy these modified code from SVG-OMG into the TypeScript file (named same as in Figma, e.g "IconMumble")
6. Here is an example how it should look like after the optimization process and with the additional markup:

   ```bash
   <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {title && <title>{title}</title>}
      <path d="M2.71 2v2h11.58L2 16.29l1.41 1.42 12.3-12.3V17h2V2h-15Z" />
    </svg>

   ```

7. Update snapshot test(s)
8. Verify that the new icon is shown in Storybook

### Rewrite CSS Classes with [clsx](https://github.com/lukeed/clsx)

```bash
  import clsx from 'clsx';

const customClasses = clsx(
  'group',
  'flex',
  'w-min',
  'items-center',
  'border-2',
  'py-0.5',
  'px-1.5',
  'transition-colors',
  className,
  variant === 'light'
    ? ['border-fgInverted', 'text-fgInverted']
    : [
        'border-interaction',
        'text-interaction-hover',
        'hover:border-interaction-hover',
      ]
);
```
