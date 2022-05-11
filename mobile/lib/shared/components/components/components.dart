// ignore_for_file: prefer_const_constructors, non_constant_identifier_names, prefer_const_literals_to_create_immutables, avoid_print, sized_box_for_whitespace

import 'package:flutter/material.dart';
import 'package:graduation_project/modules/mainScreens/on-BourdingScreen.dart';

Widget AppBarCustom() {
  return Container(
    height: 200,
    decoration: BoxDecoration(
        color: Colors.indigo,
        borderRadius: BorderRadius.only(
          bottomRight: Radius.circular(30),
          bottomLeft: Radius.circular(30),
        )),
    width: double.infinity,
    child: Column(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 30.0, vertical: 25),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                // ignore: prefer_const_literals_to_create_immutables
                children: [
                  Text(
                    'MENOFIA UNIVERSITY',
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
              CircleAvatar(
                radius: 30,
                backgroundColor: Colors.blue,
                child: CircleAvatar(
                  radius: 28,
                  backgroundImage: NetworkImage(
                      "https://s3.us-east-2.amazonaws.com/sie-development-production/institutions/logos/000/000/086/original/%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%81%D9%8A%D9%87.png?1596892801"),
                ),
              )
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            children: [
              Expanded(
                child: InkWell(
                  onTap: () {
                    print('tabed');
                  },
                  child: Column(
                    children: [
                      Icon(
                        Icons.book_online_outlined,
                        color: Colors.blue,
                      ),
                      //  TextApp(name: "Add", height: 20, nom: 1,color:  Colors.blue,),
                    ],
                  ),
                ),
              ),
              SizedBox(
                width: 15,
              ),
              Expanded(
                child: InkWell(
                  onTap: () {},
                  child: Column(
                    children: [
                      Icon(
                        Icons.featured_play_list_outlined,
                        color: Colors.blue,
                      ),
                      // TextApp(name: "Cointent",  height: 20, nom: 1,color:  Colors.blue,),
                    ],
                  ),
                ),
              ),
            ],
          ),
        )
      ],
    ),
  );
}

void navigateTo(context, Widget) => Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => Widget,
      ),
    );

void navigateAndFinish(context, Widget) => Navigator.pushAndRemoveUntil(
    context,
    MaterialPageRoute(
      builder: (context) => Widget,
    ),
    (Route<dynamic> route) => false);

Widget yourListChildforRaeesElgam3a() => Column(
      children: [
        Expanded(
          flex: 3,
          child: Container(
            clipBehavior: Clip.antiAlias,
            decoration: BoxDecoration(borderRadius: BorderRadius.circular(10)),
            child: Image(
              image: NetworkImage(
                  'https://img.freepik.com/free-photo/sky-full-stars-silhouettes-trees_181624-12446.jpg?t=st=1651581737~exp=1651582337~hmac=ae2b2349d6f46dd09f944192f5f93c32c6945328d65d9ee657397f244b2512d4&w=740'),
            ),
          ),
        ),
        Container(
          alignment: AlignmentDirectional.topEnd,
          child: Padding(
            padding: const EdgeInsets.only(top: 10),
            child: Text(
              'الاحد 22 يناير 2022',
              style: TextStyle(color: Colors.grey),
            ),
          ),
        ),
        Expanded(
          child: Text(
            "مكنك الحصول على جميع الخدمات الالكترونية من خلال موقع جامعة المنوفيه حيث يمكنك اختيار البوابة المراد الدخول اليها",
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            textHeightBehavior: TextHeightBehavior(
                applyHeightToFirstAscent: true,
                leadingDistribution: TextLeadingDistribution.even),
          ),
        ),
      ],
    );
Widget divider(context) {
  return Container(
    height: 5,
    width: MediaQuery.of(context).size.width,
  );
}

Widget yourListChildForRa2eesElgam3a(context) => Column(
      children: [
        Expanded(
          flex: 3,
          child: InkWell(
            onTap: () {
              navigateTo(context, OnBoardingScreen());
            },
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: Container(
                clipBehavior: Clip.antiAlias,
                decoration:
                    BoxDecoration(borderRadius: BorderRadius.circular(10)),
                child: Image(
                  image: NetworkImage(
                    'https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5919.jpg?t=st=1652185866~exp=1652186466~hmac=a1ffc401b62625ceb23b8c4fd56a211b712b1e82c7a2f8a8240bbc95085ee39c&w=740',
                  ),
                ),
              ),
            ),
          ),
        ),
        Container(
          alignment: AlignmentDirectional.topEnd,
          child: Text(
            'الاحد 22 يناير 2022',
            style: TextStyle(color: Colors.grey),
          ),
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 10),
            child: Text(
              'رضا البحراوى قال ايه "بداااااارى الأااااه وفضحانى ومهما بخبى وجعانى ممن اصحابى وخلانى ودنيتى اللى معندانى"',
              textDirection: TextDirection.rtl,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              textHeightBehavior: TextHeightBehavior(
                  applyHeightToFirstAscent: true,
                  leadingDistribution: TextLeadingDistribution.even),
            ),
          ),
        ),
      ],
    );

Widget yourListChildForRa2eesElTolaab(context) => Column(
      children: [
        Expanded(
          flex: 3,
          child: InkWell(
            onTap: () {
              navigateTo(context, OnBoardingScreen());
            },
            child: Container(
              clipBehavior: Clip.antiAlias,
              decoration:
                  BoxDecoration(borderRadius: BorderRadius.circular(10)),
              child: Image(
                image: NetworkImage(
                    'https://img.freepik.com/free-photo/open-flying-old-books_1232-2096.jpg?size=626&ext=jpg&uid=R64649530&ga=GA1.2.47020922.1628699756'),
              ),
            ),
          ),
        ),
        Container(
          alignment: AlignmentDirectional.topEnd,
          child: Text(
            'الاحد 22 يناير 2022',
            style: TextStyle(color: Colors.grey),
          ),
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 10),
            child: Text(
              'رضا البحراوى قال ايه "بداااااارى الأااااه وفضحانى ومهما بخبى وجعانى ممن اصحابى وخلانى ودنيتى اللى معندانى"',
              textDirection: TextDirection.rtl,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              textHeightBehavior: TextHeightBehavior(
                  applyHeightToFirstAscent: true,
                  leadingDistribution: TextLeadingDistribution.even),
            ),
          ),
        ),
      ],
    );
