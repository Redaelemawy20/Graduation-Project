// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:youtube_player_iframe/youtube_player_iframe.dart';

/*class WebVIEWsCREEN extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    YoutubePlayerController _controller = YoutubePlayerController(
      initialVideoId:
          'https://www.youtube.com/results?search_query=%D9%83%D9%8A%D9%81%D9%8A%D8%A9+%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85+%D8%A8%D8%A7%D9%83%D8%AF%D8%AC+%D8%A7%D9%84+web+view+%D9%84%D8%B9%D8%B1%D8%B6+%D8%B5%D9%81%D8%AD%D8%A9+%D9%85%D9%86+%D8%A7%D9%84%D9%8A%D9%88%D8%AA%D9%8A%D9%88%D8%A8+in+flutter',
      flags: YoutubePlayerFlags(
        autoPlay: true,
        mute: true,
      ),
    );
    return Scaffold(
      appBar: AppBar(),
      body: Container(
        child: YoutubePlayer(
          controller: _controller,
          showVideoProgressIndicator: true,
        ),
      ),
    );
  }
}
*/
class YoutubePlayer extends StatefulWidget {
  final String? url;
  const YoutubePlayer(this.url);

  @override
  _YoutubePlayerState createState() => _YoutubePlayerState();
}

class _YoutubePlayerState extends State<YoutubePlayer> {
  late YoutubePlayerController _controller;
  @override
  void initState() {
    _controller = YoutubePlayerController(
        initialVideoId: YoutubePlayerController.convertUrlToId(widget.url!)!,
        params: const YoutubePlayerParams(
          loop: true,
          color: 'transparent',
          desktopMode: true,
          strictRelatedVideos: true,
          showFullscreenButton: !kIsWeb,
        ));
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(
            Icons.arrow_back,
            color: Colors.black,
          ),
          onPressed: () {},
        ),
      ),
      body: SizedBox(
        height: kIsWeb ? screenSize.height / 1.13 : screenSize.height,
        width: screenSize.width,
        child: YoutubePlayerControllerProvider(
          controller: _controller,
          child: YoutubePlayerIFrame(
            controller: _controller,
          ),
        ),
      ),
    );
  }
}
