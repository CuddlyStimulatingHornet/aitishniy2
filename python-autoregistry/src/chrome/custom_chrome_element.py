from time import sleep
from selenium.webdriver.remote.webelement import WebElement
from selenium.common.exceptions import StaleElementReferenceException

class CustomChromeElement:
    def __init__(self, web_element: WebElement):
        self.web_element = web_element
    
    def click(self):
        """Click the element."""
        return self.web_element.click()

    def input(self, value: str):
        """Input value into the element."""
        try:
            self.web_element.click()
            sleep(2)
            self.web_element.clear()
            self.web_element.send_keys(value)
        except StaleElementReferenceException:
            # Element became stale, try direct input without clicking
            try:
                self.web_element.clear()
                self.web_element.send_keys(value)
            except StaleElementReferenceException:
                # If still stale, raise the exception
                raise
        except Exception as e:
            # Try alternative approach - clear and send keys directly
            self.web_element.clear()
            self.web_element.send_keys(value)
