// ignore_for_file: prefer_const_constructors, sized_box_for_whitespace, prefer_const_literals_to_create_immutables

import 'package:carousel_slider/carousel_slider.dart';
import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';
import 'package:graduation_project/modules/%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%D8%A7%D8%AA/%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%85%D9%8A%D9%86%20%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%87/%D8%A7%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A6%D9%88%D9%86%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9/%D8%A7%D9%84%D9%87%D9%8A%D9%83%D9%84%20%D8%A7%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%85%D9%89.dart';
import 'package:graduation_project/modules/%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%D8%A7%D8%AA/%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%85%D9%8A%D9%86%20%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%87/%D8%B9%D9%86%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9/%D8%A7%D8%AE%D8%AA%D8%B5%D8%A7%D8%B5%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%87.dart';
import 'package:graduation_project/modules/%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%D8%A7%D8%AA/%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%85%D9%8A%D9%86%20%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%87/%D8%B9%D9%86%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9/%D8%A7%D9%84%D9%87%D9%8A%D9%83%D9%84%20%D8%A7%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%85%D9%89.dart';
import 'package:graduation_project/modules/%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%D8%A7%D8%AA/%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%85%D9%8A%D9%86%20%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%87/%D8%B9%D9%86%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9/%D8%B1%D9%82%D8%A7%D8%A8%D8%A9%20%D8%A7%D9%84%D9%85%D8%AE%D8%B2%D9%88%D9%86%20%D8%A7%D9%84%D8%B3%D9%84%D8%B9%D9%89.dart';
import 'package:graduation_project/modules/%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%D8%A7%D8%AA/%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%85%D9%8A%D9%86%20%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%87/%D8%B9%D9%86%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9/%D9%84%D8%AC%D9%86%D8%A9%20%D9%85%D9%83%D8%A7%D9%81%D8%AD%D8%A9%20%D8%A7%D9%84%D9%81%D8%B3%D8%A7%D8%AF.dart';
import 'package:graduation_project/modules/HomePage/HomeLayOut.dart';
import 'package:graduation_project/modules/mainScreens/on-BourdingScreen.dart';
import 'package:graduation_project/shared/components/components/components.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:marquee/marquee.dart';

import 'ادارات اخرى/ادارة الصندوق والحسابات الخاصة.dart';
import 'ادارات اخرى/ادارة المشتريات والمخازن.dart';
import 'ادارات اخرى/ادارة الورش والتشغيل.dart';
import 'ادارات اخرى/التوجيه المالى والادارى.dart';
import 'ادارة الشئون الهندسية/اختصاصات الادارة.dart';
import 'ادارة الشئون الهندسية/ادارات فرعية.dart';
import 'ادارة الشئون الهندسية/ادارة الشئون الهندسية.dart';
import 'ادارة الشئون الهندسية/عن الادارة.dart';
import 'ادارة الصيانة/ادارات فرعية.dart';
import 'الادارة العليا/الامناء السابقون.dart';
import 'الادارة العليا/امين عام الجامعة.dart';
import 'الشئون الادارية/اختصاصات الادارة.dart';
import 'الشئون الادارية/ادارات فرعية.dart';
import 'الشئون الادارية/الهيكل التنظيمى.dart';
import 'الشئون المالية/اختصاصات الادارة.dart';
import 'الشئون المالية/ادارات فرعية.dart';
import 'الشئون المالية/الهيكل التنظيمى.dart';
import 'شئون أ ه التدريس/اختصاصات الادارة.dart';
import 'شئون أ ه التدريس/ادارات فرعية.dart';
import 'شئون أ ه التدريس/الهيكل التنظيمى.dart';
import 'شئون العاملين/اختصاصات الادارة.dart';
import 'شئون العاملين/ادارات فرعية.dart';
import 'شئون العاملين/الهيكل التنظيمى.dart';

