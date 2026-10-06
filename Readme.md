# Kekstagram — Standalone Photo Sharing Service (Graduation Project)

A modern client-side single-page web application for uploading, editing, and discovering photos. Developed as a graduation project for the Professional JavaScript Developer course at HTML Academy.

*Note: The UI/UX layouts, styling, and DOM templates were provided by the academy. My objective was to engineer the complete client-side architecture, reactive state operations, dynamic UI synchronization, in-memory data processing, and custom form validation engines from scratch.*

## 🛠 Tech Stack & Tooling
- **Core Language:** Pure JavaScript (Vanilla ES6+)
- **DOM & Templating:** High-performance native manipulation, custom micro-templates via `<template>`.
- **Validation Engine:** Integrated with Pristine.js for strict client-side validation constraint control.
- **Image Editing:** Built-in scale controller and dynamic overlay filters (Chrome, Sepia, Marvin, Phobos, Heat).
- **Style Pipelines:** Automated build routines and localized assets distribution.

## 💡 Key Technical & Architectural Features Engineered by Me:
- **100% Offline Autonomy:** Fully refactored the data-fetching architecture to break dependencies on legacy Academy servers. Integrated a structured local database (`mocks.js`) providing resilient mock profiles, comment trees, and user metrics without any network latency.
- **Advanced In-Memory Filtering:** Developed a powerful client-side filter controller supporting three independent view modes:
  - `Default`: Displays the entire localized data collection.
  - `Random`: Implements the Fisher-Yates shuffle algorithm to generate a randomized sample of exactly 10 photos on each toggle.
  - `Discussed`: Performs high-performance array sorting based on nested comment tree complexity.
- **Client-Side Asset Preview:** Implemented a secure pipeline using the native `FileReader` API. User-selected local images are previewed reactively in the workspace and systematically cloned across all real-time filter effect layers.
- **Comprehensive Form Constraints:** Configured intricate data validation workflows to intercept manual uploads. Enforced dynamic hashtag metrics (duplicate checking, character counts, special character tracking via regular expressions) and strict comment boundaries.

## ⚙️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Open `index.html` via a local server environment (e.g., Live Server extension in VS Code).
