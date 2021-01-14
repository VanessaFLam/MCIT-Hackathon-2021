import string

tempfile = "test_corrected_json.json"

read_file = open("test_python_corrections.json", "r+")
lines = read_file.readlines()
file_len = len(lines)

write_file = open(tempfile,"w+")

flag_found = False
for line in lines:
    if "results" in line:
        flag_found = True

    if flag_found == True:
        write_file.write(line)

read_file.close()
write_file.close()

edit_json = open(tempfile, "r+")
edit_json_lines = edit_json.readlines()
edit_json_file_len = len(edit_json_lines)
print(edit_json_file_len)





# snippet = '"snippet"'
#
# for line in edit_json_lines:
#     if snippet in line:
#         print(str.find('''"'''))



# print(file_len)
# file_contents = file.read()
# file_len = len(file_contents)
# print(file_len)
