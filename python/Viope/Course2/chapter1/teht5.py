def my_split(string, word):
    list = []
    word = ""
    for i in range(len(string)):
        if string[i] != " ":
            word = word + string[i]
        else:
            list.append(word)
            word = ""
    list.append(word)
    return list

def my_join(list, word):
    string = ""
    for i in range(len(list)):
        string = string + list[i] + word
        if i == len(list) - 1:
            string = string[:-1]
    return string

sentence = str(input("Please enter sentence: "))
print(my_join(my_split(sentence, " "), ","))
print(my_join(my_split(sentence, " "), "\n"))
