import 'package:flutter/material.dart';
import 'package:url_launcher/link.dart';

class graguate extends StatelessWidget {
  const graguate({Key? key}) : super(key: key);

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
            height: 315,
            width: 600,
            decoration: BoxDecoration(
                color: Color.fromARGB(255, 174, 183, 183),
                borderRadius: BorderRadius.circular(20.0)),
            child: Center(
              child: Padding(
                padding: const EdgeInsets.all(70),
                child: Column(
                  children: [
                    Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          color: Color.fromARGB(255, 4, 1, 74)),
                      height: 45,
                      width: 200.0,
                      child: Link(
                          uri: Uri.parse(
                              'http://mu.menofia.edu.eg/caamu/CaamuHome/ar'),
                          builder: (context, FollowLink) {
                            return TextButton(
                              onPressed: FollowLink,
                              child: Text(
                                'جمعية رعاية الخريجين',
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold),
                              ),
                            );
                          }),
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
                          'قاعدة بيانات الخريجين',
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
                      child: Link(
                          uri: Uri.parse(
                              'http://mu.menofia.edu.eg/caamu/SearchGrade/ar'),
                          builder: (context, FollowLink) {
                            return TextButton(
                              onPressed: FollowLink,
                              child: Text(
                                'بحث عن خريج',
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold),
                              ),
                            );
                          }),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
