from enum import Enum


class IncidentStatus(Enum):
    PENDING = "pending"
    VALIDATED = "validated"
    REJECTED = "rejected"

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]


class TaskStatus(Enum):
    OPEN = "open"
    CLOSED = "closed"
    POSTPONED = "postponed"

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]
