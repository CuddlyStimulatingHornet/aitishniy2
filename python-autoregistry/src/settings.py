from dataclasses import dataclass
from enum import Enum


class Gender(Enum):
    """Gender options for the form."""
    FEMALE = "Жаночы/Женский"
    MALE = "Мужчынскі/Мужской"
    NON_BINARY = "Небінарная персона/Небинарная персона"


class Club(Enum):
    """Club options for the form."""
    IT = "Айтишный"
    # Add other club options as needed

@dataclass
class Settings:
    """Form settings and data."""
    username: str
    telegram: str
    gender: Gender
    url: str = "https://docs.google.com/forms/d/19yOoW-aFttTEl9TOjEYtSCFYQy5RJMYQTqcS9WJO6gU/viewform?edit_requested=true"
    clubname: Club = Club.IT
