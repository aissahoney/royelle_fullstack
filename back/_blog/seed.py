from django_seed import Seed
from .models import *
from datetime import date


def run():
    seeder = Seed.seeder()

    category_data = [
        {'name': 'Luxury Hotels'},
        {'name': 'Restaurants'},
        {'name': 'SPA Center'},
        {'name': 'Health Club'},
        {'name': 'Industrial'},
        {'name': 'Uncategories'},
]
    for data in category_data:
        seeder.add_entity(Category,1,data)
    seeder.execute()
    print("data Category upload") 
    tag_data = [
        {'name': 'Luxury Hotel'},
        {'name': 'SPA Center'},
        {'name': 'Interior Design'},
        {'name': 'Luxury Restaurant'},
]

    for data in tag_data:
        seeder.add_entity(Tag,1,data)
    seeder.execute()
    print("data Tag upload") 

    articles_data = [
    {
            'validated':True,
            'title': 'How to Book a Room online Step by Step Guide',
            'date': date.today(),
            'content': 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative \nConveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
            'image': 'image/home/blog-1.jpg',
            'category': Category.objects.get(name='Uncategories'),
            'tag': [
                
                    Tag.objects.get(name='Luxury Hotel')
                
            ]
        },
        {
            'validated':True,
            'title': 'Pre Booking Benifits for the Traveller on our Hotel',
            'date': date.today(),
            'content': 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative \nConveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
            'image': 'image/home/blog-1.jpg',
            'category': Category.objects.get(name='Uncategories'),
            'tag': [
               
                    Tag.objects.get(name='Luxury Hotel')
                ,
                
                    Tag.objects.get(name='Interior Design')
                ,
            ]
        },
        {
            'validated':True,
            'title': '5 Discount Period every year for Valuable Clients',
            'date': date.today(),
            'content': 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative \nConveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
            'image': 'image/home/blog-1.jpg',
            'category': Category.objects.get(name='SPA Center'),
            'tag': [
                
                    Tag.objects.get(name='Luxury Hotel')
                ,
                    Tag.objects.get(name='Interior Design')
               
            ]
        },
        {
            'validated':True,
            'title': 'Luxury Hotel for Traveling Spot USA, California',
            'date': date.today(),
            'content': 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative \nConveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
            'image': 'image/home/blog-1.jpg',
            'category': Category.objects.get(name='Uncategories'),
            'tag': [
                
                    Tag.objects.get(name='Luxury Hotel')
                ,
                
                    Tag.objects.get(name='SPA Center')
                ,
            ]
        },
        {
            'validated':True,
            'title': 'Luxury Hotel for Traveling Spot USA, California',
            'date': date.today(),
            'content': 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative \nConveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
            'image': 'image/home/blog-1.jpg',
            'category': Category.objects.get(name='Industrial'),
            'tag': [
                Tag.objects.get(name='Luxury Hotel')
               ]
        },
        {
            'validated':True,
            'title': 'Top 10 Best Hotel & Resort in Sandigo, USA',
            'date': date.today(),
            'content': 'Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative \nConveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented',
            'image': 'image/home/blog-1.jpg',
            'category': Category.objects.get(name='Uncategories'),
            'tag':[
                Tag.objects.get(name='Luxury Hotel')
                ]
        },

] 
    for data in articles_data :
        article= Article.objects.create(
            validated=data['validated'],
            title=data['title'],
            date=data['date'],
            content=data['content'],
            image=data['image'],
            category=data['category'],
        )
        article.tag.set(data['tag'])
   
    print("data article upload")  