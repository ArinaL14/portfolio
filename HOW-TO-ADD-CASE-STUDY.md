# Adding a New Case Study

## 1. Create the case study page

Copy one of your existing case study files as a template:
- `ezfill.html` — if it's an evaluation/audit
- `pipeline.html` — if it's a redesign
- `release.html` — if it's a new feature

Rename the copy (e.g., `new-project.html`) and edit the content. The structure requires these links:

```html
<!-- Required links in <head> -->
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="case-study.css">

<!-- Required script before </body> -->
<script src="case-study.js"></script>
```

## 2. Add images

1. Create a folder: `images/your-project-name/`
2. Drop your images there
3. **Avoid spaces in filenames** — use dashes instead (e.g., `flow-diagram.png` not `Flow Diagram.png`)
4. Reference them as: `src="images/your-project-name/filename.png"`

## 3. Add the card to `index.html`

Copy an existing project `<section>` block and update:

```html
<section class="project" data-accent="4">
  <div class="project-header">
    <span class="project-number">04</span>
    <span class="project-tag">TYPE / MARKET</span>
  </div>
  <h2 class="project-problem">Your problem statement here.</h2>
  <div class="project-summary">
    <div class="summary-item">
      <span class="summary-label">Approach</span>
      <p>What you did.</p>
    </div>
    <div class="summary-item">
      <span class="summary-label">Outcome</span>
      <p>What happened.</p>
    </div>
  </div>
  <div class="project-visual">
    <a href="new-project.html"><img class="project-image" src="images/your-project-name/thumbnail.png" alt="Description"></a>
  </div>
  <a href="new-project.html" class="project-cta">View Case Study</a>
</section>
```

## 4. Key CSS classes to remember

| Class | What it does |
|---|---|
| `.cs-hero` | Hero section with title |
| `.cs-context` | The 4-column metadata bar |
| `.cs-section` | Standard content section |
| `.cs-finding` | A highlighted finding/decision block |
| `.cs-finding-visual` | Image inside a finding (gets lightbox) |
| `.cs-figure` | Standalone image with caption (gets lightbox) |
| `.cs-list` | Bulleted list with accent dots |
| `.cs-outcome-grid` | 3-column metrics grid |
| `.cs-process-steps` | Numbered step list |

## 5. Checklist before publishing

- [ ] Renumber all project cards sequentially
- [ ] Thumbnail has no spaces in filename
- [ ] Case study page has `styles.css`, `case-study.css`, and `case-study.js` linked
- [ ] Images are in their own subfolder under `images/`
- [ ] Test the lightbox (click images to expand)
- [ ] Check mobile (resize browser to ~375px width)
