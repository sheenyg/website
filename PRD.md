# Planning Guide

A personal portfolio website for Sheena Ganju showcasing her professional work, projects, and personal interests in an editorial, content-focused format.

**Experience Qualities**:
1. **Editorial** - The site should feel like a well-curated personal magazine with clear typography and generous whitespace
2. **Authentic** - Presents information in a straightforward, unpretentious manner that reflects genuine interests and accomplishments
3. **Sophisticated** - Clean design with thoughtful details that conveys professionalism without being corporate

**Complexity Level**: Content Showcase (information-focused)
This is a personal portfolio site focused on presenting biographical information, work history, projects, and interests in a structured, readable format.

## Essential Features

**Section Navigation**
- Functionality: Jump links to different sections (About, Projects, Passions, Books)
- Purpose: Allow quick access to specific content areas
- Trigger: Click on navigation links
- Progression: Click navigation → Smooth scroll to section → Section comes into view
- Success criteria: Smooth scrolling behavior, clear visual indication of current section

**About Section with Recent Ships**
- Functionality: Display current role and list of recent product launches with links
- Purpose: Showcase professional accomplishments and current work
- Trigger: Page load / scroll to section
- Progression: Load page → About section visible → Links to changelog articles are clickable
- Success criteria: All links open correctly, clean presentation of work history

**Projects Display**
- Functionality: Show personal projects with links
- Purpose: Highlight side projects and personal work
- Trigger: Scroll to projects section
- Progression: Scroll → Projects section visible → External project link opens in new tab
- Success criteria: Project link works, clear description

**Passions Section**
- Functionality: Display interests with embedded links (music, radio)
- Purpose: Show personality and interests beyond professional work
- Trigger: Scroll to section
- Progression: Scroll → Passions visible → Click links to external music/articles
- Success criteria: All external links functional, content is scannable

**Books Reading Lists**
- Functionality: Organized lists of favorite books by year with expandable/collapsible sections
- Purpose: Share reading recommendations and literary interests
- Trigger: Click on year to expand/collapse
- Progression: Load page → See year headers → Click year → List expands/collapses
- Success criteria: Smooth expand/collapse animation, easy to scan multiple years

## Edge Case Handling

- **Mobile viewing**: Responsive layout that maintains readability on small screens with adjusted typography
- **Long link URLs**: Ensure links wrap properly and don't break layout
- **Empty sections**: All sections have content, but design should handle future additions gracefully
- **External link failures**: Links open in new tabs to prevent navigation away from site

## Design Direction

The design should evoke the feeling of a well-designed literary magazine or book - calm, focused, and content-forward. It should feel timeless rather than trendy, with emphasis on readability and clear information hierarchy. The aesthetic should be refined but not overly minimal, with subtle personality through typography and spacing choices.

## Color Selection

A warm, literary-inspired palette that feels sophisticated and approachable.

- **Primary Color**: Deep charcoal (oklch(0.25 0.01 270)) - Main text color that's softer than pure black, easier on the eyes for long reading
- **Secondary Colors**: 
  - Warm cream background (oklch(0.97 0.01 85)) - Softer than white, reduces eye strain
  - Muted terracotta (oklch(0.62 0.12 35)) - For accents and hover states
- **Accent Color**: Rich rust (oklch(0.55 0.15 40)) - Used for links and interactive elements, warm and inviting
- **Foreground/Background Pairings**:
  - Primary on Background (oklch(0.25 0.01 270) on oklch(0.97 0.01 85)): Ratio 12.8:1 ✓
  - Accent on Background (oklch(0.55 0.15 40) on oklch(0.97 0.01 85)): Ratio 5.2:1 ✓
  - Primary on Card (oklch(0.25 0.01 270) on oklch(0.99 0.005 85)): Ratio 13.5:1 ✓

## Font Selection

Typography should feel literary and editorial, conveying intelligence and thoughtfulness while maintaining excellent readability.

- **Primary Font**: Crimson Pro (serif) - For headings and emphasis, brings editorial sophistication
- **Body Font**: Inter (sans-serif) - For body text, clean and highly readable

**Typographic Hierarchy**:
- H1 (Name/Title): Crimson Pro Bold/48px/tight letter spacing (-0.02em)
- H2 (Section Headers): Crimson Pro Semibold/32px/normal letter spacing
- H3 (Subsections): Crimson Pro Medium/24px/normal letter spacing
- Body Text: Inter Regular/18px/relaxed line height (1.7)
- Links: Inter Medium/18px/underline on hover
- Small Text (years): Inter Regular/16px/letter spacing (0.02em)

## Animations

Animations should feel like turning pages in a book - smooth, intentional, and never rushed. Use subtle transitions for interactive elements (200ms ease-out for hover states), gentle scroll behavior for navigation jumps, and a refined expand/collapse animation for the book lists (300ms ease-in-out). Avoid flashy effects; instead focus on smooth, natural motion that enhances usability.

## Component Selection

- **Components**: 
  - Card components for section containers with subtle borders
  - Accordion component for yearly book lists (expandable/collapsible)
  - Button component styled as minimal text links for navigation
  - Separator for visual breaks between major sections
  
- **Customizations**: 
  - Custom navigation bar that's minimal and non-sticky
  - Custom link styling with underline animations
  - Book list items with custom numbering and spacing
  
- **States**: 
  - Links: default (rust color), hover (underline appears, slight color shift), active (pressed state)
  - Accordions: closed (year + chevron), open (year + rotated chevron + book list)
  - All interactive elements have subtle scale/opacity transitions
  
- **Icon Selection**: 
  - ChevronDown from phosphor-icons for accordion states
  - ExternalLink for outbound links (subtle, only on hover)
  - BookOpen for books section header
  
- **Spacing**: 
  - Section padding: py-16 md:py-24
  - Content max-width: max-w-3xl (readable line length)
  - Between sections: space-y-24
  - Paragraph spacing: space-y-4
  - List item spacing: space-y-3
  
- **Mobile**: 
  - Single column layout maintained across all breakpoints
  - Font sizes reduced slightly on mobile (H1: 36px, H2: 28px, Body: 17px)
  - Navigation becomes vertical stack on mobile
  - Padding reduced to py-8 md:py-16 for sections
  - Horizontal padding: px-6 on mobile, px-8 on tablet+
