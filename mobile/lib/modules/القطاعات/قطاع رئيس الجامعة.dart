// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, sized_box_for_whitespace

import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_animations/flutter_staggered_animations.dart';
import 'package:graduation_project/cubit/cubit.dart';
import 'package:graduation_project/shared/components/components/components.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';
import 'package:marquee/marquee.dart';

class Ra2eesElGam3a extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final List<String> imgList = [
      'http://mu.menofia.edu.eg/PrtlFiles/Faculties/fci/Portal/Images/140035365_1143245102776219_4624928904450132600_o(1).jpg',
      'https://img.freepik.com/free-photo/close-up-hand-writing-notebook-top-view_23-2148888824.jpg?t=st=1652089627~exp=1652090227~hmac=fb5719f4fa2be751ccde6035244a0996b955dc5019e716978df6d1383dbb50d3&w=740',
      'https://img.freepik.com/free-photo/young-student-learning-library_23-2149215425.jpg?w=740',
      'https://img.freepik.com/free-photo/person-holding-light-bulb-with-graduation-cap_23-2148721299.jpg?t=st=1652090055~exp=1652090655~hmac=dd9dd39a6011d985f25f005476836351b6539d29c3a07dc82cbfbb2019fc677a&w=740',
      'https://img.freepik.com/free-photo/hand-selects-icons-virtual-screen-concept-distance-learning-methods-searching-systematization-information-retrieval_116441-22173.jpg?w=826'
    ];
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(
            IconBroken.Arrow___Left_2,
            color: Colors.black,
          ),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: Column(
          children: [
            CarouselSlider(
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
                  .map((item) => Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          clipBehavior: Clip.antiAlias,
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10)),
                          child: Center(
                            child: Image.network(
                              item,
                              width: double.infinity,
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                      ))
                  .toList(),
            ),
            /*  Padding(
              padding: const EdgeInsets.all(15.0),
              child: Container(
                height: 30,
                child: Marquee(
                  textDirection: TextDirection.rtl,
                  text:
                      'أعلن الدكتور عادل مبارك رئيس الجامعه بدء الدراسه فى كلية الذكاء الاصطناعى "',
                  style: TextStyle(fontSize: 20, height: 1),
                  fadingEdgeStartFraction: 0.2,
                  fadingEdgeEndFraction: 0.2,
                  blankSpace: 50,
                ),
              ),
            ),*/
            Padding(
              padding: const EdgeInsets.all(15.0),
              child: Container(
                height: 30,
                child: Marquee(
                  textDirection: TextDirection.rtl,
                  text: '"رئيس جامعة المنوفية يعتمد نتيجة 2021 " ',
                  style: TextStyle(fontSize: 18, height: 1),
                  fadingEdgeStartFraction: 0.2,
                  fadingEdgeEndFraction: 0.3,
                  blankSpace: 50,
                ),
              ),
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
          ],
        ),
      ),
    );
  }
}
