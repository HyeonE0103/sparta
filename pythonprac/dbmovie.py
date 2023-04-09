from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster0.k3deo2l.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

movie = db.movies.find_one({'title': '스즈메의 문단속'})
print(movie['rate'])

targetRate = movie['rate']
sameMovies = list(db.movies.find({'rate': targetRate},{'_id':False}))

for i in sameMovies:
    if i['title'] != '스즈메의 문단속':
      print(i)

db.movies.update_one({'title':'스즈메의 문단속'},{'$set':{'rate':0}})
