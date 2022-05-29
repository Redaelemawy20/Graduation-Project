// ignore_for_file: prefer_const_constructors

import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:graduation_project/cubit/status.dart';
import 'package:graduation_project/modules/mainScreens/CentersAndUnits.dart';
import 'package:graduation_project/modules/mainScreens/FacultiesAndSpecificPrograms.dart';
import 'package:graduation_project/modules/mainScreens/HomeScreen.dart';
import 'package:graduation_project/modules/mainScreens/aboutCollege.dart';
import 'package:graduation_project/modules/mainScreens/healthcare.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';
import 'package:youtube_player_iframe/youtube_player_iframe.dart';

class NewsCubit extends Cubit<NewsStates> {
  NewsCubit() : super(NewsInitialState());

  int currentIndex = 0;
  static NewsCubit get(context) => BlocProvider.of(context);

  List<BottomNavigationBarItem> bottomItems = [
    BottomNavigationBarItem(
      icon: Icon(IconBroken.Home),
      label: 'HOME PAGE',
    ),
    BottomNavigationBarItem(
      icon: Icon(IconBroken.Info_Circle),
      label: 'ABOUT COLLEGE',
    ),
    BottomNavigationBarItem(
      icon: Icon(IconBroken.Location),
      label: 'CentersAndUnits',
    ),
    BottomNavigationBarItem(
      icon: Icon(IconBroken.Heart),
      label: 'HEALTH CARE',
    ),
    BottomNavigationBarItem(
      icon: Icon(IconBroken.Work),
      label: 'FaculiteisAndPrograms',
    ),
  ];
  List<Widget> screens = [
    HomeScreen(),
    AboutCollege(),
    CentersAndUnits(),
    HealthCare(),
    FaculiteisAndPrograms(),
  ];
  void changeBottomNav(int index) {
    currentIndex = index;
    emit(NewschangeBottomNav());
  }

  Widget yourListChild() => Column(
        children: [
          Expanded(
            flex: 3,
            child: Container(
              clipBehavior: Clip.antiAlias,
              decoration:
                  BoxDecoration(borderRadius: BorderRadius.circular(10)),
              child: Image(
                image: NetworkImage(
                    'https://img.freepik.com/free-photo/open-flying-old-books_1232-2096.jpg?size=626&ext=jpg&uid=R64649530&ga=GA1.2.47020922.1628699756'),
              ),
            ),
          ),
          Container(
            alignment: AlignmentDirectional.topEnd,
            child: Padding(
              padding: const EdgeInsets.only(top: 10),
              child: Text(
                'الاحد 22 يناير 2022',
                style: TextStyle(color: Colors.grey),
              ),
            ),
          ),
          Expanded(
            child: Text(
              "مكنك الحصول على جميع الخدمات الالكترونية من خلال موقع جامعة المنوفيه حيث يمكنك اختيار البوابة المراد الدخول اليها",
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              textHeightBehavior: TextHeightBehavior(
                  applyHeightToFirstAscent: true,
                  leadingDistribution: TextLeadingDistribution.even),
            ),
          ),
        ],
      );
}
