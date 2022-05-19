// ignore: file_names
// ignore_for_file: avoid_unnecessary_containers, prefer_const_constructors, sized_box_for_whitespace

import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:animator/animator.dart';
import 'package:bloc/bloc.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_animations/flutter_staggered_animations.dart';
import 'package:graduation_project/cubit/cubit.dart';
import 'package:graduation_project/modules/mainScreens/Web-View-Screen.dart';
import 'package:graduation_project/shared/components/components/components.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';
import 'package:intl/locale.dart';
import 'package:lottie/lottie.dart';
import 'package:webview_flutter/webview_flutter.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final List<String> imgList = [
      'https://img.freepik.com/free-photo/close-up-hand-writing-notebook-top-view_23-2148888824.jpg?t=st=1652089627~exp=1652090227~hmac=fb5719f4fa2be751ccde6035244a0996b955dc5019e716978df6d1383dbb50d3&w=740',
      'https://img.freepik.com/free-photo/young-student-learning-library_23-2149215425.jpg?w=740',
      'https://img.freepik.com/free-photo/person-holding-light-bulb-with-graduation-cap_23-2148721299.jpg?t=st=1652090055~exp=1652090655~hmac=dd9dd39a6011d985f25f005476836351b6539d29c3a07dc82cbfbb2019fc677a&w=740',
      'https://img.freepik.com/free-photo/hand-selects-icons-virtual-screen-concept-distance-learning-methods-searching-systematization-information-retrieval_116441-22173.jpg?w=826'
    ];
    double _width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Stack(
                    alignment: AlignmentDirectional.bottomEnd,
                    children: [
                      Container(
                        child: CarouselSlider(
                          options: CarouselOptions(
                            autoPlay: true,
                            initialPage: 0,
                            viewportFraction: 1,
                            height: 250,
                            enableInfiniteScroll: true,
                            reverse: false,
                            autoPlayInterval: Duration(seconds: 3),
                            autoPlayAnimationDuration: Duration(seconds: 1),
                            autoPlayCurve: Curves.fastOutSlowIn,
                            scrollDirection: Axis.horizontal,
                          ),
                          items: imgList
                              .map((item) => Container(
                                    child: Center(
                                      child: Image.network(
                                        item,
                                        width: double.infinity,
                                        fit: BoxFit.cover,
                                      ),
                                    ),
                                  ))
                              .toList(),
                        ),
                      ),
                      Row(
                        //crossAxisAlignment: CrossAxisAlignment.end,
                        mainAxisAlignment: MainAxisAlignment.end,
                        // ignore: prefer_const_literals_to_create_immutables
                        children: [
                          Padding(
                            padding: const EdgeInsets.symmetric(vertical: 15),
                            child: Text(
                              'Take virtuaL Tour',
                              style:
                                  TextStyle(color: Colors.white, fontSize: 20),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(vertical: 15),
                            child: Container(
                              alignment: AlignmentDirectional.bottomEnd,
                              // height: _width / 2.7,
                              // width: _width / 2.7,
                              child: Animator<double>(
                                duration: Duration(milliseconds: 1000),
                                cycles: 0,
                                curve: Curves.easeInOut,
                                tween: Tween<double>(begin: 15.0, end: 25.0),
                                builder: (context, animatorState, child) =>
                                    Icon(
                                  Icons.tour,
                                  size: animatorState.value * 2,
                                  color: Colors.deepOrange,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 15,
                  ),
                  Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    height: 40,
                    child: Row(
                      children: [
                        DefaultTextStyle(
                          style: const TextStyle(
                            color: Colors.deepOrange,
                            fontSize: 20.0,
                          ),
                          child: AnimatedTextKit(
                            animatedTexts: [
                              WavyAnimatedText('Take VirTual Tour'),
                              WavyAnimatedText('Take VirTual Tour'),
                            ],
                            isRepeatingAnimation: true,
                            onTap: () {
                              // print("Tap Event");
                            },
                          ),
                        ),
                        Container(
                          // height: _width / 2.7,
                          // width: _width / 2.7,
                          child: Animator<double>(
                            duration: Duration(milliseconds: 1000),
                            cycles: 0,
                            curve: Curves.easeInOut,
                            tween: Tween<double>(begin: 15.0, end: 25.0),
                            builder: (context, animatorState, child) => Icon(
                              Icons.tour,
                              size: animatorState.value * 2,
                              color: Colors.deepOrange,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 15,
                  ),
                  Container(
                    height: 1,
                    width: double.infinity,
                    color: Colors.grey,
                  ),
                  SizedBox(
                    height: 5,
                  ),
                  Container(
                    alignment: AlignmentDirectional.bottomCenter,
                    child: Text(
                      'أحدث الأخبار',
                      style: TextStyle(
                        fontSize: 20,
                        fontFamily: 'jannah',
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  GridView.count(
                    physics: NeverScrollableScrollPhysics(),
                    shrinkWrap: true,
                    crossAxisCount: 1,
                    children: List.generate(
                      3,
                      (int index) {
                        return yourListChildForRa2eesElgam3a(context);
                      },
                    ),
                  ),
                  /*GridView.count(
                    shrinkWrap: true,
                    primary: false,
                    padding: const EdgeInsets.all(20),
                    crossAxisSpacing: 1,
                    mainAxisSpacing: 1,
                    crossAxisCount: 2,
                    children: [
                      Container(
                        padding: EdgeInsets.all(8),
                        child: Column(
                          children: [
                            Expanded(
                              child: Container(
                                clipBehavior: Clip.antiAlias,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10)
                                    ),
                                child: Image(
                                  image: NetworkImage(
                                      'https://img.freepik.com/free-vector/social-media-logo-collection_69286-193.jpg?w=996'),
                                ),
                              ),
                            ),
                            Container(
                              alignment: AlignmentDirectional.topEnd,
                              child: Text(
                                'الاحد 22 يناير 2022',
                                style: Theme.of(context).textTheme.caption,
                              ),
                            ),
                            Expanded(
                              child: Text(
                                "Revolution is coming....",
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis,
                                textHeightBehavior: TextHeightBehavior(
                                    applyHeightToFirstAscent: false,
                                    leadingDistribution:
                                        TextLeadingDistribution.even),
                              ),
                            ),
                          ],
                        ),
                        color: Colors.teal[100],
                      ),
                      Container(
                        height: 200,
                        padding: EdgeInsets.all(8),
                        child: Column(
                          children: [
                            Container(
                              // height: 80,
                              clipBehavior: Clip.antiAlias,
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(10)),
                              child: Expanded(
                                child: Image(
                                  fit: BoxFit.cover,
                                  image: NetworkImage(
                                    'https://img.freepik.com/free-photo/women-s-day-still-life-composition_23-2149175991.jpg?size=626&ext=jpg&uid=R64649530&ga=GA1.2.47020922.1628699756',
                                  ),
                                ),
                              ),
                            ),
                            Container(
                              alignment: AlignmentDirectional.topEnd,
                              child: Text(
                                'الاحد 22 يناير 2022',
                                style: Theme.of(context).textTheme.caption,
                              ),
                            ),
                            Expanded(
                              child: Text(
                                "Revolution is coming...........................................................",
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis,
                                textHeightBehavior: TextHeightBehavior(
                                    applyHeightToFirstAscent: true),
                              ),
                            ),
                          ],
                        ),
                        color: Colors.teal[200],
                      ),
                      Container(
                        padding: EdgeInsets.all(8),
                        child: Column(
                          children: [
                            Container(
                              clipBehavior: Clip.antiAlias,
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(10)),
                              child: Image(
                                image: NetworkImage(
                                    'https://img.freepik.com/free-vector/social-media-logo-collection_69286-193.jpg?w=996'),
                              ),
                            ),
                            Text("Revolution is coming..."),
                          ],
                        ),
                        color: Colors.teal[300],
                      ),
                      Container(
                        padding: EdgeInsets.all(8),
                        child: Column(
                          children: [
                            Container(
                              clipBehavior: Clip.antiAlias,
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(10)),
                              child: Image(
                                image: NetworkImage(
                                    'https://img.freepik.com/free-vector/social-media-logo-collection_69286-193.jpg?w=996'),
                              ),
                            ),
                            Text("Revolution is coming..."),
                          ],
                        ),
                        color: Colors.teal[400],
                      ),
                      Container(
                        padding: EdgeInsets.all(8),
                        child: Column(
                          children: [
                            Container(
                              clipBehavior: Clip.antiAlias,
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(10)),
                              child: Image(
                                image: NetworkImage(
                                    'https://img.freepik.com/free-vector/social-media-logo-collection_69286-193.jpg?w=996'),
                              ),
                            ),
                            Text("Revolution is coming..."),
                          ],
                        ),
                        color: Colors.teal[500],
                      ),
                      Container(
                        padding: EdgeInsets.all(8),
                        child: Text('Revolution, they...'),
                        color: Colors.teal[600],
                      ),
                    ],
                  ),*/
                  /*Row(
                    children: [
                      Column(
                        // ignore: prefer_const_literals_to_create_immutables
                        children: [
                          CircleAvatar(
                            radius: 70,
                            backgroundImage: NetworkImage(
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2Fadxc36HRMRfx3u6GZv61RJyp-lwVVrDZ9NnsW2xutTYzx-GKbWRECT66RrnXjYrVE&usqp=CAU'),
                          ),
                        ],
                      ),
                      Spacer(),
                      CircleAvatar(
                        radius: 70,
                        backgroundImage: NetworkImage(
                            'https://scontent.fcai20-3.fna.fbcdn.net/v/t1.6435-9/142280305_1264201197299665_3879116789879859635_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=iWdnzMuX9IcAX8Z0yyv&tn=ma9OCkCnbLBFhxYr&_nc_ht=scontent.fcai20-3.fna&oh=00_AT_pM6AmQ-7xnzj8IM1fjvNEK2QuEn2hidfuCbP2Z1N4AQ&oe=6201C5A7'),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Row(
                    children: [
                      Column(
                        // ignore: prefer_const_literals_to_create_immutables
                        children: [
                          CircleAvatar(
                            radius: 70,
                            backgroundImage: NetworkImage(
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-SFd6A2gV2Lzidtmfgt4RG0jKGvR_5srmg&usqp=CAU'),
                          ),
                        ],
                      ),
                      Spacer(),
                      CircleAvatar(
                        radius: 70,
                        backgroundImage: NetworkImage(
                            'https://scontent.fcai20-3.fna.fbcdn.net/v/t1.6435-9/118274473_1145219095864543_5535227574974992008_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=XLjGBuE-tOkAX_dezO_&_nc_oc=AQkRJSH1TJa-nToYyo0xOdcV1reugYi9g-DExcO_9aAPILYR7uUQbcukGYPuoOyY-Zw&_nc_ht=scontent.fcai20-3.fna&oh=00_AT-qRb9vzjtP9DQFrlznOZIqOaKTsa_anzFKN305P2qwww&oe=6221E4D5'),
                      ),
                    ],
                  ),*/
                  // الفيديوهات
                  Container(
                    alignment: AlignmentDirectional.bottomCenter,
                    child: Text(
                      'Videoes about University ',
                      style: TextStyle(
                        fontSize: 25,
                        fontFamily: 'jannah',
                      ),
                    ),
                  ),
                  Center(
                    child: Container(
                      height: 2,
                      width: 200,
                      color: Colors.deepOrange,
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Row(
                    children: [
                      Expanded(
                        child: Column(
                          children: [
                            Text(
                              'مدينة شبين الكوم ومميزات الاقام بها',
                              maxLines: 2,
                              style: TextStyle(
                                height: 1,
                                fontSize: 23,
                                //fontFamily: 'jannah',
                              ),
                              overflow: TextOverflow.ellipsis,
                              textHeightBehavior: TextHeightBehavior(
                                  applyHeightToFirstAscent: true,
                                  leadingDistribution:
                                      TextLeadingDistribution.even),
                            ),
                            InkWell(
                              child: Lottie.network(
                                'https://assets7.lottiefiles.com/private_files/lf30_cwyafad8.json',
                                height: 150,
                                width: 150,
                              ),
                              onTap: () {
                                navigateTo(
                                    context,
                                    YoutubePlayer(
                                        'https://www.youtube.com/watch?v=P2mTlz50FgM'));
                              },
                            ),
                          ],
                        ),
                      ),
                      SizedBox(
                        width: 20,
                      ),
                      Expanded(
                        child: Column(
                          children: [
                            Text(
                              'ريْيس الوزراء أثناء زيارته للجامعة',
                              maxLines: 2,
                              style: TextStyle(
                                height: 1,
                                fontSize: 23,
                                fontFamily: 'jannah',
                              ),
                              overflow: TextOverflow.ellipsis,
                              textHeightBehavior: TextHeightBehavior(
                                  applyHeightToFirstAscent: true,
                                  leadingDistribution:
                                      TextLeadingDistribution.even),
                            ),
                            InkWell(
                              child: Lottie.network(
                                'https://assets7.lottiefiles.com/private_files/lf30_cwyafad8.json',
                                height: 150,
                                width: 150,
                              ),
                              onTap: () {
                                navigateTo(
                                    context,
                                    YoutubePlayer(
                                        'https://www.youtube.com/watch?v=5qDbqRwliLI'));
                              },
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Row(
                    children: [
                      Expanded(
                        child: Column(
                          children: [
                            Text(
                              'كلية الحاسبات والمعلومات ',
                              maxLines: 2,
                              style: TextStyle(
                                height: 1,
                                fontSize: 23,
                                //fontFamily: 'jannah',
                              ),
                              overflow: TextOverflow.ellipsis,
                              textHeightBehavior: TextHeightBehavior(
                                  applyHeightToFirstAscent: true,
                                  leadingDistribution:
                                      TextLeadingDistribution.even),
                            ),
                            InkWell(
                              child: Lottie.network(
                                'https://assets7.lottiefiles.com/private_files/lf30_cwyafad8.json',
                                height: 150,
                                width: 150,
                              ),
                              onTap: () {
                                navigateTo(
                                    context,
                                    YoutubePlayer(
                                        'https://www.youtube.com/watch?v=0TUpwZyVdnw'));
                              },
                            ),
                          ],
                        ),
                      ),
                      SizedBox(
                        width: 20,
                      ),
                      Expanded(
                        child: Column(
                          children: [
                            Text(
                              'كلية الهندسة جامعة المنوفية',
                              maxLines: 2,
                              style: TextStyle(
                                height: 1,
                                fontSize: 23,
                                fontFamily: 'jannah',
                              ),
                              overflow: TextOverflow.ellipsis,
                              textHeightBehavior: TextHeightBehavior(
                                  applyHeightToFirstAscent: true,
                                  leadingDistribution:
                                      TextLeadingDistribution.even),
                            ),
                            InkWell(
                              child: Lottie.network(
                                'https://assets7.lottiefiles.com/private_files/lf30_cwyafad8.json',
                                height: 150,
                                width: 150,
                              ),
                              onTap: () {
                                navigateTo(
                                    context,
                                    // ignore: prefer_const_constructors
                                    YoutubePlayer(
                                        'https://www.youtube.com/watch?v=0TUpwZyVdnw'));
                              },
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 5,
                  ),

                  // statistics
                  Container(
                    alignment: AlignmentDirectional.bottomCenter,
                    child: Text(
                      'Statistics ',
                      style: TextStyle(
                        fontSize: 25,
                        fontFamily: 'jannah',
                      ),
                    ),
                  ),
                  Center(
                    child: Container(
                      height: 2,
                      width: 200,
                      color: Colors.deepOrange,
                    ),
                  ),
                  SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: Row(
                      children: [
                        Column(
                          children: [
                            Lottie.network(
                              'https://assets7.lottiefiles.com/packages/lf20_lbby8lph.json',
                              height: 150,
                              width: 150,
                            ),
                            Text(
                              'الموظفين',
                              style: TextStyle(
                                fontSize: 23,
                                fontFamily: 'jannah',
                              ),
                              overflow: TextOverflow.ellipsis,
                              textHeightBehavior: TextHeightBehavior(
                                  applyHeightToFirstAscent: true,
                                  leadingDistribution:
                                      TextLeadingDistribution.even),
                            ),
                            Text(
                              'أكثر من 400 ',
                              style: TextStyle(
                                height: 1,
                                fontSize: 18,
                                fontFamily: 'jannah',
                              ),
                            ),
                          ],
                        ),
                        Column(
                          children: [
                            Lottie.network(
                              'https://assets7.lottiefiles.com/packages/lf20_lbby8lph.json',
                              height: 150,
                              width: 150,
                            ),
                            Text(
                              'الطلاب',
                              style: TextStyle(
                                height: 1,
                                fontSize: 23,
                                fontFamily: 'jannah',
                              ),
                              overflow: TextOverflow.ellipsis,
                              textHeightBehavior: TextHeightBehavior(
                                  applyHeightToFirstAscent: true,
                                  leadingDistribution:
                                      TextLeadingDistribution.even),
                            ),
                            Text(
                              'أكثر من 1000 ',
                              style: TextStyle(
                                fontSize: 18,
                                fontFamily: 'jannah',
                              ),
                            ),
                          ],
                        ),
                        Column(
                          children: [
                            Lottie.network(
                              'https://assets7.lottiefiles.com/packages/lf20_lbby8lph.json',
                              height: 150,
                              width: 150,
                            ),
                            Text(
                              'العاملين ',
                              style: TextStyle(
                                  height: 1,
                                  fontSize: 23,
                                  fontFamily: 'jannah',
                                  fontWeight: FontWeight.bold),
                              overflow: TextOverflow.ellipsis,
                              textHeightBehavior: TextHeightBehavior(
                                  applyHeightToFirstAscent: true,
                                  leadingDistribution:
                                      TextLeadingDistribution.even),
                            ),
                            Text(
                              'أكثر من 200',
                              style: TextStyle(
                                fontSize: 18,
                                fontFamily: 'jannah',
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            //Location
            Column(
              children: [
                Lottie.network(
                  'https://assets5.lottiefiles.com/packages/lf20_uuzxy6ed.json',
                  height: 150,
                  width: 150,
                ),
                Text(
                  'University Location',
                  style: TextStyle(
                      color: Color.fromARGB(255, 243, 14, 14),
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      height: 1.5),
                ),
              ],
            ),
            SizedBox(
              height: 15,
            ),
            //digital transformation
            Stack(
              alignment: AlignmentDirectional.topCenter,
              // ignore: prefer_const_literals_to_create_immutables
              children: [
                Card(
                  elevation: 10,
                  child: Image.network(
                      'https://img.freepik.com/free-vector/combination-circuit-head-shape-artificial-intelligence-moral-electronic-world-illustration_456031-123.jpg?t=st=1652738112~exp=1652738712~hmac=541a4bfeac3dfba5501acba18edc9eeb759053f3d0d41c5abc2a43a2eac128c6&w=826'),
                ),
                //Text
                Column(
                  // ignore: prefer_const_literals_to_create_immutables
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(15.0),
                      child: Text(
                        'Digital Transformation',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 20,
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(20.0),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Container(
                              width: 60,
                              child: InkWell(
                                onTap: () {
                                  print('BnZoo Hwa ElBaBa');
                                },
                                child: Column(
                                  // ignore: prefer_const_literals_to_create_immutables
                                  children: [
                                    Align(
                                      alignment: AlignmentDirectional.topStart,
                                      child: Icon(
                                        Icons.supervised_user_circle,
                                        color: Colors.white,
                                      ),
                                    ),
                                    Text(
                                      'course and services',
                                      style: TextStyle(color: Colors.white),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Container(
                              width: 60,
                              child: InkWell(
                                onTap: () {
                                  print('BnZoo Hwa ElBaBa');
                                },
                                child: Column(
                                  // ignore: prefer_const_literals_to_create_immutables
                                  children: [
                                    Align(
                                      alignment: AlignmentDirectional.topStart,
                                      child: Icon(
                                        Icons.music_note_outlined,
                                        color: Colors.white,
                                      ),
                                    ),
                                    Text(
                                      'program guide',
                                      style: TextStyle(color: Colors.white),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Container(
                              width: 60,
                              child: InkWell(
                                onTap: () {
                                  print('BnZoo Hwa ElBaBa');
                                },
                                child: Column(
                                  // ignore: prefer_const_literals_to_create_immutables
                                  children: [
                                    Align(
                                      alignment: AlignmentDirectional.topStart,
                                      child: Icon(
                                        Icons.local_activity_rounded,
                                        color: Colors.white,
                                      ),
                                    ),
                                    Text(
                                      'Activities                   .',
                                      style: TextStyle(color: Colors.white),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Container(
                              width: 60,
                              child: InkWell(
                                onTap: () {
                                  print('BnZoo Hwa ElBaBa');
                                },
                                child: Column(
                                  // ignore: prefer_const_literals_to_create_immutables
                                  children: [
                                    Align(
                                      alignment: AlignmentDirectional.topStart,
                                      child: Icon(
                                        Icons.app_registration_outlined,
                                        color: Colors.white,
                                      ),
                                    ),
                                    Text(
                                      'How To Register',
                                      style: TextStyle(color: Colors.white),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    )
                  ],
                ),
              ],
            ),
            SizedBox(
              height: 15,
            ),
            //جامعات مصرية
            Container(
              alignment: AlignmentDirectional.bottomCenter,
              child: Text(
                'جامعات مصرية ',
                style: TextStyle(
                  fontSize: 25,
                  fontFamily: 'jannah',
                ),
              ),
            ),
            Center(
              child: Container(
                height: 2,
                width: 200,
                color: Colors.deepOrange,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            Padding(
              padding: const EdgeInsets.only(left: 10, right: 5),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      children: [
                        Row(
                          // ignore: prefer_const_literals_to_create_immutables
                          children: [
                            Icon(IconBroken.Home),
                            SizedBox(
                              width: 2,
                            ),
                            Expanded(
                              child: Text(
                                'جامعة المنصورة',
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                    decoration: TextDecoration.underline),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        Row(
                          // ignore: prefer_const_literals_to_create_immutables
                          children: [
                            Icon(IconBroken.Home),
                            SizedBox(
                              width: 2,
                            ),
                            Expanded(
                              child: Text(
                                'جامعة طنطا',
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                    decoration: TextDecoration.underline),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        Row(
                          // ignore: prefer_const_literals_to_create_immutables
                          children: [
                            Icon(IconBroken.Home),
                            SizedBox(
                              width: 2,
                            ),
                            Expanded(
                              child: Text(
                                'جامعة الزقازيق',
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                    decoration: TextDecoration.underline),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        Row(
                          // ignore: prefer_const_literals_to_create_immutables
                          children: [
                            Icon(IconBroken.Home),
                            SizedBox(
                              width: 2,
                            ),
                            Expanded(
                              child: Text(
                                'جامعة بور سعيد',
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                    decoration: TextDecoration.underline),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        Row(
                          // ignore: prefer_const_literals_to_create_immutables
                          children: [
                            Icon(IconBroken.Home),
                            SizedBox(
                              width: 2,
                            ),
                            Expanded(
                              child: Text(
                                'جامعة كفرالشيخ',
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                    decoration: TextDecoration.underline),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        Row(
                          // ignore: prefer_const_literals_to_create_immutables
                          children: [
                            Icon(IconBroken.Home),
                            SizedBox(
                              width: 2,
                            ),
                            Expanded(
                              child: Text(
                                'جامعة بنها',
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                    decoration: TextDecoration.underline),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(
                          height: 2,
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: Column(
                      children: [
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة الاسكندرية',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة أسيوط',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة قناة السويس',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة سوهاج',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة دمياط',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة حلوان',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: Column(
                      children: [
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة القاهرة',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة عين شمس',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة الفيوم',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة المنيا',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة بنى سويف',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        InkWell(
                          onTap: () {},
                          child: Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(IconBroken.Home),
                              SizedBox(
                                width: 2,
                              ),
                              Expanded(
                                child: Text(
                                  'جامعة دمنهور',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                      decoration: TextDecoration.underline),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(
              height: 20,
            ),
          ],
        ),
      ),
    );
  }
}
