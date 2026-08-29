# DESIGN.md — SWAMII.ME DESIGN SYSTEM & INTERACTION SPECIFICATION

Reference: Swami Malode — Design Engineer Portfolio

This document describes the complete visual language, layout system, typography, motion system, scrolling experience, hover behavior, interaction philosophy, component styling and overall design direction of the portfolio.

The objective is not merely:

> “Make a black developer portfolio.”

The objective is to reproduce the specific feeling of the website:

> A restrained, editorial, engineering-oriented personal portfolio where typography, spacing, borders and tiny interactions create the personality rather than gradients, 3D graphics or excessive animation.

---

# 1. CORE DESIGN PHILOSOPHY

The design follows five major principles.

## 1.1 Almost-black environment

The entire website lives inside an extremely dark canvas.

Primary background:

`#09090B`

It is not pure black.

Pure black would feel harsher and flatter.

The slightly lifted black gives enough tonal range for:

* cards
* borders
* navigation glass
* images
* pills
* tooltips
* shadows

to remain distinguishable.

The website should therefore never feel like:

“black background + random white boxes.”

Instead, it should feel like several extremely subtle dark layers.

---

## 1.2 Typography is the visual hero

There is no giant WebGL background.

There is no colorful mesh gradient.

There is no floating 3D object.

The most visually dominant element is simply:

# Hi I'm Swami

followed by:

# I build for the web.

The typography itself creates the hero.

This is extremely important.

Large typography + disciplined spacing replaces decorative graphics.

---

# 2. FONT SYSTEM

The website loads several font families.

Primary families include:

* Space Grotesk
* Geist
* Geist Mono
* Syne
* Geist Pixel fonts

The implementation specifically imports:

`Geist`

`Geist_Mono`

`Space_Grotesk`

`Syne`

plus Geist pixel variants.

Space Grotesk weights loaded:

* 400
* 500
* 600
* 700

Syne weights loaded:

* 400
* 500
* 600
* 700

The global font tokens also include:

`Geist, sans-serif`

`Geist Mono, monospace`

`Georgia, serif`

---

# 3. FONT RESPONSIBILITIES

Do not randomly switch fonts.

Each family should have a role.

## Space Grotesk

Use primarily for:

* major headings
* hero typography
* section headings
* brand text
* large project titles
* visually expressive UI

It gives the site its slightly geometric designer/developer character.

---

## Geist Sans

Use for:

* normal interface labels
* navigation links
* descriptions
* buttons
* secondary UI
* utility text

It is quieter than Space Grotesk.

---

## Geist Mono

Use sparingly for:

* developer-oriented metadata
* code-style text
* tiny technical labels
* keyboard shortcuts

Do not overuse monospace.

The site is a design-engineering portfolio, not a terminal emulator.

---

## Syne

Treat as an accent/display family rather than the universal typeface.

It should only appear where a more expressive visual tone is desired.

---

## Pixel fonts

These should be treated as tiny character moments.

Never use pixel typography everywhere.

Their purpose is contrast and personality.

---

# 4. TYPE SCALE

The typography scale changes dramatically across viewport sizes.

The hero text follows approximately:

Mobile:

`text-4xl`

Small:

`text-6xl`

Medium:

`text-7xl`

Large:

`text-8xl`

Very large desktop:

approximately `130px`

The hero is:

* tightly tracked
* tightly line-spaced
* semibold
* Space Grotesk

Implementation:

`tracking-tight`

`leading-tight`

`font-semibold`

---

# 5. SECTION HEADING TYPOGRAPHY

Section labels such as:

Projects

Experience

Skills

Github Graph

About Me

use considerably smaller typography than the hero.

Approximately:

Mobile:

`24px`

Small:

`30px`

Medium:

`36px`

Font:

Space Grotesk

Weight:

600 / semibold

Tracking:

tight

The heading is visually connected to a subtle horizontal divider.

