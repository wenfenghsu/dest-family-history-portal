"""Copy the portal's public assets into the GitHub Pages directory."""
from pathlib import Path
from shutil import copy2

root = Path(__file__).resolve().parent
(root / "docs").mkdir(exist_ok=True)
for name in ("index.html", "styles.css", "app.js", "config.js"):
    copy2(root / "static" / name, root / "docs" / name)
(root / "docs" / ".nojekyll").touch()
