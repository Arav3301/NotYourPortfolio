# PRD.md — ARAV

## 1. PRODUCT OVERVIEW

### Product Name

**ARAV**

### Product Type

Personal portfolio / digital identity / personal corner of the internet.

### Owner

**ARAV PATEL**

### Public Identity

**ARAV**

### Personal Descriptor

**An explorin' student.**

---

# 2. PRODUCT IDEA

ARAV is not supposed to be a traditional student portfolio.

It should not feel like:

> Hello, I am Arav Patel.
> I am a Mechanical Engineering student.
> Here are my skills.
> Here are my projects.
> Please hire me.

That would undersell the personality of the site.

The website should instead feel like entering the digital world of someone who is still exploring what he wants to become.

Arav studies Mechanical Engineering.

He loves software.

He likes discovering new technologies, following ideas, building things, learning unfamiliar subjects, and going down interesting rabbit holes simply because they caught his attention.

The fact that he has not specialized into one narrow identity yet should NOT be treated as a weakness.

It becomes the central idea of the portfolio.

> **ARAV is an explorer who builds.**

The website documents that exploration.

Projects are things he has built.

Skills are tools he has picked up.

GitHub is evidence of activity.

The About section tells the story.

And the most important project on the entire website is:

> **Myself — permanently in progress.**

---

# 3. CORE POSITIONING

The visitor should NOT leave thinking:

> “Arav is a mechanical engineering student who knows some coding.”

They should leave thinking:

> “This guy is curious as hell. He keeps exploring things and actually builds some of them.”

The portfolio should communicate three traits above everything else:

**Curiosity.**

**Building.**

**Exploration.**

Technical ability matters, but personality comes first.

---

# 4. PRIMARY PRODUCT GOAL

The portfolio exists primarily to establish a strong personal identity on the internet.

It is not optimized specifically for:

* job applications
* freelancing
* recruiters
* selling services
* collecting leads

There will therefore be:

* no “Hire Me” CTA
* no “Available for Work” badge
* no services section
* no pricing
* no résumé download
* no fake testimonials
* no corporate sales language

The site exists because:

> **ARAV should have a damn good personal website.**

If opportunities later come from that, excellent.

But the site should never feel desperate for them.

---

# 5. TARGET AUDIENCE

Everyone is welcome.

The website should work equally well for:

* another student
* a developer
* a founder
* a senior
* a professor
* a recruiter
* a random internet visitor
* someone who discovered one of Arav's projects
* someone who simply wants to know who ARAV is

No audience should require previous context.

Within approximately 10 seconds, a first-time visitor should understand:

1. His name is ARAV.
2. He is a student.
3. He is deeply curious about technology.
4. He likes building software.
5. He has real projects.
6. This is not a conventional résumé portfolio.

---

# 6. DESIGN SOURCE OF TRUTH

`DESIGN.md` is the visual and interaction source of truth for this project.

The implementation should retain the quality and interaction philosophy documented there, including:

* dark visual system
* typography hierarchy
* multilingual opening loader
* loader shutter transition
* fixed blurred navbar
* custom cursor
* pointer interactions
* project scaling
* project image brightness response
* pointer-following project labels
* border-driven layout
* section spacing
* restrained animations
* responsive behavior
* subtle link interactions
* motion timing philosophy

Do NOT weaken the interactions described in `DESIGN.md`.

However:

**ARAV must not become a content clone of Swami's website.**

The design language can be inspired by it.

The information architecture, personality, writing, signature interactions and storytelling must belong to ARAV.

---

# 7. THE CENTRAL CREATIVE IDEA

The entire website revolves around:

# EXPLORATION

This should appear subtly throughout the product.

Not through obvious space graphics.

Not through maps everywhere.

Not through compasses spinning around the screen.

Not through a cheesy astronaut theme.

Exploration should instead appear through:

* language
* section naming
* microcopy
* status labels
* navigation details
* project presentation
* tiny interface Easter eggs

The website should feel like an explorer's personal archive.

---

# 8. HERO

The hero must immediately establish ARAV as a person rather than a job title.

## Eyebrow

Small secondary text:

> AN EXPLORIN' STUDENT

