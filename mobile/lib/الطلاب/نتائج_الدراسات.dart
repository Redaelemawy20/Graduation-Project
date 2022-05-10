import 'package:flutter/material.dart';
import 'package:graduation_project/%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8/%D9%86%D8%AA%D8%A7%D8%A6%D8%AC_%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA2.dart';
import 'package:graduation_project/shared/components/components/components.dart';
import 'package:url_launcher/link.dart';
import 'package:webview_flutter/webview_flutter.dart';

class natega extends StatefulWidget {
  const natega({Key? key}) : super(key: key);

  @override
  State<natega> createState() => _nategaState();
}

class _nategaState extends State<natega> {
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
                    "للحصول علي النيجه اضغط هنا ",
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
                      uri: Uri.parse("http://193.227.24.15/Epg/natigapg/"),
                      builder: (context, FollowLink) {
                        return ElevatedButton(
                            style: ButtonStyle(),
                            onPressed: FollowLink,
                            child: Text("نتائج الدراسات العليا"));
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
