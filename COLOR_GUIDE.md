# Icedale Color System

## Brand Colors
All colors are defined in `src/app/globals.css` and can be changed from one place.

### Primary Colors
- **White**: `#ffffff`
- **Black**: `#000000`
- **Blue**: `#122d92`

## Usage Guide

### In CSS/Tailwind Classes

```jsx
// Using Tailwind with custom colors
<div className="bg-primary text-white">
  Primary blue background with white text
</div>

<div className="bg-white text-black">
  White background with black text
</div>

<div className="bg-black text-white">
  Black background with white text
</div>

<div className="text-blue">
  Blue text
</div>
```

### In Inline Styles (CSS Variables)

```jsx
// Using CSS custom properties
<div style={{ 
  backgroundColor: 'var(--color-blue)',
  color: 'var(--color-white)'
}}>
  Content here
</div>

<h1 style={{ color: 'var(--primary)' }}>
  Primary color heading
</h1>

<button style={{ 
  backgroundColor: 'var(--accent)',
  color: 'var(--text-light)'
}}>
  Button
</button>
```

### Available CSS Variables

#### Direct Colors
- `var(--color-white)` → #ffffff
- `var(--color-black)` → #000000
- `var(--color-blue)` → #122d92

#### Semantic Names
- `var(--primary)` → Blue (#122d92)
- `var(--secondary)` → White (#ffffff)
- `var(--accent)` → Blue (#122d92)
- `var(--text-dark)` → Black (#000000)
- `var(--text-light)` → White (#ffffff)
- `var(--background-light)` → White (#ffffff)
- `var(--background-dark)` → Black (#000000)

## Changing Colors Globally

To change any color across the entire site, simply edit the values in `src/app/globals.css`:

```css
:root {
  --color-white: #ffffff;  /* Change white here */
  --color-black: #000000;  /* Change black here */
  --color-blue: #122d92;   /* Change blue here */
}
```

All components using these variables will automatically update!
