import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class elzahraa extends StatefulWidget {
  const elzahraa({Key? key}) : super(key: key);

  @override
  State<elzahraa> createState() => _elzahraaState();
}

class _elzahraaState extends State<elzahraa> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("elzahra"),
        centerTitle: true,
      ),
      body: WebView(
        javascriptMode: JavascriptMode.unrestricted,
        initialUrl: 'https://alzahraa.mans.edu.eg/studentApplications',
      ),
    );
  }
}
