import json
import os


def getStateVariableString(data):

    print("data: ", data)

    result = ""
    for i in data:
        result += f"const [{i['id'].lower()}, set{i['id'].lower().capitalize()}] = useState('');\r"
    return result


def getFormFields(data):
    result = ""
    for i in data:
        temp = "<Input\n"
        for j in i:
            temp += '    '+j+'={"'+i[j]+'"}\n'
        temp += "    value={"+i['id'].lower()+"}\n"
        temp += "    onChange={(e) => set" + \
            i['id'].lower().capitalize()+"(e.target.value)}\n"
        temp += "/>\n"
        result += temp
    return result


def main():
    # get the list of all the json files inside the forms folder
    json_files = [pos_json for pos_json in os.listdir(
        'forms') if pos_json.endswith('.json')]

    # loop over the list of json files
    for js in json_files:

        # read the text inside "ui/src/components/forms/form.tsx" as save it to result
        temp = open("ui/src/components/forms/form.tsx", "r")
        result = temp.read()
        temp.close()

        with open("forms/"+js) as fp:
            data = json.load(fp)
            result = result.replace("Form()", data["name"].replace(
                " ", "_").lower().capitalize() + "Form()")
            result = result.replace(
                "//:declaration:", getStateVariableString(data["fields"]))
            result = result.replace("//:header:", data["name"])
            result = result.replace(
                "//:form:", getFormFields(data["fields"]))
            result = result.replace("//:buttonText:", data["buttonText"])
            result = result.replace("//:helperText:", data["helperText"])

            # write the result to the file
            temp = open("ui/src/components/forms/" +
                        data["name"].replace(" ", "_").lower().capitalize()+".tsx", "w")
            temp.write(result)
            temp.close()


if __name__ == "__main__":
    main()
