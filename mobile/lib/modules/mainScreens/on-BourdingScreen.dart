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
            padding: const EdgeInsets.all(15.0),
            child: OutlinedButton(
              onPressed: () {
                navigateTo(context, HomePage());
              },
              child: Text(
                'Skip >',
                style: TextStyle(color: Colors.deepOrange, fontSize: 25),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 60),
            child: Text(
              'MENOFIA UNIVERSITY',
              style: TextStyle(
                fontSize: 25,
              ),
            ),
          ),
          Center(
            child: Lottie.network(
                'https://assets6.lottiefiles.com/packages/lf20_fcecpvzp.json'),
          ),
        ],
      ),
    );
  }
}
