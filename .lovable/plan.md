
# Plan: Fix Corrupted Vite Installation

## Problem Identified
The project has a corrupted Vite installation causing an "Internal Server Error". The error shows Vite is looking for chunk files (`dep-D-7KCb9p.js`) that don't exist in the installed version.

The root cause is **conflicting lockfiles** - the project has both:
- `package-lock.json` (npm)
- `bun.lockb` and `bun.lock` (Bun)

When the dev server tries to start, the mismatched dependencies cause module resolution failures.

## Solution

### Step 1: Remove Bun Lockfiles
Delete the conflicting Bun lockfiles to standardize on npm:
- Delete `bun.lock`
- Delete `bun.lockb`

This ensures only `package-lock.json` is used for dependency resolution.

### Step 2: Pin Vite to a Stable Version
The current `vite: ^7.3.1` is a very new major version. To ensure stability, we'll pin to a well-tested version:
- Change `"vite": "^7.3.1"` to `"vite": "^6.3.5"` in devDependencies
- This is the latest stable Vite 6.x release with proven compatibility

### Step 3: Regenerate package-lock.json
After removing Bun lockfiles and updating the Vite version, the package-lock.json will be regenerated with clean, consistent dependencies.

## Expected Outcome
After these changes, the dev server will start cleanly without module resolution errors, and the Apple-style e-commerce site will load correctly.

---

## Technical Details

**Files to modify:**
1. `package.json` - Update Vite version from `^7.3.1` to `^6.3.5`
2. `package-lock.json` - Will be regenerated automatically

**Files to delete:**
1. `bun.lock`
2. `bun.lockb`

**Why Vite 6.x instead of 7.x:**
- Vite 7.x was released very recently and may have compatibility issues
- Vite 6.x is battle-tested with the current React 19 and plugin ecosystem
- The `@vitejs/plugin-react@^5.1.2` is designed for Vite 6.x
