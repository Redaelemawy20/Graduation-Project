import 'package:flutter/material.dart';

class bacalorya extends StatelessWidget {
  const bacalorya({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(color: Colors.white),
      height: double.infinity,
      width: double.infinity,
      child: Center(
          child: Container(
        height: 500.0,
        width: 500.0,
        decoration: BoxDecoration(),
        child: Column(
          children: [
            Container(
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: Colors.deepOrange),
              height: 40,
              width: 200.0,
              child: TextButton(
                onPressed: () {},
                child: Text(
                  'نظام الدراسة ',
                  style: TextStyle(
                      color: Colors.white, fontWeight: FontWeight.bold),
                ),
              ),
            ),
            SizedBox(
              height: 15.0,
            ),
            Container(
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: Colors.deepOrange),
              height: 40,
              width: 200.0,
              child: TextButton(
                onPressed: () {},
                child: Text(
                  'خدمات الكترونية',
                  style: TextStyle(
                      color: Colors.white,
                      fontFamily: "jannah",
                      fontWeight: FontWeight.bold),
                ),
              ),
            ),
          ],
        ),
      )),
    );
  }
}