Do not write:

> FULL STACK DEVELOPER

or:

> SOFTWARE ENGINEER

Arav is still exploring.

That is intentional.

---

# 9. HERO COPY

Primary hero:

> **Hey, I'm ARAV.**
> **I wander into ideas.**
> **Sometimes they become software.**

This should use the massive typography system defined in `DESIGN.md`.

The second and third lines should feel like one statement.

Do not add an enormous paragraph immediately underneath.

---

# 10. HERO INTRODUCTION

Supporting copy:

> The name is Arav. Arav Patel. A mechanical engineering undergrad with an unreasonable curiosity for software, systems, and whatever technology sends me down the next rabbit hole. I don't have one lane yet. That's kind of the point.

This is the preferred copy.

It deliberately combines:

* confidence
* humor
* curiosity
* student identity
* exploration

without pretending to be something Arav is not.

---

# 11. HERO ACTIONS

The hero should NOT contain a traditional:

`Hire Me`

button.

Primary action:

> **Explore what I've built ↓**

Secondary action:

GitHub icon/link.

There may also be a tiny status beside the CTA:

> currently wandering around the internet

This text can subtly change in future versions.

---

# 12. NAVIGATION

Desktop navigation:

**@ARAV**

on the left.

Navigation on the right:

**Projects**

**Log**

**About**

GitHub icon

Email icon

Command-menu trigger

Do not include:

Resume

Experience

Hire Me

Services

Pricing

Blog

unless those things actually exist later.

---

# 13. NAVBAR IDENTITY

The left-side identity should be:

> `@ARAV`

not:

> `ARAV PATEL — PORTFOLIO`

It should feel like an internet identity rather than a résumé heading.

Hovering `@ARAV` may produce a tiny playful state:

> `@ARAV / exploring`

This should remain subtle.

---

# 14. COMMAND MENU

Keep the command palette functionality from the design system.

Keyboard:

`Ctrl + K`

or:

`⌘ + K`

Possible actions:

* Home
* Projects
* Explorer's Log
* GitHub
* About
* Email Arav
* Copy Email

It may also include one playful command:

> `Who is ARAV?`

Selecting it scrolls to the `Myself` project.

---

# 15. OPENING LOADER

Retain the multilingual greeting sequence and shutter animation defined in `DESIGN.md`.

However, add an ARAV-specific final beat.

After the greeting sequence completes:

The last state should briefly become:

> **found you.**

Then:

> **ARAV**

Then the shutter opens.

This final sequence should remain extremely short.

It gives the existing loader structure a personal signature.

Do not turn it into a 5-second intro.

---

# 16. HOMEPAGE ARCHITECTURE

The homepage should follow:

1. Loader
2. Navbar
3. Hero
4. Projects
5. Myself
6. Explorer's Log
7. Skills / Things I've Picked Up
8. GitHub Graph
9. About
10. Contact
11. Footer

This differs meaningfully from the reference portfolio while retaining its design quality.

---

# 17. PROJECTS SECTION

Heading:

# Things I've Built

Secondary line:

> Some ideas survived long enough to become real.

This section contains actual software projects.

Initial projects:

1. JoSAA Atlas
2. CapitalFlow

More projects can be introduced later without changing the architecture.

---

# 18. PROJECT 01 — JOSAA ATLAS

### Name

**JoSAA Atlas**

### Type

College prediction / exploration tool for JEE students.

### Short Description

Preferred copy:

> Making JoSAA choices a little less like staring into the void.

Secondary factual description:

> A college predictor built to help JEE students explore institutes and branches using JoSAA opening and closing rank data.

### Status

**Built**

### External Actions

* Visit project
* View source

### Technology

Only display technologies actually present in the project.

Do not invent a stack merely to make the card look impressive.

---

# 19. JOSAA ATLAS PROJECT PRESENTATION

JoSAA Atlas should have:

* large visual preview
* project number `01`
* name
* concise description
* status
* selected technology
* external link
* GitHub link

Use the hover behavior defined in `DESIGN.md`.

When hovering the project:

Default pointer-following text:

> Visit Project ↗

When hovering specifically over source:

> View the mess ↗

