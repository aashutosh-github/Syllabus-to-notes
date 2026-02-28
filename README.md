# Syllabus-to-Notes Agent (Bun Edition)

An automated multi-agent pipeline built for the Bun runtime using the Google GenAI 2.0 SDK. This tool transforms unstructured syllabus text into a structured JSON roadmap and generates exhaustive, first-principles academic notes in a single Markdown file.

---

## Features

* **Native Bun Support:** Optimized for the Bun runtime, utilizing built-in environment variable loading and fast stream processing.
* **JSON-Schema Extraction:** Uses Gemini 2026 schema-constrained output to ensure a reliable unit roadmap.
* **Sequential Drafting:** Processes one unit at a time to maximize context depth and prevent model fatigue.
* **Persistent Writing:** Automatically creates Notes.md on the first unit and appends subsequent units to the same file.
* **Buffered Multi-line Input:** Handles large syllabus pastes without premature termination from line breaks.

---

## Prerequisites

* Bun runtime installed on Linux, macOS, or Windows (WSL)
* A Google Gemini API Key

---

## Installation

### 1. Create the project folder

```bash
mkdir syllabus-to-notes && cd syllabus-to-notes
```

### 2. Initialize the project and install the SDK

```bash
bun init -y
bun add @google/genai
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory. Bun will automatically load this:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

---

## File Structure

* `index.js`: The main orchestrator (Terminal input and LLM loop).
* `fileWorker.js`: Helper module for local file system I/O.
* `.env`: Secure storage for your API key.
* `Notes.md`: The generated output (Created upon execution).

---

## How to Use

### Run the script with Bun

```bash
bun index.js
```

### Paste your Syllabus

When prompted, paste your entire syllabus text.

### Signal Completion

Because the script uses a buffered stream, you must signal the end of the input:

1. Press Enter (to ensure you are on a new line).
2. Linux/Mac: Press `Ctrl + D`.
3. Windows: Press `Ctrl + Z`.

---

## System Logic

The pipeline operates in three distinct phases:

### Phase 1 (The Architect)

The LLM analyzes the raw text and extracts a JSON array containing the Unit ID, Title, and Topics.

### Phase 2 (The Writer)

For each unit in the JSON array, a Writer agent is triggered. It follows a "First Principles Discovery" framework to explain concepts from a foundational level.

### Phase 3 (The Worker)

The local file system worker appends the Markdown output to `Notes.md`.

---

Built for high-depth academic note generation using Bun + Gemini.
