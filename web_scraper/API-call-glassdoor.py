import requests

url = "https://yourdomain.jobboard.io/api/v1/jobs/search"

querystring = {"q":"Computing","l":"London","d":"20","jt":"1"}

headers = {"JobBoardioURL": "demo.jobboard.io"}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)