// ignore_for_file: prefer_const_constructors, avoid_unnecessary_containers, use_key_in_widget_constructors, sized_box_for_whitespace, avoid_print, prefer_const_literals_to_create_immutables

import 'package:bloc/bloc.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:graduation_project/cubit/cubit.dart';
import 'package:graduation_project/cubit/status.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';

class HomePage extends StatelessWidget {
  // var cubit = NewsCubit.get(context);

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (BuildContext context) => NewsCubit(),
      child: BlocConsumer<NewsCubit, NewsStates>(
        listener: (context, state) {},
        builder: (context, state) {
          return Scaffold(
            endDrawer: Drawer(
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
                  ListTile(
                    title: Text(
                      'الكليات',
                      style: TextStyle(
                        fontFamily: 'jannah',
                      ),
                    ),
                    trailing: Icon(IconBroken.Home, color: Colors.blue),
                    onTap: () {
                      print('tabed');
                    },
                  ),
                  Divider(
                    color: Colors.black,
                  ),
                  ListTile(
                    title: Text(
                      'خدمات الكترونيه',
                      style: TextStyle(
                        fontFamily: 'jannah',
                      ),
                    ),
                    trailing: Icon(IconBroken.Profile, color: Colors.blue),
                    onTap: () {
                      print('tabed');
                    },
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
                      print('tabed');
                    },
                  ),
                  Divider(
                    color: Colors.black,
                  ),
                ],
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