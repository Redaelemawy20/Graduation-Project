// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:carousel_slider/carousel_slider.dart';
import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';
import 'package:graduation_project/modules/HomePage/HomeLayOut.dart';
import 'package:graduation_project/modules/mainScreens/on-BourdingScreen.dart';
import 'package:graduation_project/shared/components/components/components.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:marquee/marquee.dart';

import 'الادارات العامة للدراسات العليا والبحوث/اختصاصات الادارة العامة.dart';
import 'الادارات العامة للدراسات العليا والبحوث/ادارة البحوث العلمية.dart';
import 'الادارات العامة للدراسات العليا والبحوث/ادارة الدراسات العليا.dart';
import 'الادارات العامة للدراسات العليا والبحوث/الروية والرسالة والهدف.dart';
import 'الادارات العامة للدراسات العليا والبحوث/القواعد المنظمة للعمل بدالدراسات العليا والبحوث.dart';
import 'الادارات العامة للدراسات العليا والبحوث/الهيكل التنظيمى .dart';
import 'الادارة العامة للعلاقات الثقافية/اختصاصات الادارة.dart';
import 'الادارة العامة للعلاقات الثقافية/ادارة الاتفاقيات الثقافية.dart';
import 'الادارة العامة للعلاقات الثقافية/ادارة المنح والبعثات.dart';
import 'الادارة العامة للعلاقات الثقافية/ادارة الوافدين.dart';
import 'الادارة العامة للعلاقات الثقافية/الانشطة العلمية.dart';
import 'الادارة العامة للعلاقات الثقافية/الرؤية والرساله والهدف.dart';
import 'الادارة العامة للعلاقات الثقافية/القواعد المنظمة للعمل.dart';
import 'الادارة العامة للعلاقات الثقافية/النشرات.dart';
import 'الادارة العامة للعلاقات الثقافية/الهيكل التنظيمى.dart';
import 'الادارة العامة للمكتبات/الادارة العامة للمكتبات.dart';
import 'خدمات الكترونية/خدمات الكترونية.dart';
import 'عن القطاع/اتصل بنا.dart';
import 'عن القطاع/اختصاصات القطاع.dart';
import 'عن القطاع/الرؤية والرسالة.dart';
import 'عن القطاع/الهيكل التنظيمى لقطاع الدراسات.dart';
import 'عن القطاع/الهيكل التنظيمى للمكتب.dart';
import 'عن القطاع/انجازات القطاع.dart';
import 'عن القطاع/مجلس الدراسات واالجان.dart';
import 'عن القطاع/نواب القطاع.dart';
import 'وحدة حساب البحوث العلمية/ادارة الحسابات.dart';
import 'وحدة حساب البحوث العلمية/ادارة الشئون الادارية.dart';
import 'وحدة حساب البحوث العلمية/ادراة المشتريات والمخازن.dart';
import 'وحدة حساب البحوث العلمية/تشكيل مجلس ادارة الوحدة.dart';
import 'وحدة حساب البحوث العلمية/قرارات مجلس الادارة.dart';
import 'وحدة حساب البحوث العلمية/نبذة عن الوحدة.dart';

