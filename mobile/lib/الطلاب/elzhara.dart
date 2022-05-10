import 'package:flutter/material.dart';
import 'package:url_launcher/link.dart';

class elzhraa extends StatelessWidget {
  const elzhraa({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: double.infinity,
      width: double.infinity,
      decoration: BoxDecoration(color: Colors.white),
      child: Center(
        child: Padding(
          padding: const EdgeInsets.all(100.0),
          child: Container(
            height: 500,
            width: 500,
            child: Column(
              children: [
                Container(
                  child: Text(
                    "للتقديم للمدن الجامعبة اضغط هنا ",
                    style: TextStyle(
                        fontSize: 15.0,
                        color: Colors.black,
                        fontFamily: "jannah",
                        fontWeight: FontWeight.bold),
                  ),
                ),
                SizedBox(
                  height: 10.0,
                ),
                Container(
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      color: Color.fromARGB(255, 4, 1, 74)),
                  height: 45,
                  width: 200.0,
                  child: Link(
                      uri: Uri.parse(
                          "https://alzahraa.mans.edu.eg/studentApplications"),
                      builder: (context, FollowLink) {
                        return TextButton(
                          onPressed: FollowLink,
                          child: Text(
                            'الزهراء للمدن الجامعية',
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
    );
  }
}
