// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:graduation_project/modules/HomePage/HomeLayOut.dart';
import 'package:graduation_project/shared/components/components/components.dart';
import 'package:lottie/lottie.dart';

class OnBoardingScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [

          Padding(
            padding: const EdgeInsets.only(left: 60),
            child: Text(
              'MENOFIA UNIVERSITY',
              style: TextStyle(
                fontWeight: FontWeight.w900,
                fontSize: 25,
              ),
            ),
          ),
          SizedBox(
            height: 420,
            child: Center(
              child: Lottie.network(
                  'https://assets6.lottiefiles.com/packages/lf20_fcecpvzp.json'),
            ),
          ),
          SizedBox(height:45 ,),
          Padding(
            padding: const EdgeInsets.all(15.0),
            child: Container(
              alignment: Alignment.bottomRight,
              child: OutlinedButton(
                onPressed: () {
                  navigateTo(context, HomePage());
                },
                style:ButtonStyle(
                  backgroundColor: MaterialStateProperty.all<Color>(Colors.black),
                ) ,
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    'Get Started',
                    style: TextStyle(color: Colors.white, fontSize: 20),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
