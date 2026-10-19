"""Локальный статический сервер главной страницы (src/ui)."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src" / "ui"
PORT = 4173


class UiHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), UiHandler)
    print(f"Alex Industries UI: http://127.0.0.1:{PORT}/")
    server.serve_forever()
