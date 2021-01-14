import json

#
# with open ("json_practice.json") as json_file:
#     data = json.load(json_file)
#     temp = data["array"]
#     array_len = len(temp)
#     print(array_len)
#     print(data)
#     print(temp)
#     # print(temp['name'])
#     for i in temp:
#         print(temp['name'])

with open ("test_python_corrections.json") as json_file:
    data = json.load(json_file)
    temp = data["results"]
    array_len = len(temp)
    # print(array_len)
    # print(data)
    # print(temp)
    # print(temp['name'])
    for i in temp:
        print(i['jobtitle'])