The implementation places a dark border line slightly behind/below the heading, creating an understated editorial separation between sections.

---

# 6. COLOR SYSTEM

## Background

Primary:

`#09090B`

---

## Primary text

Approximately:

`#FFFFFF`

Used for:

* hero
* headings
* active interactions
* important project names
* major navigation identity

---

## Secondary text

Global secondary token:

`#9F9FA9`

About-section copy uses approximately:

`#A6A6A6`

Other secondary text frequently uses Tailwind gray tones.

Secondary text should have enough contrast to remain readable while clearly sitting below primary information.

---

## Subtle dark surface

Examples:

`#18181B`

`#1C1C1F`

---

## Border colors

Global border gray:

`#1C1C1F`

Some stronger content dividers:

`#404043`

Image-card border:

approximately:

`#535355`

---

# 7. COLOR PHILOSOPHY

The page is almost monochromatic.

Color is introduced only during interaction or when content naturally contains color.

Examples:

* colorful project screenshots
* purple glow on VidStudio pill hover
* blue hover on the hero social icon
* green/live indicators
* brand logos

This makes the occasional color feel intentional.

Never fill the interface with random bright colors.

---

# 8. TEXT SELECTION

Even selecting text is styled.

Selected text uses approximately:

Background:

`rgba(39,39,39,0.6)`

Text:

white

This is a very small detail, but it reinforces the dark environment.

---

# 9. PAGE WIDTH

The site does not behave like an endlessly wide webpage.

Content is visually contained.

The navbar reaches:

`max-width: 1600px`

approximately, based on Tailwind's `max-w-400`.

The main interface uses controlled horizontal padding rather than allowing content to touch browser edges.

Large screens feel spacious without becoming empty.

---

# 10. RESPONSIVE PHILOSOPHY

The desktop version is not simply scaled down onto mobile.

Important responsive changes happen.

For example:

Navigation links such as:

Projects

Art Gallery

are hidden from the standard desktop navigation area below the medium breakpoint.

Typography scales aggressively.

Project imagery shrinks substantially.

Horizontal padding changes.

Hero spacing is reduced.

Some desktop-only UI disappears entirely.

The mobile experience should remain intentionally composed.

---

# 11. INITIAL PAGE LOAD EXPERIENCE

This is one of the strongest personality elements.

When the site opens, the portfolio is hidden behind a fullscreen dark panel.

Background:

`#09090B`

Position:

fixed

Coverage:

entire viewport

Layer:

extremely high z-index

The text appears centered both vertically and horizontally.

---

# 12. GREETING PRELOADER

The loader cycles through greetings.

The actual sequence contains greetings such as:

• Hello

• Bonjour

• स्वागत है

• नमस्कार

• Ciao

• Olá

• おい

• Hallå

• Guten tag

The greeting changes every:

`180ms`

This creates a rapid international greeting sequence rather than a conventional loading percentage.

---

# 13. LOADER TYPOGRAPHY

Loader greeting:

Mobile:

approximately `36px`

Desktop:

approximately `60px`

Tracking:

tight

Color:

white

No progress bar.

No spinner.

No glowing orb.

The text itself is the loader.

---

# 14. LOADER EXIT / SHUTTER ANIMATION

After the final greeting:

Wait approximately:

`200ms`

Then animate the entire fullscreen panel upward.

Initial position:

`translateY(0%)`

Final:

`translateY(-100%)`

Duration:

`1 second`

Easing:

`cubic-bezier(0.8, 0, 0.2, 1)`

This is important.

It is not a normal linear slide.

The custom easing creates a strong “shutter opening” feeling.

---

# 15. FIRST-LOAD FEELING

The sequence should feel:

fast

→ curious

→ slightly playful

→ clean reveal

It should NOT feel like the user has to wait through a cinematic introduction.

The loader exists for identity, not spectacle.

---

# 16. NAVBAR

Navbar is permanently fixed to the top.

