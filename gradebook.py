def get_grade(s1, s2, s3):
    average = (s1 + s2 + s3)/3
    if average >= 90: return "A"
    if average >= 80: return "B"
    if average >= 70: return "C"
    if average >= 60: return "D"
    return "F"