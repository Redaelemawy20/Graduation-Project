// ignore_for_file: prefer_const_constructors, non_constant_identifier_names, prefer_const_literals_to_create_immutables, avoid_print

import 'package:flutter/material.dart';

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
