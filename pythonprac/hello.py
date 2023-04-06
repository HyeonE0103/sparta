import requests
from bs4 import BeautifulSoup

URL = "https://movie.daum.net/ranking/reservation"
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(URL, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

#mainContent > div > div.box_ranking > ol > li:nth-child(1) > div > div.thumb_cont > strong
movies = soup.select("#mainContent > div > div.box_ranking > ol > li")

for movie in movies:
    a = movie.select_one('div > div.thumb_cont > strong').text
    if a is not None:	# None이 아닐때만
    	print(a)