class KeTa3nA2bElDrasatEl3olYa extends StatelessWidget {
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
                          InkWell(
                            onTap: () {
                              navigateTo(
                                  context, ElHaYkalElTANzEMYLKetaq3ElDRAsaT());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الهيكل التنظيمى لقطاع الدراسات',
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
                              navigateTo(context, ElRo2YaWaElReSala_());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    ' الرؤية والرسالة',
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
                              navigateTo(context, EKHtsasatElNEzam());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اختصاصات القطاع',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EnGaZatElkeTa3());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'انجازات القطاع',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, NowaBeLkeTa3());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'نواب القطاع',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, MaglesElDrasatWaElleGan());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'مجلس الدراسات واللجان',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, ElHaycalElTanzemyLLmaktab());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الهيكل التنظيمى للمكتب',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, CallUs_6());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
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
                                  IconBroken.Profile,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'الادارات العامة للدراسات العليا',
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
                                    'الادرات العامة للدراسات العليا',
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
                              navigateTo(context, ElHaycalElTanzemy_23());
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
                              navigateTo(context, ElRo2YaWaelResalaWaElHadaf());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الرؤية والرسالة والهدف',
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
                              navigateTo(context, EkhTsasatEl2DaraEl3ama());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اختصاصات الادارة العامة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdartElDRASATeL3OLYA());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة الدراسات العليا',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdartElBhosEl3lmya());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة البحوث العلمية',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, Elkwa3DeLMONAzemaLL3mal());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'القواعد المنظمه للعمل',
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
                                'الاداراة العامة للعلاقات الثقافية',
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
                                    'الادراة العامة للعلاقات الثقافية',
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
                              navigateTo(context, ElhaYkalRElTanzemy());
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
                              navigateTo(context, ElRo2YaWaeLReSalaWaelHaDaf());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الرؤية والرسالة والهدف',
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
                              navigateTo(context, EkhTsasatEl2Dara());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'اختصاصات الادارة ',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdartElMeNa7WaElBa3asat());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة المنح والبعثات',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdartElEtfakYaTeLsakaFya());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة الاتفاقيات الثقافية',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdartElwafDeen());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة الوافدين',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, ElAnShtaEl3elmYa());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'الأنشطة العلمية',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, ElKwa3DelMonazeMAll3amal());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'القواعد المنظمة للعمل',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, ElNshrat());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'النشرات',
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
                child: Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: InkWell(
                    onTap: () {
                      navigateTo(context, El2DaraEl3amaLLmakTaBat());
                    },
                    child: Row(
                      // ignore: prefer_const_literals_to_create_immutables
                      children: [
                        Icon(
                          IconBroken.Profile,
                          color: Colors.blue,
                        ),
                        SizedBox(
                          width: 15,
                        ),
                        Text('الادارة العامة للمكتبات'),
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
                                  Icons.science_outlined,
                                  color: Colors.blue,
                                ),
                              ),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'وحدة حساب البحوث العلمية',
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
                                    Icons.science_outlined,
                                    color: Colors.blue,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'وحدة حساب البحوث العلمية',
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
                              navigateTo(context, NaBza3NeLWHDA());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'نبذة عن الوحدة',
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
                              navigateTo(context, TaSHKelMagleseDartElWehda());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'تشكيل مجلس ادارة الوحدة',
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
                              navigateTo(context, KararatMaGleSeLEdara());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'قرارات مجلس الادارة',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdartEl7sabat());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة الحسابات',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          InkWell(
                            onTap: () {
                              navigateTo(
                                  context, EdartElMoshtriatWaElmakhaZen());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
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
                          InkWell(
                            onTap: () {
                              navigateTo(context, EdartEl42oonEl2Darya());
                            },
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              // ignore: prefer_const_literals_to_create_immutables
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(10.0),
                                  child: Text(
                                    'ادارة الشئون الادارية',
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
                child: Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: InkWell(
                    onTap: () {
                      navigateTo(context, KhadamatEleKtronya());
                    },
                    child: Row(
                      // ignore: prefer_const_literals_to_create_immutables
                      children: [
                        Icon(
                          Icons.electrical_services_outlined,
                          color: Colors.blue,
                        ),
                        SizedBox(
                          width: 15,
                        ),
                        Text('خدمات الكترونية'),
                      ],
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
          'قطاع نائب شئون الدراسات العليا والبحوث',
          style: TextStyle(fontSize: 15),
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
                  text:
                      '"بيان بانجازات الادارة العامة عبر منصة زووم برئاسة مش عارف مين كدا" ',
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
                  return yourListChildForNa2BSh2oonElDraSatEl3olYa(context);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
