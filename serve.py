#!/usr/bin/env python3
"""
Simple HTTP server for Bike Gearing Calculator
Works with Python 3.x without any dependencies
"""

import http.server
import socketserver
import os
import sys

PORT = 3000
PUBLIC_DIR = "public"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)
    
    def log_message(self, format, *args):
        # Custom log format
        print(f"[{self.log_date_time_string()}] {self.address_string()} - {format % args}")

def main():
    # Check if public directory exists
    if not os.path.exists(PUBLIC_DIR):
        print(f"Error: '{PUBLIC_DIR}' directory not found!")
        print(f"Please make sure you're in the correct directory.")
        sys.exit(1)
    
    # Change to project directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    print(f"🚴 Starting Bike Gearing Calculator server...")
    print(f"📁 Serving files from: {os.path.abspath(PUBLIC_DIR)}")
    print(f"🌐 Server URL: http://localhost:{PORT}")
    print(f"📱 Open your browser and navigate to the URL above")
    print(f"🛑 Press Ctrl+C to stop the server")
    print("-" * 50)
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"✅ Server started successfully on port {PORT}")
            print(f"✅ Serving: http://localhost:{PORT}/")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except OSError as e:
        if e.errno == 10048:  # Port already in use
            print(f"❌ Error: Port {PORT} is already in use!")
            print(f"   Try changing the port in serve.py or close other applications using port {PORT}")
        else:
            print(f"❌ Error: {e}")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    main()