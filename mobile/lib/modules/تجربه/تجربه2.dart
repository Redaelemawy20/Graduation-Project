// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';

Widget appContainer() {
  return Container(
    height: 100,
    decoration: BoxDecoration(
        color: Colors.indigo,
        borderRadius: BorderRadius.only(
          bottomRight: Radius.circular(30),
          bottomLeft: Radius.circular(30),
        )),
    width: double.infinity,
    child: Padding(
      padding: const EdgeInsets.all(10.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        // ignore: prefer_const_literals_to_create_immutables
        children: [
          Text(
            'Menofia University',
            style: TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
            ),
          ),
          Row(children:
              // ignore: prefer_const_literals_to_create_immutables
              [
            CircleAvatar(
              radius: 32,
              backgroundImage: NetworkImage(
                  "https://s3.us-east-2.amazonaws.com/sie-development-production/institutions/logos/000/000/086/original/%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%81%D9%8A%D9%87.png?1596892801"),
            ),
            SizedBox(
              width: 10,
            ),
            Text(
              ' Menofia University',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
          ]),
        ],
      ),
    ),
  );
}
