#!/usr/bin/env python3
"""
Test script for Bike Gearing Calculator app
Tests the application before building executable
"""

import sys
import os
from pathlib import Path

def test_python_version():
    """Test if Python version is compatible"""
    print("Testing Python version...")
    version = sys.version_info
    if version.major >= 3 and version.minor >= 7:
        print(f"✓ Python {version.major}.{version.minor}.{version.micro} (Compatible)")
        return True
    else:
        print(f"✗ Python {version.major}.{version.minor}.{version.micro} (Requires 3.7+)")
        return False

def test_dependencies():
    """Test if required packages are installed"""
    print("\nTesting dependencies...")
    required = ['webview', 'PyInstaller']
    missing = []
    
    for package in required:
        try:
            if package == 'PyInstaller':
                __import__('PyInstaller')
            else:
                __import__(package)
            print(f"✓ {package} is installed")
        except ImportError:
            print(f"✗ {package} is NOT installed")
            missing.append(package)
    
    return len(missing) == 0, missing

def test_public_folder():
    """Test if public folder exists with required files"""
    print("\nTesting public folder...")
    public_dir = Path("public")
    
    if not public_dir.exists():
        print("✗ 'public' folder not found")
        return False
    
    print("✓ 'public' folder exists")
    
    required_files = ['index.html', 'styles.css', 'script.js']
    missing = []
    
    for file in required_files:
        file_path = public_dir / file
        if file_path.exists():
            size = file_path.stat().st_size
            print(f"  ✓ {file} ({size:,} bytes)")
        else:
            print(f"  ✗ {file} NOT FOUND")
            missing.append(file)
    
    return len(missing) == 0

def test_build_scripts():
    """Test if build scripts exist"""
    print("\nTesting build scripts...")
    scripts = ['build_exe.bat', 'build_exe.ps1', 'bike_calculator_app.py']
    
    for script in scripts:
        if Path(script).exists():
            print(f"✓ {script} exists")
        else:
            print(f"✗ {script} NOT FOUND")
            return False
    
    return True

def install_missing_packages(packages):
    """Offer to install missing packages"""
    print(f"\nMissing packages: {', '.join(packages)}")
    response = input("Would you like to install them now? (y/n): ").lower()
    
    if response == 'y':
        print("\nInstalling packages...")
        import subprocess
        
        for package in packages:
            print(f"Installing {package}...")
            try:
                subprocess.check_call([sys.executable, "-m", "pip", "install", package])
                print(f"✓ {package} installed successfully")
            except Exception as e:
                print(f"✗ Failed to install {package}: {e}")
                return False
        
        return True
    else:
        print("Skipping installation.")
        return False

def main():
    """Run all tests"""
    print("=" * 50)
    print("  Bike Gearing Calculator - Pre-Build Test")
    print("=" * 50)
    print()
    
    # Test Python version
    if not test_python_version():
        print("\n⚠ WARNING: Python version is too old!")
        print("Please install Python 3.7 or higher.")
        input("\nPress Enter to exit...")
        return False
    
    # Test dependencies
    deps_ok, missing = test_dependencies()
    if not deps_ok:
        if not install_missing_packages(missing):
            print("\n⚠ WARNING: Some dependencies are missing!")
            print("Install them manually with: pip install pywebview pyinstaller")
            input("\nPress Enter to exit...")
            return False
    
    # Test public folder
    if not test_public_folder():
        print("\n⚠ ERROR: Required files are missing!")
        print("Make sure the 'public' folder contains all web files.")
        input("\nPress Enter to exit...")
        return False
    
    # Test build scripts
    if not test_build_scripts():
        print("\n⚠ ERROR: Build scripts are missing!")
        input("\nPress Enter to exit...")
        return False
    
    # All tests passed
    print("\n" + "=" * 50)
    print("  ✓ ALL TESTS PASSED!")
    print("=" * 50)
    print()
    print("Your system is ready to build the executable!")
    print()
    print("Next steps:")
    print("1. Run build_exe.bat (Windows Command Prompt)")
    print("   OR")
    print("   Run build_exe.ps1 (PowerShell)")
    print()
    print("2. Wait for the build to complete (3-5 minutes)")
    print()
    print("3. Find your executable at: dist\\BikeGearingCalculator.exe")
    print()
    
    response = input("Would you like to test the app now? (y/n): ").lower()
    if response == 'y':
        print("\nStarting test run...")
        print("(Close the window to exit)")
        print()
        try:
            from bike_calculator_app import BikeCalculatorApp
            app = BikeCalculatorApp()
            app.run()
        except Exception as e:
            print(f"\n⚠ Error running app: {e}")
            import traceback
            traceback.print_exc()
    
    input("\nPress Enter to exit...")
    return True

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nTest interrupted by user.")
        sys.exit(0)
    except Exception as e:
        print(f"\n\nUnexpected error: {e}")
        import traceback
        traceback.print_exc()
        input("\nPress Enter to exit...")
        sys.exit(1)