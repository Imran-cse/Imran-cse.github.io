# Component Structure Documentation

## 📁 Component Organization

The portfolio website has been refactored into modular, maintainable components:

### 🏗️ **Main Layout Components**

#### `/pages/index.astro` (24 lines)

- **Purpose**: Main entry point, orchestrates the entire page
- **Dependencies**: Layout, Header, PageHeader, MainContent, MobileNavigation
- **Responsibility**: Page composition only

#### `/components/PageHeader.astro` (11 lines)

- **Purpose**: Left sidebar header area
- **Contains**: Hero, Navigation, SocialLinks
- **Responsibility**: Desktop header layout

#### `/components/MainContent.astro` (9 lines)

- **Purpose**: Right side main content area
- **Contains**: About, Experience, Projects
- **Responsibility**: Content area layout

### 🧩 **Feature Components**

#### `/components/Navigation.astro` (38 lines)

- **Purpose**: Desktop navigation with indicators
- **Features**: Line indicators, hover effects, smooth scrolling
- **Type**: Static Astro component

#### `/components/SocialLinks.astro` (75 lines)

- **Purpose**: Social media links with icons
- **Features**: GitHub, LinkedIn, Email links
- **Type**: Static Astro component

#### `/components/MobileNavigation.tsx` (85 lines)

- **Purpose**: Mobile-only navigation overlay
- **Features**: Menu toggle, overlay, keyboard navigation, smooth animations
- **Type**: Interactive React component

### 📄 **Content Components**

#### `/components/Hero.astro`

- **Purpose**: Name, title, and intro text
- **Type**: Static content

#### `/components/About.astro`

- **Purpose**: About section with company links
- **Type**: Static content

#### `/components/Experience.astro`

- **Purpose**: Work experience cards
- **Type**: Static content

#### `/components/Projects.tsx`

- **Purpose**: Project showcase with interactions
- **Type**: Interactive React component

### 🔧 **Utility Components**

#### `/components/Header.tsx`

- **Purpose**: Scroll-based navigation highlighting
- **Type**: React utility component

#### `/components/icons/GitHubIcon.astro`

- **Purpose**: Reusable SVG icons
- **Type**: Utility component

## 🎯 **Benefits of This Structure**

### ✅ **Maintainability**

- Each component has a single responsibility
- Easy to locate and update specific features
- Clear separation of concerns

### ✅ **Reusability**

- Components can be easily reused across pages
- Icon components can be shared
- Navigation logic is centralized

### ✅ **Performance**

- Static components compile to pure HTML/CSS
- Interactive components only load where needed
- Minimal JavaScript footprint

### ✅ **Developer Experience**

- Clear file organization
- Easy to understand component hierarchy
- Simple to add new features

### ✅ **Testing**

- Components can be tested in isolation
- Clear boundaries for unit testing
- Easy to mock dependencies

## 🔄 **Component Dependencies**

```
index.astro
├── Layout.astro
├── Header.tsx (client:load)
├── PageHeader.astro
│   ├── Hero.astro
│   ├── Navigation.astro
│   └── SocialLinks.astro
├── MainContent.astro
│   ├── About.astro
│   ├── Experience.astro
│   └── Projects.tsx (client:load)
└── MobileNavigation.tsx (client:load)
```

## 📊 **Component Metrics**

| Component            | Lines | Type  | Hydration | Purpose            |
| -------------------- | ----- | ----- | --------- | ------------------ |
| index.astro          | 24    | Astro | Static    | Page orchestration |
| PageHeader.astro     | 11    | Astro | Static    | Header layout      |
| MainContent.astro    | 9     | Astro | Static    | Content layout     |
| Navigation.astro     | 38    | Astro | Static    | Desktop nav        |
| SocialLinks.astro    | 75    | Astro | Static    | Social links       |
| MobileNavigation.tsx | 85    | React | Client    | Mobile nav         |
| Header.tsx           | 50    | React | Client    | Scroll handler     |

## 🚀 **Adding New Components**

### Static Content Component

```astro
---
// components/NewSection.astro
// Purpose: Describe what this component does
---

<section id="new-section" class="mb-16 scroll-mt-16">
  <!-- Content here -->
</section>
```

### Interactive Component

```tsx
// components/NewInteractive.tsx
import React from "react";

const NewInteractive: React.FC = () => {
  return <div>{/* Interactive content */}</div>;
};

export default NewInteractive;
```

### Integration

```astro
---
// Add to MainContent.astro or PageHeader.astro
import NewSection from "./NewSection.astro";
import NewInteractive from "./NewInteractive.tsx";
---

<NewSection />
<NewInteractive client:load />
```

This modular structure makes the codebase much more maintainable while preserving the excellent performance characteristics of Astro! 🎉
