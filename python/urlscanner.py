
import re
import requests
from bs4 import BeautifulSoup
from urllib.error import URLError
from requests.exceptions import InvalidURL, ConnectionError

def main():
    url = input("*Give a valid URL and the program will scan "
    "the content whether it contains dangerous words!"
    "\n*Give empty input to quit."
    "\n*Type url here (use format https://www...): ")
    if url == "":
        quit()
    if url != "":
        try:
            sisalto = requests.get(url)
            if sisalto.encoding == None:
                save_media(sisalto)
            else:
                scan_content(url)
        except (InvalidURL, ValueError):
            print("\n*Something went wrong!"
                "\n*URL is not correct format (use format https://www...), try again\n!")
            main()
        except ConnectionError:
            print("Could not connect!"
            "\nThe URL you tried to reach is not responding... try again later!\n")
            main()

def scan_content(url):
    dangerous_words = r"\b(?:bomb|terror|terrorist|terrorists|terrorism|murder|kill)\b"
    sisalto = requests.get(url).content
    soup = BeautifulSoup(sisalto, 'html.parser')
    text = soup.get_text()
    filter_words = re.findall(dangerous_words,text, re.IGNORECASE)
    print(f"\n!! There was {len(filter_words)} dangerous words in the site: {url} !!\n")
    save_url(soup.prettify())


def save_media(sisalto):
    save_media_location = input("*This isn't a html file with 'utf-8' encoding.\n"
        "*If you want to save anyway give a path to the location you want to save or\n"
        "*give empty input to quit.\n")
    if save_media_location == "":
        main()
    else:
        try:
            with open(save_media_location, 'wb') as f:
                f.write(sisalto.content)
            print(f"Saved content here: {save_media_location}!\“")
            main()
        except PermissionError:
            print("\n*Something went wrong!")
            print("\nCheck if you have permission and try again!\n")
            save_media(sisalto)
        except OSError:
            print("\n*Something went wrong!")
            print("\n*Check path or filename and try again!\n")
            save_media(sisalto) 


def save_url(soup):
    save_location = input(f"*Give a path to the location you want to save the site's content."
                            "\n*Or give an empty input to return in the begining without saving:\n")
    if save_location == "":
        main()
    if save_location != "":
        try:
            with open(save_location, 'w', encoding='utf-8') as f: 
                f.write(soup)
            print(f"\nSaved content here: {save_location}!\n")
            main()
        except PermissionError:
            print("\n*Something went wrong!")
            print("\nCheck if you have permission and try again!\n")
            save_url(soup)
        except OSError:
            print("\n*Something went wrong!")
            print("\n*Check path or file name and try again!\n") 
            save_url(soup)

if __name__=="__main__":
    main()