The second line introduces ARAV's personality without damaging usability.

---

# 20. PROJECT 02 — CAPITALFLOW

### Name

**CapitalFlow**

### Type

Business finance and operations system.

### Short Description

Preferred copy:

> A business money system built because spreadsheets eventually start fighting back.

Secondary factual description:

> A private finance and operations tool for managing business cash, expenses, bills, receipts, receivables and partner-held money.

### Status

Use the actual state of the project.

Possible values:

`Building`

`Built`

`Paused`

Never claim a deployed production product if one does not exist.

---

# 21. PROJECTS MUST BE REAL

Never add fake projects for visual density.

Two excellent real projects are better than six meaningless placeholder cards.

If only JoSAA Atlas and CapitalFlow are ready:

show two.

The negative space is acceptable.

Future projects should automatically fit into the same project system.

---

# 22. THE MOST IMPORTANT PROJECT

After actual software projects comes a completely different section.

Section label:

# Ongoing Project

One enormous entry:

# Myself

This is ARAV's signature section.

It should be one of the most memorable pieces of the portfolio.

---

# 23. MYSELF — PROJECT 00

Metadata:

**PROJECT 00**

Name:

> **Myself**

Status:

> **In Progress**

Release date:

> **TBD**

Version:

> **unstable**

Maintainer:

> **ARAV**

Repository:

> **private, unfortunately**

This should be playful but visually treated with the same seriousness as every other project.

---

# 24. MYSELF DESCRIPTION

Primary copy:

> The longest thing I've ever worked on.

Secondary copy:

> Currently studying engineering, learning software, building random things, changing my mind, finding new rabbit holes and figuring out what kind of person I want to become.

Final small line:

> No stable release planned.

This turns the user's joke — “my top project is me” — into a real piece of portfolio storytelling.

---

# 25. MYSELF INTERACTION

The `Myself` project must NOT behave exactly like other project cards.

It has no external URL.

On pointer hover, instead of:

> Visit Site ↗

show:

> still building…

The pointer label follows the same motion language as normal project tooltips.

The project may subtly reveal additional metadata as the cursor moves through it.

Examples:

`curiosity: high`

`bugs: several`

`status: exploring`

`ETA: unknown`

Do not turn this into a gimmicky fake terminal.

Keep it minimal.

---

# 26. UNIQUE SIGNATURE — EXPLORER MARKER

Introduce a tiny global component unique to ARAV:

## Explorer Marker

On desktop, place a very small piece of metadata near the bottom edge of the viewport.

Example:

> `03 / MYSELF`

As the visitor scrolls, it changes:

Hero:

`00 / ARAV`

Projects:

`01 / BUILDS`

Myself:

`02 / MYSELF`

Explorer's Log:

`03 / LOG`

Skills:

`04 / TOOLS`

GitHub:

`05 / TRAIL`

About:

`06 / ABOUT`

Contact:

`07 / SIGNAL`

This should be tiny and low-contrast.

It acts almost like coordinates while navigating the website.

This is one of ARAV's signature visual details.

---

# 27. EXPLORER'S LOG

Create a section not present in the reference site.

Heading:

# Explorer's Log

Subtitle:

> Things currently occupying unreasonable amounts of my curiosity.

This is NOT a blog.

It is a tiny living snapshot of what ARAV is currently exploring.

---

# 28. EXPLORER'S LOG CONTENT MODEL

Each entry contains:

* subject
* category
* optional one-line thought
* status

Possible categories:

`Learning`

`Building`

`Thinking About`

`Rabbit Hole`

Example layout:

**C++**

`LEARNING`

Understanding what happens after the code actually runs.

---

**Web**

`BUILDING`

Turning ideas into things people can click.

---

**Something new**

`INEVITABLE`

Probably hasn't discovered it yet.

The actual entries should be easy to change manually.

No CMS is required for V1.

---

# 29. LOG DESIGN

The Explorer's Log should NOT become a grid of giant cards.

Use an editorial list.

Each row:

subject

small status

short thought

thin divider

Hovering a row may:

* increase text brightness
* translate the title by approximately 4–6px
* reveal a tiny arrow
* slightly brighten the divider

Keep interaction quieter than project cards.

