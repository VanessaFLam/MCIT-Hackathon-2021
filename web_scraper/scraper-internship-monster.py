import requests

job_type = "Internship"

URL = "https://www.monster.com/jobs/search/?q=" + job_type
page = requests.get(URL)

print(URL)