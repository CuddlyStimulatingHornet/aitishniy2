from selenium.webdriver.chrome.options import Options

class CustomChromeOptionsBuilder:
    def build(self):
        chrome_options = Options()
        chrome_options.add_argument("--no-sandbox")  # Disable sandbox for compatibility
        chrome_options.add_argument("--disable-dev-shm-usage")  # Prevent memory issues
        chrome_options.add_argument("--disable-blink-features=AutomationControlled")  # Hide automation
        chrome_options.add_argument("--disable-web-security")  # Allow insecure content
        chrome_options.add_argument("--allow-running-insecure-content")  # Allow mixed content
        chrome_options.add_argument("--disable-extensions")  # Disable extensions
        chrome_options.add_argument("--disable-plugins")  # Disable plugins
        chrome_options.add_argument("--disable-images")  # Skip images for speed
        chrome_options.add_argument("--disable-javascript")  # Disable JS
        chrome_options.add_argument("--disable-gpu")  # Disable GPU acceleration
        chrome_options.add_argument("--remote-debugging-port=9222")  # Enable debugging
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])  # Hide automation
        chrome_options.add_experimental_option('useAutomationExtension', False)  # Disable automation extension
        chrome_options.add_experimental_option("detach", True)  # Keep browser open
        
        return chrome_options
