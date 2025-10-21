from dataclasses import dataclass

@dataclass
class CustomChromeSettings:
    """Settings for CustomChromeDriver configuration."""
    wait_timeout: int = 10
    element_wait_time: int = 3
