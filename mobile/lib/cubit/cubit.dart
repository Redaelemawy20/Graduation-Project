// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:graduation_project/cubit/status.dart';
import 'package:graduation_project/modules/mainScreens/CentersAndUnits.dart';
import 'package:graduation_project/modules/mainScreens/FacultiesAndSpecificPrograms.dart';
import 'package:graduation_project/modules/mainScreens/HomeScreen.dart';
import 'package:graduation_project/modules/mainScreens/aboutCollege.dart';
import 'package:graduation_project/modules/mainScreens/healthcare.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';

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
            child: Container(
              clipBehavior: Clip.antiAlias,
              decoration:
                  BoxDecoration(borderRadius: BorderRadius.circular(10)),
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
              style: TextStyle(color: Colors.grey),
            ),
          ),
          Expanded(
            child: Text(
              "Revolution is coming....",
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              textHeightBehavior: TextHeightBehavior(
                  applyHeightToFirstAscent: false,
                  leadingDistribution: TextLeadingDistribution.even),
            ),
          ),
        ],
      );
}