class KeTa3Amen3ameLGam3a extends StatelessWidget {
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
                      // ignore: prefer_const_literals_to_create_immutables
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
                                'عن القطاع',
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
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  (Icon(
                                    IconBroken.Profile,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'عن القطاع',
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
                                    navigateTo(context, ElHaycalElTanzemy());
                                  },
                                  child: Text(
                                    'الهيكل التنظيمى',
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
                              navigateTo(context, EkhTasastEl2Dara());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اختصاصات الادارة',
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
                              navigateTo(context, LaGnTMokafaHatElFaSAd());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'لجنة مكافحة الفساد',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, ReKabTELmakhzonElsela3y());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'رقابة المخزون السلعى',
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
                                  IconBroken.Profile,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'الادارة العليا',
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
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  (Icon(
                                    IconBroken.Profile,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'الادارة العليا',
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
                              navigateTo(context, Ameen3amElgam3a());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'أمين عام الجامعة',
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
                              navigateTo(context, Elomna2ElSabkoon());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الامناء السابقون',
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
                                  IconBroken.Profile,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'شئون أ.ه التدريس',
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
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  (Icon(
                                    IconBroken.Profile,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'شئون أ.ه التدريس',
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
                              navigateTo(context, ElHaycalElTanZemy());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الهيكل التنظيمى',
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
                              navigateTo(context, EkhtsasatEledara());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اختصاصات الادارة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdaratFar3ya());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
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
                                  IconBroken.Profile,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'شئون العاملين',
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
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  (Icon(
                                    IconBroken.Profile,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'شئون العاملين',
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
                              navigateTo(context, ElHaycalElTanZemy_2());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الهيكل التنظيمى',
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
                              navigateTo(context, EkhtsasatEledara_2());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اختصاصات الادارة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdaratFar3ya_2());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
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
                                  IconBroken.Profile,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'الشئون الادارية',
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
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  (Icon(
                                    IconBroken.Profile,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'الشئون الادارية',
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
                              navigateTo(context, ElHaycalElTanZemy_3());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الهيكل التنظيمى',
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
                              navigateTo(context, EkhtsasatEledara_3());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اختصاصات الادارة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdaratFar3ya_3());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
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
                                  Icons.money_outlined,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'الشئون المالية',
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
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  (Icon(
                                    Icons.money_outlined,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'الشئون المالية',
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
                              navigateTo(context, ElHaycalElTanZemy7000());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الهيكل التنظيمى',
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
                              navigateTo(context, EkhtsasatEledara1515());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اختصاصات الادارة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdaratFar3ya4252());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
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
                                  Icons.engineering_outlined,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'ادارة الشئون الهندسية',
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
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  (Icon(
                                    Icons.engineering_outlined,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'ادارة الشئون الهندسسة',
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
                              navigateTo(context, AboutEl2dara());
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
                              navigateTo(context, EDartEl42onElHandsya());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة الشئون الهندسية',
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
                              navigateTo(context, ElHaycalElTanZemy222());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الهيكل التنظيمى',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EkhTasastEl2Dara500());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اختصاصات الادارة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EDaratFar3ya());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
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
                                  Icons.engineering_outlined,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'ادارة الصيانة',
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
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  (Icon(
                                    Icons.engineering_outlined,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'ادارة الصيانة',
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
                              navigateTo(context, EDaraTFar3ya());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
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
                                  IconBroken.Profile,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'ادارات اخرى',
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
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  (Icon(
                                    IconBroken.Profile,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'ادارات اخرى',
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
                              navigateTo(
                                  context, EDartElMoshtryaTwaElMakhaZen());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة المشتريات والمخازن',
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
                              navigateTo(context, EDartElWEra4WaElTa48el());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة الورش والتشغيل',
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
                              navigateTo(
                                  context, EdartElSanDokWaElhsabatElKHasa());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة الصندوق والحسابات الخاصة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, ElTaWGeHELmalyWaEl2Dary());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'التوجيه المالى والادارى',
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
            ],
          ),
        ),
      ),
      appBar: AppBar(
        title: Text(
          'قطاع أمين عام الجامعة ',
          style: TextStyle(fontSize: 18),
        ),
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
                  text: '"قطاع أمين عام الجامعة" ',
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
                  return yourListChildForKeTa3Ameen3amElGam3a(context);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
