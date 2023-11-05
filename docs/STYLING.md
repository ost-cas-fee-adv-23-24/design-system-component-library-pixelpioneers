# Styling

We use [tailwindCSS](https://tailwindcss.com/) - a **utility-first CSS framework**. To add styling you can use primitive utilities such as p-6, mx-auto, text-fg. You can find more information about configuring and using tailwind in the [documentation](https://tailwindcss.com/docs).

**Important: To add styling we do not use [the CSS Modules setup of next.js](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) or sass, less, stylus.**

## Base Styling

Styling that is not specific to a component or layout is stored in the `styles` folder. Tailwind has a layer system that is designed after [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/#what-is-itcss). We already added a `config` folder. If you need more folders, name it according to ITCSS.

## How to generate icons

1. Find your icon in [Figma - Design System - Icons](https://www.figma.com/file/9pAIuEXG73C6U9qGXQU25a/L---Migros-Corporate?node-id=1%3A7) (Generally: 20x20)
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
      <path fill="currentColor" d="M2.71 2v2h11.58L2 16.29l1.41 1.42 12.3-12.3V17h2V2h-15Z" />
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
