// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';

class EdaratFar3ya_3 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(
            IconBroken.Arrow___Down_2,
            color: Colors.black,
          ),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: Text('ادارات فرعية'),
      ),
    );
  }
}
