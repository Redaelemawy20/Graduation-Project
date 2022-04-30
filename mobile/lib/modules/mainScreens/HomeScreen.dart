// ignore_for_file: prefer_const_constructors, avoid_unnecessary_containers, prefer_const_literals_to_create_immutables

import 'package:bloc/bloc.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_animations/flutter_staggered_animations.dart';
import 'package:graduation_project/cubit/cubit.dart';
import 'package:graduation_project/modules/mainScreens/Web-View-Screen.dart';
import 'package:graduation_project/shared/components/components/components.dart';
import 'package:intl/locale.dart';
import 'package:lottie/lottie.dart';
import 'package:webview_flutter/webview_flutter.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final List<String> imgList = [
      'http://mu.menofia.edu.eg/PrtlFiles/Faculties/fci/Portal/Images/140035365_1143245102776219_4624928904450132600_o(1).jpg',
      'https://smtcenter.net/wp-content/uploads/2019/09/systemic-evaluation.jpg ',
      'https://media.istockphoto.com/vectors/never-stop-learning-neon-sign-on-a-dark-background-vector-id1192842098?k=20&m=1192842098&s=612x612&w=0&h=JoELF6wU4STG-mgXFyIfHMbUhkboF5Zh_NyBdUB5QgA=',
      'https://elearningindustry.com/wp-content/uploads/2020/04/Kaila-Dwinell-Never-stop-learning.jpg',
      'https://www.soholearninghub.com/globalupdates/wp-content/uploads/2021/03/advantages-and-disadvantages-of-online-learning.jpg',
    ];
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
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
                  SizedBox(
                    height: 15,
                  ),
                  Container(
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        color: Colors.deepOrange),
                    height: 40,
                    child: TextButton(
                      onPressed: () {},
                      child: Text(
                        'TAKE VIRTUAL TOUR',
                        style: TextStyle(
                            color: Colors.white, fontWeight: FontWeight.bold),
                      ),
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
                  AnimationLimiter(
                    child: GridView.count(
                      shrinkWrap: true,
                      crossAxisCount: 1,
                      children: List.generate(
                        2,
                        (int index) {
                          return AnimationConfiguration.staggeredGrid(
                            position: index,
                            duration: const Duration(milliseconds: 500),
                            columnCount: 0,
                            child: ScaleAnimation(
                              child: FadeInAnimation(
                                child: NewsCubit.get(context).yourListChild(),
                              ),
                            ),
                          );
                        },
                      ),
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
                                height: 180,
                                width: 180,
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
                                height: 180,
                                width: 180,
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
                                height: 180,
                                width: 180,
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
                                height: 180,
                                width: 180,
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
                    ],
                  ),
                  SizedBox(
                    height: 5,
                  ),
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
                              height: 190,
                              width: 190,
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
                              height: 190,
                              width: 190,
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
                              height: 190,
                              width: 190,
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
            Column(
              children: [
                Lottie.network(
                  'https://assets5.lottiefiles.com/packages/lf20_uuzxy6ed.json',
                  height: 190,
                  width: 190,
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
          ],
        ),
      ),
    );
  }
}
