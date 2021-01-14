from indeed import IndeedClient
import requests
import socket

host_name = socket.gethostname()
ip_address = socket.gethostbyname(host_name)

print(f"Hostname: {host_name}")
print(f"IP Address: {ip_address}")

r = requests.get("https://ca.indeed.com/jobs?q=&l=Vancouver%2C+BC")
print(r)
