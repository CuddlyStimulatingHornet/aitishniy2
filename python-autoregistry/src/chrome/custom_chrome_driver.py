import logging
from typing import Optional

from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.webdriver import WebDriver as ChromeWebDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

from .custom_chrome_element import CustomChromeElement
from .custom_chrome_settings import CustomChromeSettings

logger = logging.getLogger(__name__)


class CustomChromeDriver(ChromeWebDriver):
    """Extended Chrome WebDriver with optimized settings and additional functionality."""

    def __init__(self, options, settings: CustomChromeSettings, **kwargs):
        super().__init__(options=options, **kwargs)
        # Remove webdriver property to avoid detection
        self.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        self.settings = settings

    def get_url(self, url):
        """Navigate to a specific url."""
        try:
            self.get(url)
            return True
        except Exception:
            return False

    def wait(self):
        """Wait until the page is fully loaded."""
        try:
            WebDriverWait(self, self.settings.wait_timeout).until(
                lambda driver: driver.execute_script("return document.readyState") == "complete")
            return True
        except Exception:
            return False

    def element(self, xpath: str) -> Optional[CustomChromeElement]:
        """Find an element by XPath with automatic waiting."""
        try:
            wait = WebDriverWait(self, self.settings.element_wait_time)
            return CustomChromeElement(wait.until(EC.presence_of_element_located((By.XPATH, xpath))))

        except TimeoutException:
            logger.warning(f"Element '{xpath}' not found within {self.settings.element_wait_time} seconds")
            return None

        except Exception as e:
            logger.error(f"Error finding element {xpath}: {e}")
            return None
