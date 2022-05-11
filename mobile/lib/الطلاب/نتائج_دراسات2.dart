import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class elnatega extends StatelessWidget {
  const elnatega({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("نتائج الدراسات العليا"),
        centerTitle: true,
      ),
      body: WebView(
          javascriptMode: JavascriptMode.unrestricted,
          initialUrl: 'http://193.227.24.15/Epg/natigapg/'),
    );
  }
}