Properties:

`position: fixed`

`top: 0`

full available width

high z-index

centered container

Its background remains transparent rather than becoming an opaque block.

Instead it uses:

`backdrop-blur-2xl`

This means content subtly blurs underneath as the user scrolls.

---

# 17. NAVBAR BORDER

A subtle border separates navbar from content.

Approximately:

2px bottom border

Color:

`#1C1C1F`

This line is visually more important than a drop shadow.

The design philosophy favors:

borders > shadows

---

# 18. NAVBAR BRAND

Left:

`@code by SWAMI`

Font:

Space Grotesk

Weight:

semibold

Mobile:

small

Desktop:

around 20px

Color:

white

It intentionally resembles a developer annotation while still functioning as branding.

---

# 19. DESKTOP NAVIGATION

Navigation includes options such as:

Projects

Art Gallery

plus utility/social actions.

Default text:

white at about 60% opacity.

Hover:

white at 100%.

Transition:

simple color interpolation.

No giant underline.

No pill expansion.

No excessive motion.

Implementation uses:

`transition-colors`

---

# 20. KEYBOARD INTERACTION

Desktop supports:

`Ctrl + K`

or

`Command + K`

to open the command interface.

This behavior is disabled for small/mobile environments.

This is a great example of hidden power-user interaction.

The interface visually remains simple while advanced controls remain available.

---

# 21. CUSTOM CURSOR

Desktop receives a custom cursor-like visual follower.

It is a:

16 × 16px circle

Color:

white

Shape:

fully rounded

Position:

fixed

Pointer events:

disabled

Blend mode:

`mix-blend-difference`

Very high z-index.

---

# 22. CURSOR MOVEMENT

It follows mouse coordinates.

Position calculation offsets the circle by 8px in X and Y so that the pointer is effectively centered inside the circle.

Movement uses:

`translate3d()`

with:

`transition-transform`

Duration:

approximately `150ms`

Easing:

ease-out

This creates slight trailing softness.

The cursor should feel:

responsive

but not absolutely glued to the pointer.

---

# 23. MIX-BLEND-DIFFERENCE EFFECT

This is important.

Because the cursor uses:

`mix-blend-difference`

it visually adapts against whatever it passes over.

Over dark surfaces it looks bright.

Over bright surfaces it inverts.

This prevents the cursor from disappearing while making it feel integrated into the design.

---

# 24. HERO SECTION

The hero begins beneath the fixed navbar.

Primary background remains:

`#09090B`

The desktop composition is left aligned.

It avoids the cliché:

“centered heading + center subtitle + centered CTA.”

Instead it feels like a portfolio/editorial composition.

---

# 25. HERO SPACING

There is intentionally significant vertical room around the heading.

Hero starts with substantial top spacing to account for:

* navbar
* visual breathing room
* oversized text

Desktop margins are larger.

Mobile spacing is tightened.

---

# 26. HERO PRIMARY TEXT

Main line:

“Hi I'm Swami”

Then:

“I build for the web.”

These are treated as enormous display typography.

The copy is very short.

This is part of the design.

Do not replace it with:

“Hi, I’m John, a passionate multidisciplinary software engineer specializing in...”

Long hero copy would destroy the visual system.

---

# 27. HERO SOCIAL SYMBOL

Beside the name is a clickable visual symbol.

Default:

dark gray around `#27272A`

Hover:

blue

Hover transform:

approximately `rotate(10deg)`

Transition:

approximately `150ms`

ease-in-out.

This is an excellent example of personality through one tiny interaction.

---

# 28. HERO SUPPORTING COPY

Below the large display text is a concise description explaining that he builds websites that look and feel good to use and identifies as a Design Engineer / Full Stack Developer.

This supporting copy should be significantly smaller and lighter than the hero.

The hierarchy should be unmistakable:

Hero statement

↓

short professional description

↓

actions/status

---

