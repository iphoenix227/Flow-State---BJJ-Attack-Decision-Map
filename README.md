# Project 1

This repository contains the **project1** Python package.

## Structure

```
Project_1/
├── src/project1/        # Python package code
│   └── __init__.py
├── tests/               # unit tests
├── scripts/             # helper scripts
│   └── scr.py           # example script
├── docs/                # documentation
├── pyproject.toml       # build configuration
├── README.md            # this file
└── .gitignore           # ignored files
```

## Getting Started

1. Create a virtual environment and activate it:

   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```

2. Install the package in editable mode:

   ```powershell
   pip install -e .
   ```

3. Run tests with pytest:

   ```powershell
   pytest
   ```