---

# 30. SKILLS SECTION

Do NOT title this:

# My Skills

Instead:

# Things I've Picked Up

Subtitle:

> Tools collected along the way.

This language better fits the explorer identity.

---

# 31. CURRENT SKILLS

Only claim skills explicitly known.

### Languages

* C++
* JavaScript
* Python

### Web

* HTML
* CSS

### Tools

* Git
* GitHub

Do not automatically add:

React

Next.js

TypeScript

Docker

AWS

Node.js

Supabase

Figma

just because they look good on portfolios.

They can be added later once appropriate.

---

# 32. SKILL PRESENTATION

Skills should not use progress bars.

Never display:

`JavaScript — 85%`

There is no meaningful way to quantify this.

Instead use simple interactive skill items.

Each skill can contain:

icon

name

category

Optional understated label:

`using`

`learning`

`comfortable`

Avoid self-rating.

---

# 33. EXPERIENCE SECTION

Do NOT create a conventional Experience section yet.

There is no need to manufacture professional history.

“Exploring fresher” is a personality state, not employment history.

Instead, the Explorer's Log and projects communicate what ARAV is actually doing.

Once genuine internships, open-source positions, research work, startup experience or meaningful roles exist, an Experience section can be added.

The architecture must leave room for this later.

---

# 34. GITHUB SECTION

Keep the GitHub contribution graph.

Section heading:

# The Trail

Subtitle:

> Some days I build. Some days GitHub knows I didn't.

Below or beside it:

GitHub contribution visualization.

Include a link to ARAV's GitHub profile.

GitHub username:

**Aaravbuilds**

---

# 35. GITHUB INTERACTION

The graph itself should remain readable and authentic.

Do not fake contribution data.

Do not manipulate activity counts.

Optional hover copy around the section:

> Evidence that something happened.

Keep this secondary.

---

# 36. ABOUT SECTION

Heading:

# About Me

The About section should finally explain the person behind the playful homepage.

Preferred copy:

> The name is Arav. Arav Patel.
>
> I'm a mechanical engineering undergrad at SVNIT, but I've never been particularly interested in staying inside one box. Software caught my attention, then products, then systems, then whatever interesting piece of technology happened to appear next.
>
> I like learning things before I have a perfectly good reason to learn them. Sometimes that ends with twenty tabs open. Sometimes it becomes a project.
>
> Right now, I'm still figuring out what I want to become — developer, engineer, builder, founder, or something I haven't found yet.
>
> I think that's the fun part.
>
> For now, I'm exploring.

This should be presented with substantial whitespace.

Do not turn About into a biography.

---

# 37. SVNIT POSITIONING

SVNIT should be present but secondary.

Do not place:

> SVNIT MECHANICAL ENGINEERING

under ARAV's name in enormous hero typography.

The institution should appear naturally inside About.

Why?

Because the website represents ARAV.

Not his institution.

His college is part of his story, not his entire identity.

---

# 38. MECHANICAL ENGINEERING POSITIONING

Mechanical Engineering should be treated similarly.

The interesting contrast is:

> Mechanical engineering student who loves software.

Use that contrast.

Do not apologize for it.

Do not explain why he isn't coding professionally.

Do not write:

> “Although I come from a non-CS background…”

There is nothing to defend.

---

# 39. CONTACT SECTION

Do not create a corporate contact form.

No:

Name

Company

Budget

Project type

Message

Instead keep it extremely simple.

Heading:

# Say Hi.

Copy:

> Found something interesting?
> Tell me about it.

Primary action:

Email ARAV.

Secondary:

GitHub.

LinkedIn should NOT appear until a real LinkedIn URL is available.

Never use a dead placeholder icon.

---

# 40. EMAIL INTERACTION

The email address should support:

* open mail client
* copy email

Copying should temporarily replace the label:

`Copy email`

with:

`Copied.`

After approximately 1.5 seconds:

return to default.

Keep the animation subtle.

---

# 41. SOCIAL LINKS — V1

Include:

### GitHub

Aaravbuilds

### Email

Provided ARAV email.

Do not include empty placeholders for:

* LinkedIn
* X
* Instagram
* Discord

