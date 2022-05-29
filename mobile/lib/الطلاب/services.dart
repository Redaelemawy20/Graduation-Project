import 'package:flutter/material.dart';

class service extends StatelessWidget {
  const service({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: double.infinity,
      width: double.infinity,
      decoration: BoxDecoration(
        color: Colors.white,
      ),
      child: Center(
          child: Padding(
        padding: const EdgeInsets.all(50.0),
        child: Container(
          width: 600,
          height: 600,
          decoration: BoxDecoration(
              color: Color.fromARGB(255, 174, 183, 183),
              borderRadius: BorderRadius.circular(10)),
          child: Padding(
            padding: const EdgeInsets.all(25.0),
            child: Column(
              children: [
                Container(
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      color: Color.fromARGB(255, 4, 1, 74)),
                  height: 45,
                  width: 200.0,
                  child: TextButton(
                    onPressed: () {},
                    child: Text(
                      'التقديم الألكتروني',
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
                      color: Color.fromARGB(255, 4, 1, 74)),
                  height: 45,
                  width: 200.0,
                  child: TextButton(
                    onPressed: () {},
                    child: Text(
                      'الخدمات الطبية',
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
                      color: Color.fromARGB(255, 4, 1, 74)),
                  height: 45,
                  width: 200.0,
                  child: TextButton(
                    onPressed: () {},
                    // ignore: prefer_const_constructors
                    child: Text(
                      'استاد الجامعة',
                      // ignore: prefer_const_constructors
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
                      color: Color.fromARGB(255, 4, 1, 74)),
                  height: 45,
                  width: 200.0,
                  child: TextButton(
                    onPressed: () {},
                    child: Text(
                      'التكافل الطبي',
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
                      color: Color.fromARGB(255, 4, 1, 74)),
                  height: 45,
                  width: 200.0,
                  child: TextButton(
                    onPressed: () {},
                    child: Text(
                      'دليل الطالب',
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
                      color: Color.fromARGB(255, 4, 1, 74)),
                  height: 45,
                  width: 200.0,
                  child: TextButton(
                    onPressed: () {},
                    // ignore: prefer_const_constructors
                    child: Text(
                      'التربية العسكرية',
                      // ignore: prefer_const_constructors
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
                      color: Color.fromARGB(255, 4, 1, 74)),
                  height: 45,
                  width: 200.0,
                  child: TextButton(
                    onPressed: () {},
                    child: Text(
                      'التدريب الصيفي',
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
                      color: Color.fromARGB(255, 4, 1, 74)),
                  height: 45,
                  width: 200.0,
                  child: TextButton(
                    onPressed: () {},
                    child: Text(
                      'نادي تك للمعلومات',
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
                      color: Color.fromARGB(255, 4, 1, 74)),
                  height: 45,
                  width: 200.0,
                  child: TextButton(
                    onPressed: () {},
                    // ignore: prefer_const_constructors
                    child: Text(
                      'المصروفات الدراسية',
                      // ignore: prefer_const_constructors
                      style: TextStyle(
                          color: Colors.white, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      )),
    );
  }
}
