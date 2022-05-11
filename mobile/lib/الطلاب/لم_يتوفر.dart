import 'package:flutter/material.dart';

class not_found extends StatelessWidget {
  const not_found({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: double.infinity,
      width: double.infinity,
      decoration: BoxDecoration(color: Colors.white),
      child: Center(
          child: Container(
        child: Text(
          "لم يتوفر بعد",
          style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold),
        ),
      )),
    );
  }
}