When LinkedIn becomes available, it can be introduced without redesign.

---

# 42. FOOTER

Footer should not say:

> © 2026 Arav Patel. All Rights Reserved.

as the primary visual statement.

It may exist as tiny legal metadata if desired.

Primary footer personality:

> **Made while exploring.**

Secondary:

> ARAV — somewhere on the internet.

Small copyright line may follow.

---

# 43. CURSOR PERSONALITY

Retain the custom cursor defined by `DESIGN.md`.

Additionally allow contextual pointer labels.

Examples:

Project:

`visit ↗`

GitHub:

`github ↗`

Email:

`say hi ↗`

Myself:

`still building…`

Explorer's Log:

`inspect`

Do not display text beside the cursor constantly.

Only activate contextual labels where they add meaning.

---

# 44. SECTION ENTRY MOTION

Keep all motion restrained.

Add subtle entry behavior where appropriate:

Section heading:

opacity 0 → 1

translateY approximately 12px → 0

Content:

slightly delayed reveal

Do NOT animate every paragraph word-by-word.

Do NOT make the user wait for text.

Scroll animation must enhance the document, not control it.

---

# 45. ARAV EASTER EGG

Add exactly one hidden interaction.

Typing:

`explore`

while no input is focused should trigger a tiny temporary message.

Example:

> `good choice.`

Then it disappears.

No modal.

No confetti.

No sound.

No achievement system.

This should feel like someone discovered a small secret rather than triggered a game.

---

# 46. PAGE STRUCTURE — V1

V1 should primarily be a one-page website.

Route:

`/`

This page contains the entire experience.

Do NOT create empty pages simply to make the architecture look larger.

---

# 47. PROJECT CASE STUDIES

Architecture should support future routes:

`/projects/[slug]`

But detailed case studies are NOT required for initial launch.

Initially:

JoSAA Atlas may link directly to the live project and GitHub.

CapitalFlow may show only available actions depending on its current state.

Later, major projects can receive proper case studies.

The homepage must not depend on case studies existing.

---

# 48. FUTURE PROJECT CASE STUDY MODEL

When introduced, a project page may contain:

* title
* one-line idea
* problem
* why it was built
* screenshots
* development story
* interesting technical decisions
* things that went wrong
* technology
* source
* live version
* lessons learned

Avoid corporate headings such as:

`CHALLENGE / SOLUTION / IMPACT`

unless genuinely useful.

These are personal projects.

Let them sound personal.

---

# 49. FUTURE WRITING

The architecture should permit a future:

`/writing`

section.

Do not implement it in V1.

Potential future topics:

* things Arav learned
* project build logs
* engineering
* technology explorations
* experiments
* opinions
* notes

Explorer's Log can eventually link into longer writing.

---

# 50. FUTURE EXPERIENCE

When meaningful experience exists, introduce:

# Places I've Built

instead of simply:

# Experience

Potential entries:

* internship
* research
* open source
* startup
* club
* professional project

Do not show the section until it has genuine content.

---

# 51. CONTENT MANAGEMENT

V1 does not require a CMS.

Content should be stored in structured local data.

Recommended models:

`projects`

`skills`

`explorerLog`

`socialLinks`

`navigation`

This makes updating the portfolio easy without putting content directly inside component markup.

---

# 52. PROJECT DATA MODEL

Each project should support:

```text
id
slug
name
number
shortDescription
longDescription
status
thumbnail
technologies[]
githubUrl
liveUrl
caseStudyUrl
featured
year
```

Fields can be null where appropriate.

UI must gracefully hide unavailable actions.

---

# 53. EXPLORER LOG DATA MODEL

```text
id
title
category
description
status
dateAdded
url
```

The URL is optional.

An Explorer's Log item does not need to lead anywhere.

---

# 54. SKILL DATA MODEL

```text
name
category
icon
status
```

Possible status:

`using`

`learning`

Do not expose numerical proficiency.

---

# 55. SITE TECHNOLOGY

For building this particular portfolio, preferred implementation:

### Framework

Next.js

### Styling

Tailwind CSS

### Motion

Framer Motion where genuinely necessary

CSS transitions where sufficient

