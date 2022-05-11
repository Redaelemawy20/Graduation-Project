// ignore_for_file: prefer_const_constructors, avoid_unnecessary_containers, use_key_in_widget_constructors, sized_box_for_whitespace, avoid_print, prefer_const_literals_to_create_immutables

import 'package:bloc/bloc.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:graduation_project/%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8/%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8_%D8%A7%D9%84%D9%88%D8%A7%D9%81%D8%AF%D9%8A%D9%86.dart';
import 'package:graduation_project/%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8/%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA_%D8%B9%D9%84%D9%8A%D8%A7.dart';
import 'package:graduation_project/%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8/%D9%84%D9%85_%D9%8A%D8%AA%D9%88%D9%81%D8%B1.dart';
import 'package:graduation_project/%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8/%D9%86%D8%AA%D8%A7%D8%A6%D8%AC_%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA.dart';
import 'package:graduation_project/%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8/bacaloryous.dart';
import 'package:graduation_project/%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8/elzhara.dart';
import 'package:graduation_project/%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8/graduated.dart';
import 'package:graduation_project/%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8/services.dart';
import 'package:graduation_project/cubit/cubit.dart';
import 'package:graduation_project/cubit/status.dart';
import 'package:graduation_project/modules/%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%D8%A7%D8%AA/%D9%82%D8%B7%D8%A7%D8%B9%20%D8%B1%D8%A6%D9%8A%D8%B3%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9/%D9%82%D8%B7%D8%A7%D8%B9%20%D8%B1%D8%A6%D9%8A%D8%B3%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9.dart';
import 'package:graduation_project/modules/%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%D8%A7%D8%AA/%D9%82%D8%B7%D8%A7%D8%B9%20%D9%86%D8%A7%D8%A6%D8%A8%20%D8%B4%D8%A4%D8%A4%D9%86%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85.dart/%D9%82%D8%B7%D8%A7%D8%B9%20%D9%86%D8%A7%D8%A6%D8%A8%20%D8%B4%D8%A4%D9%88%D9%86%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85.dart';
import 'package:graduation_project/modules/mainScreens/%D9%81%D9%8A%D8%B1%D8%B3%20%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7.dart';
import 'package:graduation_project/modules/mainScreens/on-BourdingScreen.dart';
import 'package:graduation_project/shared/components/components/components.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';
import 'package:expandable/expandable.dart';

