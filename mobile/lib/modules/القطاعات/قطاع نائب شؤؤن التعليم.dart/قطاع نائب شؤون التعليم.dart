// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, sized_box_for_whitespace

import 'package:carousel_slider/carousel_slider.dart';
import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_animations/flutter_staggered_animations.dart';
import 'package:graduation_project/cubit/cubit.dart';
import 'package:graduation_project/modules/HomePage/HomeLayOut.dart';
import 'package:graduation_project/modules/mainScreens/on-BourdingScreen.dart';
import 'package:graduation_project/shared/components/components/components.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:marquee/marquee.dart';

class Ra2eesElTa3leem extends StatelessWidget {
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
      endDrawer: Drawer(
        child: SingleChildScrollView(
          child: Column(
            children: [
              UserAccountsDrawerHeader(
                decoration: BoxDecoration(
                  color: HexColor('#513019'),
                  borderRadius: BorderRadiusDirectional.only(
                      bottomEnd: Radius.circular(20.0),
                      bottomStart: Radius.circular(20.0)),
                ),
                accountName: Text(
                  'Menofia University',
                  style: TextStyle(
                    fontFamily: 'jannah',
                  ),
                ),
                accountEmail: Text(
                  'Teachers open the door, but you must enter by yourself',
                  style: TextStyle(
                    fontFamily: 'jannah',
                  ),
                ),
                currentAccountPicture: CircleAvatar(
                  backgroundColor: Colors.white,
                  child: Image(
                    image: NetworkImage(
                        'https://1.bp.blogspot.com/-ScCYiDo55G4/XykN2RL8KZI/AAAAAAAARZU/cxxLp3OSiQc-EwtwKBzPuNP4WFaeKB1OwCLcBGAsYHQ/s1600/%25D8%25AC%25D8%25A7%25D9%2585%25D8%25B9%25D8%25A9%2B%25D8%25A7%25D9%2584%25D9%2585%25D9%2586%25D9%2588%25D9%2581%25D9%258A%25D8%25A9.png'),
                  ),
                ),
              ),
              Container(
                child: Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: InkWell(
                    onTap: () {
                      navigateTo(context, HomePage());
                    },
                    child: Row(
                      children: [
                        Icon(
                          IconBroken.Home,
                          color: Colors.blue,
                        ),
                        SizedBox(
                          width: 15,
                        ),
                        Text('الصفحة الرئيسية'),
                      ],
                    ),
                  ),
                ),
              ),
              Divider(),
              Container(
                child: ExpandableNotifier(
                  initialExpanded: false,
                  child: Expandable(
                    collapsed: ExpandableButton(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Icon(
                                  IconBroken.Profile,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'شئون التعليم',
                                style: TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontFamily: 'jannah'),
                              ),
                            ],
                          ),
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: Icon(
                              IconBroken.Arrow___Down_2,
                              color: Colors.black,
                            ),
                          ),
                        ],
                      ),
                    ),
                    expanded: ExpandableButton(
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Row(
                                children: [
                                  (Icon(
                                    IconBroken.Profile,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'شئون التعليم',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ],
                              ),
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Icon(IconBroken.Arrow___Up_2),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: InkWell(
                                  onTap: () {
                                    navigateTo(context, OnBoardingScreen());
                                  },
                                  child: Text(
                                    'ادارة التسجيل',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اداراة شئون الدراسة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة الامتحانات',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة الخريجين',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'التعليم المفتوح',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اللوائح المنظمة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اتصل بنا',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              Divider(),
              Container(
                child: ExpandableNotifier(
                  initialExpanded: false,
                  child: Expandable(
                    collapsed: ExpandableButton(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Icon(
                                  IconBroken.Location,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'المدن الجامعية',
                                style: TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontFamily: 'jannah'),
                              ),
                            ],
                          ),
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: Icon(
                              IconBroken.Arrow___Down_2,
                              color: Colors.black,
                            ),
                          ),
                        ],
                      ),
                    ),
                    expanded: ExpandableButton(
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Row(
                                children: [
                                  (Icon(
                                    IconBroken.Location,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'المدن الجامعية',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ],
                              ),
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Icon(IconBroken.Arrow___Up_2),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: InkWell(
                                    onTap: () {
                                      navigateTo(context, OnBoardingScreen());
                                    },
                                    child: Text(
                                      'الهيكل التنظيمى',
                                      style: TextStyle(
                                          fontWeight: FontWeight.bold),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارات فرعية',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'وحدات ذات طابع خاص',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الخدمات والأنشطة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'دليل المدن',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              Divider(),
              Container(
                child: ExpandableNotifier(
                  initialExpanded: false,
                  child: Expandable(
                    collapsed: ExpandableButton(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Icon(
                                  Icons.fitness_center_outlined,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'رعاية الشباب',
                                style: TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontFamily: 'jannah'),
                              ),
                            ],
                          ),
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: Icon(
                              IconBroken.Arrow___Down_2,
                              color: Colors.black,
                            ),
                          ),
                        ],
                      ),
                    ),
                    expanded: ExpandableButton(
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Row(
                                children: [
                                  (Icon(
                                    Icons.fitness_center_outlined,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'رعاية الشباب',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ],
                              ),
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Icon(IconBroken.Arrow___Up_2),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: InkWell(
                                    onTap: () {
                                      navigateTo(context, OnBoardingScreen());
                                    },
                                    child: Text(
                                      'الهيكل التنظيمى',
                                      style: TextStyle(
                                          fontWeight: FontWeight.bold),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'أقسام رعاية الشباب',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اللوائح المنظمة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اتصل بنا',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              Divider(),
              Container(
                child: ExpandableNotifier(
                  initialExpanded: false,
                  child: Expandable(
                    collapsed: ExpandableButton(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Icon(
                                  Icons.medical_services_outlined,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'الشئون الطبية',
                                style: TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontFamily: 'jannah'),
                              ),
                            ],
                          ),
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: Icon(
                              IconBroken.Arrow___Down_2,
                              color: Colors.black,
                            ),
                          ),
                        ],
                      ),
                    ),
                    expanded: ExpandableButton(
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Row(
                                children: [
                                  (Icon(
                                    Icons.medical_services_outlined,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'الشئون الطبية',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ],
                              ),
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Icon(IconBroken.Arrow___Up_2),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: InkWell(
                                    onTap: () {
                                      navigateTo(context, OnBoardingScreen());
                                    },
                                    child: Text(
                                      'الهيكل التنظيمى',
                                      style: TextStyle(
                                          fontWeight: FontWeight.bold),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'عن الادارة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 8.0,
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الادارات الفرعية',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, HomePage());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اتصل بنا',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
      appBar: AppBar(
        title: Text('قطاع نائب رئيس الجامعة لشئون التعليم والطلاب'),
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
                  return yourListChildForRa2eesElTolaab(context);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