### Icons

Lucide

### Fonts

Follow `DESIGN.md`

### Hosting

Vercel-compatible deployment

### Backend

None required for V1.

### Database

None required.

### Authentication

None.

The website is a public static/predominantly static portfolio.

Do not introduce unnecessary infrastructure.

---

# 56. ARAV'S DISPLAYED TECHNOLOGY VS WEBSITE TECHNOLOGY

Do not confuse these two things.

The website itself may be implemented using frameworks not shown in Arav's personal skill list.

The Skills section must only represent technologies Arav wants to claim personally.

Initial displayed technologies:

* C++
* HTML
* CSS
* JavaScript
* Python
* Git
* GitHub

---

# 57. RESPONSIVE REQUIREMENTS

The complete experience must work on:

* desktop
* laptop
* tablet
* mobile

Mobile is not a reduced-quality version.

Important adaptations:

Custom cursor:

disabled.

Cursor labels:

disabled.

Hover-dependent information:

must become directly visible or tappable.

Hero typography:

scales down while preserving impact.

Project previews:

stack appropriately.

Explorer Marker:

either reduced or hidden where it obstructs the interface.

Command keyboard shortcut:

desktop only.

Navigation:

adapted for touch.

---

# 58. PERFORMANCE

The portfolio should feel immediate.

Do not sacrifice performance for animation.

Target:

* optimized images
* local/optimized fonts where practical
* no unnecessary video background
* no huge JavaScript animation bundle
* lazy-load below-fold media
* avoid layout shifts
* transform/opacity-based animation
* responsive image sizing

The loader must never be used to hide a genuinely slow website.

---

# 59. ACCESSIBILITY

The portfolio should remain usable with:

* keyboard navigation
* screen readers
* reduced motion
* touch
* no custom cursor
* animations disabled

All interactive elements require accessible labels.

External links should be semantically understandable.

Maintain strong text contrast.

Never hide essential information exclusively behind hover.

---

# 60. SEO

Title:

> **ARAV — An Explorin' Student**

Suggested description:

> ARAV is a mechanical engineering student exploring software, technology and whatever interesting idea comes next.

Metadata should include:

* Arav Patel
* ARAV
* personal portfolio
* software projects
* JoSAA Atlas

Do not keyword-stuff.

---

# 61. OPEN GRAPH

When shared online, the site should generate a deliberate preview rather than a random screenshot.

Primary OG visual:

Almost-black background.

Large:

> **ARAV**

Small:

> An explorin' student.

Bottom corner:

> `somewhere on the internet`

Minimal.

No profile photo required.

---

# 62. FAVICON

Avoid generic:

`AP`

inside a gradient circle.

Preferred favicon:

a simple custom `A`

or:

an abstract explorer marker derived from the ARAV identity.

It must work in monochrome at extremely small sizes.

---

# 63. COPY RULES

The website must speak like a human.

Use:

short sentences

occasional lowercase microcopy

dry humor

confidence

curiosity

simple vocabulary

Avoid:

corporate language

buzzwords

fake expertise

motivational quotes

startup jargon

AI-generated sounding copy

Examples of acceptable language:

> still building…

> went down a rabbit hole.

> made while exploring.

> things I've picked up.

> some ideas survived.

> no stable release planned.

---

# 64. CAPITALIZATION SYSTEM

Major identity:

`ARAV`

Project names:

Normal official capitalization.

Microcopy:

lowercase is allowed.

Section headings:

Title Case or sentence-like depending on composition.

Do not randomly uppercase everything.

---

# 65. THINGS THIS WEBSITE MUST NEVER SAY

Do not write:

> Passionate developer.

> Tech enthusiast.

> Innovative problem solver.

> Results-driven engineer.

> Turning ideas into scalable solutions.

> Building seamless digital experiences.

> Leveraging cutting-edge technology.

> Aspiring software engineer with a passion for...

These phrases erase personality.

If copy could belong to 50,000 student portfolios, rewrite it.

---

# 66. NO FAKE METRICS

Do not add:

`10+ Projects`

`7+ Technologies`

`500+ Hours Coding`

`100% Passion`

No meaningless counters.

Real work should speak for itself.