# 29. HERO CTA AREA

Primary action:

Book a Meeting

Secondary personality/status:

“psst… i'm open to work”

The open-to-work message is intentionally conversational.

This prevents the portfolio from feeling corporate.

---

# 30. SECTION ORDER

The homepage flows through:

1. Navbar
2. Hero
3. Projects
4. Experience
5. Skills
6. Github Graph
7. About Me
8. Contact / Footer

This exact progression moves from:

identity

→ proof of work

→ professional credibility

→ capability

→ activity

→ personality

→ contact

---

# 31. SCROLL PHILOSOPHY

The website is primarily a normal vertical document.

Do not turn it into:

* snap scrolling
* horizontal scrolling
* WebGL camera movement
* section locking
* fake smooth-scroll physics everywhere

The content itself should remain easy to navigate.

Motion decorates scrolling rather than fighting it.

---

# 32. SECTION TRANSITIONS

Sections are generally separated using:

* whitespace
* dark border lines
* headings
* rhythm

rather than dramatic background changes.

Everything remains inside the same visual world.

This is why the site feels cohesive.

---

# 33. PROJECTS SECTION

Project presentation is one of the strongest interactive parts of the site.

Each project behaves more like a horizontal portfolio row than a typical SaaS card grid.

Structure:

Left:

project name

project description

Right:

thumbnail inside dark frame

Large horizontal divider

Whole row clickable when URL exists.

---

# 34. PROJECT ROW DEFAULT STATE

Background:

`#09090B`

Project title:

white

Description:

gray

Thumbnail container:

dark raised surface around `#18181B`

Border:

approximately `#535355`

Thumbnail:

rounded corners

Divider:

approximately `#404043`

There are no huge card shadows.

---

# 35. PROJECT ROW HOVER — SCALE

When pointer enters:

entire main project row scales from:

`1`

to:

`1.02`

Duration:

`300ms`

This is subtle enough that the layout feels alive without looking like a button.

---

# 36. PROJECT THUMBNAIL HOVER

Thumbnail brightness changes from:

`1`

to:

`1.1`

Duration:

approximately `300ms`

There is no dramatic zoom.

The image simply becomes slightly more vivid.

---

# 37. POINTER-FOLLOWING PROJECT TOOLTIP

While hovering a clickable project:

A floating badge appears close to the pointer.

Text:

“Visit Site”

with:

up-right arrow

Appearance:

dark translucent background

around:

`#1C1C1F / 95%`

thin gray border

rounded corners

white text

strong blur/shadow treatment

---

# 38. TOOLTIP MOVEMENT

The project card calculates the pointer position relative to the project row.

The “Visit Site” bubble follows that position.

It is offset upward by approximately:

20px

so it floats above the pointer rather than blocking it.

Transition:

approximately `200ms`

Ease:

ease-out

This creates a slightly magnetic / trailing cursor-label effect.

---

# 39. PROJECT CLICK BEHAVIOR

Clickable project rows open external links in a new tab.

Interaction should therefore communicate clickability before click via:

* cursor change
* row scale
* thumbnail brightness
* floating Visit Site label

Multiple cues reinforce the interaction without permanently adding a giant button.

---

# 40. EXPERIENCE SECTION

The experience section visually prioritizes:

Company / role

Date range

description

technology stack

Company visuals remain secondary.

The visual system should preserve the same:

dark background

thin borders

strong heading / muted description hierarchy

---

# 41. TECHNOLOGY LABELS

Stacks such as:

Next.js

TypeScript

Tailwind CSS

Redux

Python

FastAPI

Docker

should visually behave like metadata.

They should not become enormous colorful badges.

The overall portfolio values restraint.

---

# 42. SKILLS SECTION

Skills include technologies such as:

TypeScript

JavaScript

React

Next.js

Tailwind CSS

HTML

CSS

Motion

SVG Animation

Git

Redux

shadcn/ui

Figma

