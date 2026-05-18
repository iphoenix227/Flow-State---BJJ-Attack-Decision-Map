# Setup Python environment for this project

If your editor (Pylance) reports "Import PIL could not be resolved", follow these steps:

1. Ensure you have a Python interpreter selected in VS Code (bottom-right). Choose the same interpreter where you run `python` in terminal.

2. Install dependencies into that interpreter/environment:

```powershell
python -m pip install -r requirements.txt
```

or, if you prefer editable install and using `pyproject.toml`:

```powershell
python -m pip install --upgrade build
python -m pip install -e .
```

3. Reload VS Code window (Command Palette → `Developer: Reload Window`) and wait for Pylance to re-analyze.

4. If Pylance still shows unresolved imports, check `Python: Select Interpreter` and ensure it points to the environment used above. You can also add the environment's site-packages path to `python.analysis.extraPaths` in `.vscode/settings.json`.

Example `.vscode/settings.json` to add (create the file if missing):

```json
{
  "python.analysis.extraPaths": [
    "./src"
  ]
}
```

This project includes `requirements.txt` and `pyproject.toml` with `Pillow` listed; installing into your active interpreter should resolve the diagnostics.