class HomePage extends StatelessWidget {
  // var cubit = NewsCubit.get(context);
  bool y = false;
  var formKey = GlobalKey<AnimatedListState>();

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (BuildContext context) => NewsCubit(),
      child: BlocConsumer<NewsCubit, NewsStates>(
        listener: (context, state) {},
        builder: (context, state) {
          return Scaffold(
            endDrawer: Drawer(
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    UserAccountsDrawerHeader(
                      decoration: BoxDecoration(
                        color: Colors.teal[600],
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
                                        Icons.people,
                                        color: Colors.blue,
                                      ),
                                    ),
                                    SizedBox(
                                      width: 8,
                                    ),
                                    Text(
                                      'الطلاب',
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
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Row(
                                      children: [
                                        (Icon(
                                          Icons.people,
                                          color: Colors.blue,
                                        )),
                                        const SizedBox(
                                          width: 8,
                                        ),
                                        Text(
                                          'الطلاب',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
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
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, elzhraa());
                                        },
                                        child: Text(
                                          'التقديم للمدن الجامعية ',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(
                                  height: 8.0,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, bacalorya());
                                        },
                                        child: Text(
                                          'مرحله البكالوريوس والليسانس',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(
                                  height: 8.0,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, drasat());
                                        },
                                        child: Text(
                                          'مرحلة الدراسات العليا',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, graguate());
                                        },
                                        child: Text(
                                          'الخريجين',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, wafden());
                                        },
                                        child: Text(
                                          'الطلاب الوافدين',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, service());
                                        },
                                        child: Text(
                                          'الخدمات الطلابية',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, service());
                                        },
                                        child: Text(
                                          'انشطة طلابية',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, natega());
                                        },
                                        child: Text(
                                          'نتائج الدراسات العليا',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, service());
                                        },
                                        child: Text(
                                          'رعاية الشباب',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, not_found());
                                        },
                                        child: Text(
                                          'نتائج الأمتحانات',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, not_found());
                                        },
                                        child: Text(
                                          'الحصول علي البريد الألكترني',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, not_found());
                                        },
                                        child: Text(
                                          'تسجيل الطلاب الأجانب',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                    Divider(
                      color: Colors.black,
                    ),
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
                                      'ادارة الجامعة',
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
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
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
                                          'ادارة الجامعة',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
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
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(context, Ra2eesElGam3a());
                                        },
                                        child: Text(
                                          'قطاع رئيس الجامعة',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                    /*Text(
                                      "yahya",
                                      textAlign: TextAlign.end,
                                      style:
                                          TextStyle(fontWeight: FontWeight.bold),
                                    )*/
                                  ],
                                ),
                                const SizedBox(
                                  height: 8.0,
                                ),
                                InkWell(
                                  onTap: () {
                                    navigateTo(context, Ra2eesElTa3leem());
                                  },
                                  child: Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: [
                                      Padding(
                                        padding: const EdgeInsets.all(10.0),
                                        child: Text(
                                          'قطاع نائب شؤون التعليم  والطلاب',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                      /*Text(
                                        "yahya",
                                        textAlign: TextAlign.end,
                                        style:
                                            TextStyle(fontWeight: FontWeight.bold),
                                      )*/
                                    ],
                                  ),
                                ),
                                const SizedBox(
                                  height: 8.0,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        'قطاع نائب الدراسات العليا والبحوث',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                    /*SizedBox(
                                      width: 10.0,
                                      child: Text(
                                        "yahya",
                                        textAlign: TextAlign.end,
                                        overflow: TextOverflow.ellipsis,
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    )*/
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        'قطاع نائب شؤون خدمة المجتمع والبيئة',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                    /*Text(
                                      "yahya",
                                      textAlign: TextAlign.end,
                                      style:
                                          TextStyle(fontWeight: FontWeight.bold),
                                    )*/
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        'قطاع أمين عام الجامعة',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                    /*Text(
                                      "yahya",
                                      textAlign: TextAlign.end,
                                      style:
                                          TextStyle(fontWeight: FontWeight.bold),
                                    )*/
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                    Divider(
                      color: Colors.black,
                    ),
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
                                        IconBroken.Filter,
                                        color: Colors.blue,
                                      ),
                                    ),
                                    SizedBox(
                                      width: 8,
                                    ),
                                    Text(
                                      ' الكليات',
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
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
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
                                          'الكليات',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
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
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(
                                              context, OnBoardingScreen());
                                        },
                                        child: Text(
                                          'كلية الحاسبات والمعلومات',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                    /*Text(
                                      "yahya",
                                      textAlign: TextAlign.end,
                                      style:
                                          TextStyle(fontWeight: FontWeight.bold),
                                    )*/
                                  ],
                                ),
                                const SizedBox(
                                  height: 8.0,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        'كلية التجارة',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                    /*Text(
                                      "yahya",
                                      textAlign: TextAlign.end,
                                      style:
                                          TextStyle(fontWeight: FontWeight.bold),
                                    )*/
                                  ],
                                ),
                                const SizedBox(
                                  height: 8.0,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        ' كلية الطب',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                    /*SizedBox(
                                      width: 10.0,
                                      child: Text(
                                        "yahya",
                                        textAlign: TextAlign.end,
                                        overflow: TextOverflow.ellipsis,
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    )*/
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        'كلية الهندسة',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                    /*Text(
                                      "yahya",
                                      textAlign: TextAlign.end,
                                      style:
                                          TextStyle(fontWeight: FontWeight.bold),
                                    )*/
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                    Divider(
                      color: Colors.black,
                    ),
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
                                        Icons.web_asset_outlined,
                                        color: Colors.blue,
                                      ),
                                    ),
                                    SizedBox(
                                      width: 8,
                                    ),
                                    Text(
                                      'خدمات الكترونية',
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
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Row(
                                      children: [
                                        (Icon(
                                          Icons.web_asset_outlined,
                                          color: Colors.blue,
                                        )),
                                        const SizedBox(
                                          width: 8,
                                        ),
                                        Text(
                                          'خدمات الكترونيه',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
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
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: InkWell(
                                        onTap: () {
                                          navigateTo(
                                              context, OnBoardingScreen());
                                        },
                                        child: Text(
                                          'كلية الحاسبات والمعلومات',
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                    /*Text(
                                      "yahya",
                                      textAlign: TextAlign.end,
                                      style:
                                          TextStyle(fontWeight: FontWeight.bold),
                                    )*/
                                  ],
                                ),
                                const SizedBox(
                                  height: 8.0,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        'كلية التجارة',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                    /*Text(
                                      "yahya",
                                      textAlign: TextAlign.end,
                                      style:
                                          TextStyle(fontWeight: FontWeight.bold),
                                    )*/
                                  ],
                                ),
                                const SizedBox(
                                  height: 8.0,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        ' كلية الطب',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                    /*SizedBox(
                                      width: 10.0,
                                      child: Text(
                                        "yahya",
                                        textAlign: TextAlign.end,
                                        overflow: TextOverflow.ellipsis,
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    )*/
                                  ],
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        'كلية الهندسة',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                    /*Text(
                                      "yahya",
                                      textAlign: TextAlign.end,
                                      style:
                                          TextStyle(fontWeight: FontWeight.bold),
                                    )*/
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                    Divider(
                      color: Colors.black,
                    ),
                    ListTile(
                      title: Text(
                        'اتصل بنا ',
                        style: TextStyle(
                          fontFamily: 'jannah',
                        ),
                      ),
                      trailing: Icon(IconBroken.Call, color: Colors.blue),
                      onTap: () {
                        print('tabed');
                      },
                    ),
                    Divider(
                      color: Colors.black,
                    ),
                    ListTile(
                      title: Text(
                        ' الجامعه فى مواجهة فيروس كورونا',
                        style: TextStyle(
                          color: Colors.red,
                          fontFamily: 'jannah',
                        ),
                      ),
                      trailing: Icon(
                        Icons.coronavirus_outlined,
                        color: Colors.green,
                      ),
                      onTap: () {
                        navigateTo(context, CoronaVirus());
                      },
                    ),
                    Divider(
                      color: Colors.black,
                    ),
                  ],
                ),
              ),
            ),
            appBar: AppBar(
              title: Text(
                'Menofia University',
                style: TextStyle(
                  fontFamily: 'jannah',
                ),
              ),
            ),
            body: NewsCubit.get(context)
                .screens[NewsCubit.get(context).currentIndex],
            bottomNavigationBar: BottomNavigationBar(
              currentIndex: NewsCubit.get(context).currentIndex,
              onTap: (index) {
                NewsCubit.get(context).changeBottomNav(index);
              },
              items: NewsCubit.get(context).bottomItems,
            ),
          );
        },
      ),
    );
    //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0wZQZ6KYMCjW6Lwrem1Bg_9sfqj3kUjQ8Q&usqp=CAU
    //http://santafetutor.com/wp-content/uploads/2016/09/learning.jpg
    //https://media.istockphoto.com/vectors/never-stop-learning-neon-sign-on-a-dark-background-vector-id1192842098?k=20&m=1192842098&s=612x612&w=0&h=JoELF6wU4STG-mgXFyIfHMbUhkboF5Zh_NyBdUB5QgA=
    //https://elearningindustry.com/wp-content/uploads/2020/04/Kaila-Dwinell-Never-stop-learning.jpg

    //https://www.soholearninghub.com/globalupdates/wp-content/uploads/2021/03/advantages-and-disadvantages-of-online-learning.jpg
  }
}
