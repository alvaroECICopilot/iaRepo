# Fix the problems in the code
from datetime import datetime

# Function to calculate the seconds between two dates
def CalculateSecondsBetweenTwoDates(date1, date2):
    date1, date2 = sorted((date1, date2))  # Ensure date1 is earlier than date2
    delta = date2 - date1  # Calculate the difference in seconds
    return delta.total_seconds()

# Example usage
if __name__ == "__main__":
    d1 = datetime(2025, 7, 20, 12, 0, 0)
    d2 = datetime(2025, 7, 20, 14, 30, 0)
    seconds = CalculateSecondsBetweenTwoDates(d1, d2)
    print(f"Seconds between dates: {seconds}")