Node.js

Supabase

Bun

ChatGPT

Claude

Cursor

They are presented as compact visual items rather than paragraphs.

---

# 43. SKILL INTERACTION PHILOSOPHY

Skill pills should feel tactile.

However:

avoid giving each technology its official brand color by default.

That would turn the section into visual noise.

Instead:

neutral default state

→ subtle hover response

→ optional icon/personality

---

# 44. GITHUB GRAPH

A GitHub contribution visualization appears as its own major section.

The purpose is not simply:

“Look how many commits.”

It creates a visual texture inside an otherwise typography-heavy page.

The contribution grid naturally introduces tiny repeating geometric cells.

---

# 45. ABOUT SECTION

The About section returns to simple text.

Background:

`#09090B`

Body text:

approximately `#A6A6A6`

Responsive size:

around 16px → 18px → 20px

Line height:

relaxed

---

# 46. ABOUT COPY HIERARCHY

General paragraph:

gray

Important professional labels:

slightly brighter neutral tone

Example:

Design Engineer

Full Stack Developer

This creates emphasis without bold neon highlighting.

---

# 47. INLINE PRODUCT LINK — VIDSTUDIO

VidStudio appears inline inside the About paragraph as a mini product chip.

Default characteristics:

dark background

thin neutral border

rounded corners

logo

product name

semibold text

inset gray glow

---

# 48. VIDSTUDIO CHIP HOVER

On hover:

text becomes brighter

border shifts toward purple

inner shadow changes toward violet/purple

Duration:

approximately `200ms`

This is one of the few places where chromatic color appears in the interface.

Because the rest of the page is neutral, this interaction feels much richer than it otherwise would.

---

# 49. SIMPLE TEXT LINKS

GitHub

LinkedIn

etc.

use one of the simplest interactions possible:

hover → underline

with a small up-right arrow.

This reinforces an important design rule:

Not every interaction needs an animation.

---

# 50. ICON SYSTEM

Lucide icons are used.

Icons should generally be:

thin

simple

geometric

small

consistent

Do not mix:

Lucide

Font Awesome

Material Icons

random SVG packs

unless absolutely necessary.

---

# 51. BORDER SYSTEM

Borders are critical to this design.

Use approximately:

1px subtle border for cards/pills

1–2px separators for major rows

Primary separator colors:

`#1C1C1F`

Strong separator:

`#404043`

Surface border:

`#535355`

The borders create architecture.

---

# 52. SHADOW SYSTEM

Shadows are intentionally restrained.

Global shadow tokens are mostly low-opacity black shadows.

Dark UI frequently does not need conventional elevated shadows because they are difficult to see.

Instead, use:

* border
* slight tonal contrast
* backdrop blur
* inset highlights
* occasional deep tooltip shadow

---

# 53. BORDER RADIUS

The overall design is not aggressively rounded.

General system radius:

roughly `0.5rem – 0.625rem`

Larger interactive cards and images may reach:

12px-ish rounded corners.

Avoid the generic 2025 AI design tendency of giving every container:

`border-radius: 24px`

---

# 54. BACKDROP BLUR

Blur is primarily functional.

Most obvious example:

navbar.

The fixed transparent navigation uses heavy backdrop blur so scrolling content passes underneath while navigation remains readable.

Avoid covering every card in frosted glass.

---

# 55. MOTION SYSTEM

Motion has three speed families.

## FAST — 150ms

Use for:

* icon rotation
* cursor trailing
* immediate hover feedback
* tiny color response

---

## STANDARD — 200–300ms

Use for:

* project scaling
* brightness changes
* pills
* hover surfaces
* floating labels

---

## CINEMATIC — ~1000ms

Use only for:

* full-screen loader shutter exit
* rare large page transitions

---

# 56. MOTION EASING

Microinteraction default:

ease-out / ease-in-out

Large loader reveal:

`cubic-bezier(0.8, 0, 0.2, 1)`