---

# 67. NO PROFILE PHOTO REQUIREMENT

V1 does not require a headshot.

The identity should work entirely through:

* ARAV
* typography
* copy
* projects
* interactions

A photo can be introduced later if it genuinely improves the About section.

---

# 68. NO TESTIMONIALS

Do not create testimonials from:

teachers

friends

clients

AI

or fictional collaborators.

There is currently no product reason for them.

---

# 69. NO ACHIEVEMENTS SECTION YET

Do not manufacture an Achievements section simply because portfolios normally contain one.

When meaningful achievements accumulate, the site can add them naturally.

---

# 70. V1 SCOPE

V1 MUST include:

* opening loader
* shutter reveal
* responsive navbar
* hero
* custom desktop cursor
* project section
* JoSAA Atlas
* CapitalFlow
* special Myself project
* Explorer Marker
* Explorer's Log
* skills
* GitHub graph
* About
* contact
* footer
* command menu
* contextual pointer labels
* `explore` Easter egg
* complete responsive behavior
* reduced-motion support
* metadata / OG setup

---

# 71. V1 NON-GOALS

Do NOT build:

* authentication
* admin dashboard
* database
* CMS
* comments
* newsletter
* analytics dashboard
* contact CRM
* public guestbook
* résumé builder
* project voting
* social network
* AI chatbot
* theme marketplace
* complex blog
* light mode simply for feature count

Keep the portfolio focused.

---

# 72. PRIMARY DESKTOP JOURNEY

Visitor enters.

Multilingual greetings rapidly cycle.

`found you.`

`ARAV`

Dark shutter moves upward.

The hero appears:

> Hey, I'm ARAV.
> I wander into ideas.
> Sometimes they become software.

The custom cursor begins following the visitor.

They scroll.

Explorer Marker changes:

`00 / ARAV`

→

`01 / BUILDS`

They encounter JoSAA Atlas.

Hover.

Project subtly enlarges.

Image brightens.

A label follows the pointer:

> Visit Project ↗

They encounter CapitalFlow.

Then:

`02 / MYSELF`

The site unexpectedly presents:

> Project 00
> Myself
> In Progress

Hover:

> still building…

The tone of the portfolio becomes obvious.

The visitor continues.

Explorer's Log reveals what currently interests ARAV.

Skills show tools collected along the way.

GitHub visualizes the trail.

About explains the person.

The final section says:

> Say Hi.

Then:

> Made while exploring.

The visitor should feel like they met somebody rather than inspected a résumé.

---

# 73. SUCCESS CRITERIA

The website succeeds if a visitor can remember something about it several minutes after leaving.

Specifically, likely memories should be:

> “That exploring student.”

or:

> “The guy whose biggest project was himself.”

or:

> “I wander into ideas. Sometimes they become software.”

That is more valuable for this portfolio than maximizing the number of sections.

---

# 74. ACCEPTANCE CRITERIA

The product is ready for V1 when:

The loader works smoothly without delaying access unnecessarily.

The hero remains visually powerful across desktop and mobile.

Every navigation item leads somewhere meaningful.

JoSAA Atlas is represented accurately.

CapitalFlow is represented according to its actual development state.

The `Myself` project feels intentional rather than comedic filler.

Explorer's Log can be edited easily.

Only genuine skills are displayed.

GitHub activity is authentic.

Email and GitHub links work.

Missing LinkedIn does not produce an empty placeholder.

All desktop hover interactions have sensible touch equivalents.

No content overlaps at any supported viewport.

Reduced-motion mode remains fully functional.

The custom cursor never blocks interaction.

Project images are optimized.

No fake experience, metrics or achievements exist.

The site feels inspired by the interaction quality of the design reference without appearing to be a reskinned copy.

Most importantly:

**The website feels like ARAV.**

---

# 75. FINAL PRODUCT STATEMENT

ARAV should not attempt to prove that an undergraduate has already figured everything out.

It should celebrate the opposite.

He's exploring.

He's learning.

He's building.

He's changing direction.

And every once in a while, one of those rabbit holes becomes something worth putting on the internet.

That is the portfolio.

> **ARAV**
> **An explorin' student.**
