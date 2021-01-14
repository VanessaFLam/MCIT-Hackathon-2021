import mysql.connector as cxn
import json
import pandas as pd

connection = cxn.connect(user='root', password='Hackathon2021'
                            , host='127.0.0.1'
                            , database='sample')

cursor = connection.cursor()
drop_table = ("""drop table if exists samplejson3;""")
cursor.execute(drop_table)

connection.commit()

create_table = (
    """create table samplejson3(
         jobtitle VARCHAR(225) default NULL
        , company VARCHAR(225) default NULL
        , city VARCHAR(225) default NULL
        , state VARCHAR(225) default NULL
        , country VARCHAR(225) default NULL
        , formattedLocation VARCHAR(225) default NULL
        , source VARCHAR(225) default NULL
        , date varchar(255) default NULL
        , snippet VARCHAR(2000) default NULL
        , url VARCHAR(225) default NULL
        , onmousedown VARCHAR(225) default NULL
        , jobkey INT default NULL
    )"""
)
cursor.execute(create_table)

with open ("sample_json_data.json") as json_file:
    data = json.load(json_file)
    temp = data["results"]
    for i in temp:
        jobtitle=i.get("jobtitle")
        company=i.get("company")
        city=i.get("city")
        state=i.get("state")
        country=i.get("country")
        formattedLocation=i.get("formattedLocation")
        source=i.get("source")
        date=i.get("date")
        snippet=i.get("snippet")
        url=i.get("url")
        onmousedown=i.get("onmousedown")
        jobkey=i.get("jobkey")
        # sponsored=i.get("sponsored")
        # expired=i.get("expired")
        # indeedApply=i.get("indeedApply")
        sql=("""
            insert into samplejson3(
                jobtitle
                , company
                , city
                , state
                , country
                , formattedLocation
                , source
                , date
                , snippet
                , url
                , onmousedown
                , jobkey
            ) value (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """)
        val=(jobtitle
            , company
            , city
            , state
            , country
            , formattedLocation
            , source
            , date
            , snippet
            , url
            , onmousedown
            , jobkey)
        cursor.execute(sql, val)

connection.commit()
cursor.close()
connection.close()


# import mysql.connector as cxn
# import json
# import pandas as pd
#
#
# connection = cxn.connect(user='root', password='Hackathon2021'
#                             , host='127.0.0.1'
#                             , database='sample')
#
#
# cursor = connection.cursor()
#
# # select = (
# #     """select * from sample.sample;"""
# # )
# #
# cursor.execute("""select * from sample.sample;""")
# connection.commit()
# cursor.close()
# connection.close()
# #
# # load_table = (
# #     """drop table if exists samplejson2;
# #
# #     create table samplejson2(
# #         , jobtitle VARCHAR(225) default NULL
# #         , company VARCHAR(225) default NULL
# #         , city VARCHAR(225) default NULL
# #         , state VARCHAR(225) default NULL
# #         , country VARCHAR(225) default NULL
# #         , formattedLocation VARCHAR(225) default NULL
# #         , source VARCHAR(225) default NULL
# #         , date varchar(255) default NULL
# #         , snippet VARCHAR(2000) default NULL
# #         , url VARCHAR(225) default NULL
# #         , onmousedown VARCHAR(225) default NULL
# #         , jobkey INT default NULL
# #     )"""
# # )
# #
# # cursor.execute(load_table)
# #
# # with open ("sample_json_data.json") as json_file:
# #     data = json.load(json_file)
# #     temp = data["results"]
# #     # array_len = len(temp)
# #     for i in temp:
# #         jobtitle=i.get("jobtitle")
# #         company=i.get("company")
# #         city=i.get("city")
# #         state=i.get("state")
# #         country=i.get("country")
# #         formattedLocation=i.get("formattedLocation")
# #         source=i.get("source")
# #         date=i.get("date")
# #         snippet=i.get("snippet")
# #         url=i.get("url")
# #         onmousedown=i.get("onmousedown")
# #         jobkey=i.get("jobkey")
# #         # sponsored=i.get("sponsored")
# #         # expired=i.get("expired")
# #         # indeedApply=i.get("indeedApply")
# #         cursor.execute("""
# #             insert into samplejson2(
# #                 jobtitle
# #                 , company
# #                 , city
# #                 , state
# #                 , country
# #                 , formattedLocation
# #                 , source
# #                 , date
# #                 , snippet
# #                 , url
# #                 , onmousedown
# #                 , jobkey
# #             ) value (%s %s %s %s %s %s %s %s %s %s %s %s)""",
# #             (jobtitle
# #             , company
# #             , city
# #             , state
# #             , country
# #             , formattedLocation
# #             , source
# #             , date
# #             , snippet
# #             , url
# #             , onmousedown
# #             , jobkey
# #             # , sponsored
# #             # , expired
# #             # , indeedApply
# #             )
# #         )
#
#
# # cursor.commit()
# # cursor.close()
# # connection.close()
#
#         # ", sponsored boolean default FALSE"
#         # ", expired boolean default FALSE"
#         # ", indeedApply boolean default TRUE"
#         # ", formattedLocationFull VARCHAR(225) default NULL"
#         # ", formattedRelativeTime VARCHAR(255) default NULL"
#         # ", latitude float default NULL"
#         # ", longitude float default NULL"
#     	# "id INT primary key not null auto_increment"
#         # , sponsored
#         # , expired
#         # , indeedApply
