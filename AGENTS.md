# AGENTS.md

## Purpose

Guidelines for AI coding agents (e.g., OpenAI\u00a0Codex) working in this repo. Follow these rules to keep the codebase clean, secure, and easy to maintain.

---

## Coding Standards

* **Language:** TypeScript
* **Framework:** React with Vite
* Use clear, self\u2011documenting names. Avoid abbreviations that are not obvious.
* Prefer pure functions and composition over side effects.
* Keep modules/components under **300** lines.

### Style & Formatting

* Prettier and ESLint configs are canonical. Always run `npm run lint:fix` (or equivalent) before opening a PR.
* Tabs vs. spaces, quote type, and semicolons are enforced by the config—do not override.

### File & Folder Conventions

* Keep pages, components, and utilities in clearly named directories (`/pages`, `/components`, `/utils`).
* Tests live beside the file they cover: `Thing.tsx` \u27a4 `Thing.test.tsx`.
* Images and other assets go in `/public`.

---

## Testing Requirements

* Write unit tests for every new function, component, or utility.
* Integration tests for API routes or critical user flows.
* Minimum coverage target: **80\u00a0percent** lines and branches.
* CI must pass `npm run test` (or equivalent) on each PR.

---

## Commit Messages

Follow **Conventional Commits**:

```
feat: add payment widget
fix: correct typo in footer
chore: bump eslint
```

Include a short (\u226472\u00a0chars) subject line and a concise body if needed.

---

## Pull Request Checklist

* Reference related Issue IDs.
* Summarize what changed and **why**.
* Attach screenshots or GIFs for UI updates.
* Confirm:

  * [ ] Lint passes
  * [ ] Tests pass
  * [ ] No secrets or keys added

---

## Branch Strategy

* `main`: always deployable.
* `dev`: integration branch.
* Feature branches: `feat/<slug>`.

---

## Dependency Management

* Use exact version pins in `package.json` where security matters.
* Run `npm audit` after adding packages.
* Remove unused dependencies promptly.

---

## Security & Secrets

* Never commit secrets, certs, or production data.
* Use environment variables via `.env.example` as a template.

---

## Documentation

* Update `/docs` or in\u2011code comments when you add substantial features.
* Keep README concise—link to deeper docs when needed.

---

## Agent\u2011Specific Guidance

1. **Self\u2011check first.** Run lint and tests locally before suggesting code.
2. **Match existing patterns.** Adopt current file structure and naming.
3. **Stay concise.** Return minimal diff; avoid wholesale rewrites unless asked.
4. **No em\u2011dashes.** Use standard hyphens.
5. **Respect placeholders.** If you see `<ADD…>` tokens, ask for details rather than guessing.
6. **Keep secrets out.** Never invent or include tokens, API keys, or connection strings.
7. **PR messaging.** When creating a pull request, fill the PR template and include a one‑line "Suggested reviewers" list based on changed paths.