The motion should decelerate naturally.

Avoid:

bouncy springs on everything.

---

# 57. IMPORTANT MOTION RULE

Nothing should move merely because it can.

Each movement should communicate one of:

* hoverability
* clickability
* hierarchy
* page transition
* state
* personality

If an animation cannot answer one of those, remove it.

---

# 58. WHAT THE SITE DOES NOT DO

This is almost as important as what it does.

It avoids:

giant gradients

neon blobs

3D chrome text

scroll-jacking

huge glass cards

excessive glowing borders

fake terminal screens everywhere

particle backgrounds

animated stars

parallax on every section

constant floating elements

massive rounded rectangles

rainbow technology logos

long hero paragraphs

multiple CTA buttons competing for attention

This restraint is a major reason the site looks mature.

---

# 59. HOVER LANGUAGE

There are several kinds of hover response.

### Navigation

opacity/color:

60% white → full white

### Hero social mark

dark gray → blue

rotate approximately 10°

### Project row

scale:

1 → 1.02

### Project thumbnail

brightness:

1 → 1.1

### Project pointer tooltip

appears and follows cursor

### About inline product

neutral inset glow → purple inset glow

### Standard links

underline appears

These interactions are intentionally different depending on component role.

---

# 60. INTERACTION HIERARCHY

Large component:

larger physical movement.

Example:

project row scales.

Tiny link:

tiny response.

Example:

underline.

Icon:

rotational response.

Example:

hero social icon.

Embedded product:

surface/glow response.

This matching between interaction size and element size is extremely good design discipline.

---

# 61. MOBILE INTERACTIONS

Do not blindly reproduce desktop hover interactions on touch devices.

On mobile:

hover-only floating pointer badges should disappear.

Custom cursor should disappear.

Desktop command shortcuts are irrelevant.

Project rows should remain clearly tappable without depending on hover.

Navigation should collapse appropriately.

Tap targets should be at least around 40–44px where practical.

---

# 62. PAGE RHYTHM

The overall vertical rhythm roughly follows:

large hero breathing room

↓

section title

↓

divider

↓

content

↓

spacing

↓

next title

↓

divider

↓

content

This repetition makes the long portfolio feel predictable and easy to scan.

---

# 63. VISUAL DENSITY

The page alternates between:

high-impact sparse areas

and

information-dense areas.

Hero:

very sparse.

Projects:

medium density.

Experience:

medium-high.

Skills:

dense.

Github:

visual density.

About:

sparse again.

This prevents monotonous scrolling.

---

# 64. CONTENT WRITING STYLE

The design and writing style support each other.

Copy is:

short

informal

clear

first-person

slightly playful

Examples of tone:

“Hi I'm Swami”

“I build for the web.”

“psst… i'm open to work”

“Heyy!!”

This human tone counterbalances the precise engineering aesthetic.

---

# 65. DO NOT OVER-CORPORATIZE THE COPY

Avoid:

“Transforming visionary concepts into scalable digital ecosystems.”

Prefer:

“I build websites that look and feel good to use.”

The design depends on direct language.

---

# 66. DESIGN CHARACTER

The site sits somewhere between:

developer portfolio

editorial website

design engineer portfolio

minimal product interface

personal homepage

It should NOT feel exactly like:

a SaaS dashboard

a Behance case study

a Dribbble landing page

a coding terminal

or a corporate résumé.

---

# 67. IMPLEMENTATION PHILOSOPHY

Although Framer Motion is included in the technology stack, many interactions are achieved through straightforward CSS/Tailwind transitions.

That is actually a strength.

Use CSS transitions for:

opacity

color

scale

rotation

brightness

simple translation

Use JS/animation libraries only where state or physics genuinely require them.

---

# 68. ANIMATION PERFORMANCE

Prefer GPU-friendly properties:

`transform`

`opacity`

Avoid animating:

width

height

top

left

