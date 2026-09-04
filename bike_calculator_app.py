#!/usr/bin/env python3
"""
Bike Gearing Calculator - Desktop Application
Standalone Windows executable version with embedded web view
"""

import os
import sys
import threading
import http.server
import socketserver
from pathlib import Path

try:
    import webview
except ImportError:
    print("Installing required package: pywebview...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pywebview[cef]"])
    import webview

# Configuration
APP_TITLE = "Bike Gearing Calculator"
APP_WIDTH = 1400
APP_HEIGHT = 900
SERVER_PORT = 8765
PUBLIC_DIR = "public"

class BikeCalculatorApp:
    def __init__(self):
        self.server = None
        self.server_thread = None
        self.running = False
        
    def get_public_dir(self):
        """Get the absolute path to the public directory"""
        if getattr(sys, 'frozen', False):
            # Running as compiled executable
            base_path = Path(sys._MEIPASS)
        else:
            # Running as script
            base_path = Path(__file__).parent
        
        public_path = base_path / PUBLIC_DIR
        if not public_path.exists():
            raise FileNotFoundError(f"Public directory not found: {public_path}")
        
        return str(public_path)
    
    def start_server(self):
        """Start the HTTP server in a separate thread"""
        class Handler(http.server.SimpleHTTPRequestHandler):
            def __init__(self, *args, **kwargs):
                super().__init__(*args, directory=self.get_public_dir(), **kwargs)
            
            def log_message(self, format, *args):
                # Suppress server logs
                pass
        
        Handler.get_public_dir = self.get_public_dir
        
        try:
            self.server = socketserver.TCPServer(("127.0.0.1", SERVER_PORT), Handler)
            self.running = True
            print(f"Server started on port {SERVER_PORT}")
            self.server.serve_forever()
        except Exception as e:
            print(f"Server error: {e}")
            self.running = False
    
    def stop_server(self):
        """Stop the HTTP server"""
        if self.server:
            self.server.shutdown()
            self.server.server_close()
            self.running = False
            print("Server stopped")
    
    def on_closing(self):
        """Handle window closing event"""
        self.stop_server()
    
    def run(self):
        """Run the application"""
        try:
            # Get public directory
            public_dir = self.get_public_dir()
            print(f"Public directory: {public_dir}")
            
            # Start server in background thread
            self.server_thread = threading.Thread(target=self.start_server, daemon=True)
            self.server_thread.start()
            
            # Wait a moment for server to start
            import time
            time.sleep(0.5)
            
            if not self.running:
                raise Exception("Failed to start server")
            
            # Create and show window
            url = f"http://127.0.0.1:{SERVER_PORT}/"
            window = webview.create_window(
                title=APP_TITLE,
                url=url,
                width=APP_WIDTH,
                height=APP_HEIGHT,
                resizable=True,
                fullscreen=False,
                min_size=(800, 600)
            )
            
            # Start the GUI
            webview.start()
            
        except Exception as e:
            print(f"Error: {e}")
            import traceback
            traceback.print_exc()
            input("Press Enter to exit...")
        finally:
            self.stop_server()

def main():
    """Main entry point"""
    print(f"Starting {APP_TITLE}...")
    app = BikeCalculatorApp()
    app.run()

if __name__ == "__main__":
    main()