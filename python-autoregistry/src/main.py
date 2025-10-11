from time import sleep

from .chrome import CustomChromeDriver
from .chrome.custom_chrome_options import CustomChromeOptionsBuilder
from .chrome.custom_chrome_settings import CustomChromeSettings
from .settings import Gender, Settings


def main():
    """
    Main function to demonstrate using CustomChromeDriver to open a site and find a button by class.
    """
    # Form data with default values
    form_data = Settings(
        gender=Gender.MALE,
        telegram="", # Your Telegram username, like @TelegramId
        username="", # Your desired username, any language accepted
    )

    # Create CustomChromeDriver instance
    options = CustomChromeOptionsBuilder().build()
    driver = CustomChromeDriver(options=options, settings=CustomChromeSettings())

    # Navigate to URL using the driver's built-in method
    if not driver.get_url(form_data.url):
        return print("Could not navigate to the URL")

    # Click on the club radio button using aria-label
    element = driver.element(f"//div[@role='radio'][@aria-label='{form_data.clubname.value}']")
    if not element:
        return print("Element not found")
    element.click()

    # Navigate to the next page
    button = driver.element("//div[@role='button' and @jsname='OCpkoe']")
    if not button:
        return print("Next Button not found")
    button.click()

    if not driver.wait():
        return print("Page wasn't loaded correctly. Feel free to debug it yourself")

    # Find the input field - target the actual input element
    input_field = driver.element("//input[@type='text' and @jsname='YPqjbf']")
    if not input_field:
        return print("Input field not found")
    input_field.input(form_data.username)

    # Click on the radio button for gender
    radio_button = driver.element(f"//div[@role='radio'][@aria-label='{form_data.gender.value}']")
    radio_button.click()

    # Click on the radio button for "Не/Нет" (No)
    radio_button2 = driver.element("//div[@id='i28' and @role='radio']")
    radio_button2.web_element.click()

    # Find and type into the second input field
    input_field2 = driver.element("//input[@type='text' and @aria-labelledby='i31 i34']")
    if not input_field2:
        return print("Input field not found")
    input_field2.input(form_data.telegram)

    # Click the submit button
    submit_button = driver.element("//div[@role='button' and @aria-label='Submit']")
    if not submit_button:
        return print("Submit button not found")
    submit_button.click()

    sleep(5)


if __name__ == "__main__":
    main()
