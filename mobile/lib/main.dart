// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:graduation_project/modules/%D8%AA%D8%AC%D8%B1%D8%A8%D9%87/file.dart';
import 'package:graduation_project/modules/HomePage/HomeLayOut.dart';
import 'package:graduation_project/modules/mainScreens/FacultiesAndSpecificPrograms.dart';
import 'package:graduation_project/shared/components/network/styles/ThemeData.dart';

import 'modules/mainScreens/on-BourdingScreen.dart';
import 'modules/تجربه/تجربه.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: lightMode,
      home: OnBoardingScreen(),
    );
  }
}
