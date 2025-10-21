# Python Auto-Registry Bot

An automated form-filling bot that uses Google Chrome to fill out registration forms automatically. This tool is designed to save time by automating repetitive form submissions.

## What This Project Does

This Python script automatically:
- Opens Google Chrome browser
- Navigates to a Google Forms registration page
- Fills out form fields with predefined data (username, gender, telegram ID)
- Selects appropriate options (club selection, gender, etc.)
- Submits the form automatically

**Perfect for:** Automating repetitive form submissions, testing form functionality, or batch registrations.

## Prerequisites

Before you start, make sure you have these installed on your computer:

### 1. Python 3.7 or Higher
- **Download:** Go to [python.org](https://www.python.org/downloads/)
- **Install:** Run the installer and **check the box** "Add Python to PATH"
- **Verify:** Open Command Prompt (Windows) or Terminal (Mac/Linux) and type:
  ```bash
  python --version
  ```
  You should see something like "Python 3.9.x" or higher.

### 2. Google Chrome Browser
- **Download:** [Chrome Browser](https://www.google.com/chrome/)
- **Install:** Follow the installation instructions

## Step-by-Step Setup Guide

### Step 1: Clone the Project
1. **Using Git (Recommended):**
   - Open Command Prompt/Terminal
   - Navigate to where you want to save the project
   - Run: `git clone [repository-url]`
   - This will create a `python-autoregistry` folder

2. **Alternative - Download ZIP:**
   - Download the project as a ZIP file
   - Extract it to your desired location
   - Remember where you saved it (e.g., `C:\Users\YourName\python-autoregistry`)

### Step 2: Open Command Prompt/Terminal in Project Folder

**Windows (Easiest Method):**
1. Open File Explorer and navigate to the `python-autoregistry` folder
2. Click in the address bar and type `cmd`, then press Enter
3. Command Prompt will open directly in the project folder

**Windows (Alternative):**
- Press `Win + R`, type `cmd`, press Enter
- Then navigate to the project folder using `cd` command

**Mac/Linux:**
- Press `Cmd + Space` (Mac) or `Ctrl + Alt + T` (Linux)
- Type "Terminal", press Enter
- Navigate to the project folder using `cd` command

### Step 4: Create a Virtual Environment
This keeps the project's dependencies separate from other Python projects:
```bash
python -m venv .venv
```
Wait for this to complete (it may take a minute).

### Step 5: Activate the Virtual Environment
**For Windows:**
```bash
.venv\Scripts\activate
```

**For Mac/Linux:**
```bash
source .venv/bin/activate
```

**You'll know it worked when you see `(venv)` at the beginning of your command line.**

### Step 6: Install Required Packages
```bash
pip install -r requirements.txt
```
This installs Selenium (for browser automation) and WebDriver Manager (for Chrome driver).


## How to Use

### Quick Start
1. **Activate your virtual environment** (you should see `(venv)` in your command line)
2. **Run the script:**
   ```bash
   python -m src.main
   ```
3. **Watch the magic happen!** Chrome will open and automatically fill out the form

### Customizing Your Data
To change what information gets filled in the form, edit the `src/main.py` file:

```python
form_data = Settings(
    gender=Gender.MALE,              # Choose MALE, FEMALE, or NON_BINARY
    telegram="@YourTelegramId",      # Replace with your Telegram username
    username="YourUsername",         # Replace with your desired username
)
```

### Advanced Customization

#### Changing the Form URL
If you want to use this script with a different Google Form:
1. Open `src/settings.py`
2. Find the `url` parameter in the `Settings` class
3. Replace it with your form's URL:
   ```python
   url: str = "https://your-form-url-here"
   ```

#### Adding More Form Fields
The script is designed to work with the specific form structure. If you need to modify it for different forms, you'll need to edit the `src/main.py` file and update the element selectors.

### Running Multiple Times
- You can run the script as many times as you want
- Each run will fill out a new form submission
- Make sure to update your data in `settings.py` if needed between runs

## Troubleshooting

### "Python is not recognized" Error
- **Solution:** Python is not installed or not added to PATH
- **Fix:** Reinstall Python and make sure to check "Add Python to PATH"

### "Chrome driver not found" Error
- **Solution:** The script will automatically download Chrome driver
- **If it fails:** Make sure you have Google Chrome installed

### "Module not found" Error
- **Solution:** Virtual environment is not activated
- **Fix:** Run `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Mac/Linux)

### Chrome Opens But Doesn't Fill Forms
- **Solution:** The target website might have changed
- **Fix:** Check if the form URL in `src/settings.py` is still correct

## Project Structure

```
python-autoregistry/
├── src/
│   ├── main.py              # Main script that runs the automation
│   ├── settings.py          # Configuration and form data
│   └── chrome/              # Chrome automation components
│       ├── custom_chrome_driver.py
│       ├── custom_chrome_element.py
│       ├── custom_chrome_options.py
│       └── custom_chrome_settings.py
├── requirements.txt         # Required Python packages
├── .gitignore              # Files to ignore in version control
└── README.md               # This file
```

## Safety Notes

- This script only fills forms on the specified Google Forms URL
- It doesn't collect or store any personal data
- Always review the form data before running the script
- The script includes a 5-second delay at the end to let you see the results

## Getting Help

If you encounter issues:
1. Check that Python and Chrome are properly installed
2. Make sure your virtual environment is activated
3. Verify that all dependencies are installed with `pip install -r requirements.txt`
4. Check that the form URL in `settings.py` is accessible

## What's Next?

Once you're comfortable with the basic setup, you can:
- Modify the form data in `src/settings.py`
- Add more form fields to fill
- Create multiple configurations for different forms
- Schedule the script to run automatically