large box-shadow blur continuously

Project pointer movement already uses transformed positioning.

Cursor movement uses `translate3d()`.

This keeps interaction responsive.

---

# 69. ACCESSIBILITY

Every animation must preserve usability.

Respect:

`prefers-reduced-motion`

If enabled:

* remove cursor lag
* dramatically reduce loader shutter duration
* disable nonessential scaling
* remove rotating decorative icons
* prevent scroll animation dependence

Text contrast should remain strong.

Links must remain understandable without hover.

---

# 70. DESIGN TOKENS

Recommended equivalent tokens:

```css
--bg: #09090B;

--surface-1: #18181B;
--surface-2: #1C1C1F;
--surface-3: #27272A;

--border-subtle: #1C1C1F;
--border-medium: #404043;
--border-strong: #535355;

--text-primary: #FFFFFF;
--text-secondary: #9F9FA9;
--text-body: #A6A6A6;

--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;

--motion-fast: 150ms;
--motion-normal: 200ms;
--motion-slow: 300ms;

--ease-default: ease-out;
--ease-shutter: cubic-bezier(0.8, 0, 0.2, 1);
```

---

# 71. COMPLETE USER JOURNEY

When the visitor first arrives:

### Stage 1 — Black screen

Fullscreen dark canvas.

A greeting appears.

### Stage 2 — Rapid greeting sequence

Languages rapidly cycle.

Each roughly 180ms.

### Stage 3 — Pause

Final greeting remains momentarily.

### Stage 4 — Shutter reveal

Entire black preloader travels vertically upward.

Duration around 1 second.

### Stage 5 — Hero appears

Large:

Hi I'm Swami

I build for the web.

### Stage 6 — User moves pointer

Small white blend-mode cursor softly follows movement.

### Stage 7 — Navigation

Fixed translucent navigation remains above content.

### Stage 8 — Projects

Rows become slightly larger when hovered.

Screenshot brightens.

“Visit Site ↗” appears beside cursor.

### Stage 9 — Experience

Content becomes more informational and structured.

### Stage 10 — Skills

The page becomes denser and demonstrates breadth.

### Stage 11 — GitHub

Contribution graph adds visual data texture.

### Stage 12 — About

Interface becomes quiet again.

Human conversational copy returns.

### Stage 13 — Links/contact

Simple external links and footer information conclude the experience.

---

# 72. THE MOST IMPORTANT RULE FOR RECREATING THIS STYLE

Do not copy individual decorations first.

Copy the restraint.

A weak recreation would say:

“Dark background? Done.”

“Space Grotesk? Done.”

“Cursor? Done.”

“Animations? Done.”

But it would still look wrong.

The real system is:

very large typography

*

extremely controlled colors

*

careful whitespace

*

thin structural borders

*

short direct copy

*

tiny responsive interactions

*

almost no decorative noise.

That combination is the design.

---

# 73. DESIGN CHECKLIST

Before considering a page complete, check:

Does the page still look good if every animation is disabled?

If not, the static design is too weak.

Does every hover have a purpose?

If not, remove it.

Are there more than 2–3 bright accent colors visible simultaneously?

If yes, simplify.

Are too many things inside cards?

If yes, remove containers.

Are borders doing work that shadows could unnecessarily complicate?

Prefer borders.

Is supporting text competing with headings?

Reduce contrast.

Does the hero contain more than a few short statements?

Shorten it.

Are mobile interactions relying on hover?

Fix them.

Does every section feel like part of one continuous document?

It should.

---

# 74. FINAL DESIGN DIRECTION

The target feeling should be:

Minimal, but not empty.

Technical, but not nerdy.

Playful, but not childish.

Dark, but not cyberpunk.

Animated, but not cinematic.

Personal, but still professional.

Designed, but not decorated.

The visitor should leave with the impression:

> “This person understands both interfaces and code.”

That is the central design idea behind the entire experience.
