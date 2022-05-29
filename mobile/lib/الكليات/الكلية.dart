import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/rendering.dart';
import 'package:graduation_project/%D8%A7%D9%84%D9%83%D9%84%D9%8A%D8%A7%D8%AA/ComputerCollege.dart';
import 'package:marquee/marquee.dart';
import 'package:fab_circular_menu/fab_circular_menu.dart';

import '../modules/HomePage/HomeLayOut.dart';
import '../shared/components/components/components.dart';




class MyListView extends StatelessWidget {
  MyListView(
      {required this.img_location, required this.caption, this.funGoToScreen});

  final String img_location;
  final String caption;
  var funGoToScreen;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 150,
      decoration: BoxDecoration(borderRadius: BorderRadius.circular(20),),
      child: InkWell(
        onTap: funGoToScreen,
        child: ListTile(
          title: Image.asset(img_location,height: 80),
          subtitle: Container(
            alignment: Alignment.topCenter,
            child: Text(caption),
          ),
        ),
      ),
    );
  }
}

class faculuty extends StatelessWidget {

  faculuty( this.faculutyName/*,this.imageIcon*/,this.imgList,this.faculutyWelcom,this.derawerApp,this._member);



  final List<String> imgList;
  final List<dynamic> _member;

  late String faculutyName;
  late String faculutyWelcom;
  late Drawer derawerApp;
  late String imageIcon;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        endDrawer: derawerApp,
        appBar: AppBar(
          backgroundColor: Colors.white38,
          centerTitle: true,
          title: Text(faculutyName),
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.start,
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
                          autoPlayInterval: const Duration(seconds: 3),
                          autoPlayAnimationDuration: const Duration(seconds: 1),
                          autoPlayCurve: Curves.fastOutSlowIn,
                          scrollDirection: Axis.horizontal,
                        ),
                        items: imgList
                            .map((item) => Container(
                                  margin: const EdgeInsets.symmetric(
                                      horizontal: 10),
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
                    const SizedBox(height: 5),
                    SizedBox(
                      height: 50,
                      width: double.infinity,
                      child: Card(
                        color: Colors.white70,
                        child: Marquee(
                          text: faculutyWelcom,
                          blankSpace: 50,
                        ),
                      ),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Container(
                      height: 1,
                      width: double.infinity,
                      color: Colors.grey,
                    ),
                    const SizedBox(
                      height: 5,
                    ),
                    Container(
                      alignment: AlignmentDirectional.bottomCenter,
                      child:const Text(
                        'أحدث الأخبار',
                        style: TextStyle(
                          fontSize: 25,
                          fontFamily: 'jannah',
                        ),
                      ),
                    ),
                    const SizedBox(height: 20),
                    GridView.count(
                      physics:const NeverScrollableScrollPhysics(),
                      shrinkWrap: true,
                      crossAxisCount: 1,
                      children: List.generate(
                        3,
                            (int index) {
                          return yourListChildForRa2eesElgam3a(context);
                        },
                      ),
                    ),
                    Container(
                      height: 1,
                      width: double.infinity,
                      color: Colors.grey,
                    ),
                    const Center(
                      child: Text(
                        'القيادات الحالية للكلية',
                        style: TextStyle(fontSize: 25),
                      ),
                    ),
                    ContainerOfMember(context,_member),
                    const SizedBox(
                      height: 50,
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        floatingActionButton: FabCircularMenu(
            alignment: Alignment.bottomCenter,
            ringColor:Colors.white.withOpacity(0),
            ringWidth: 80,
            ringDiameter: 300,
            children: <Widget>[
              IconButton(
                  icon: const Icon(
                    Icons.home,
                    size: 40,
                    color: Color.fromARGB(255, 4, 1, 74),
                  ),
                  onPressed: () {navigateTo(context, HomePage());}),
              IconButton(
                  icon: const Icon(
                    Icons.wysiwyg,
                    color: Color.fromARGB(255, 4, 1, 74),
                    size: 40,
                  ),
                  onPressed: () {}),
              IconButton(
                  icon: const Icon(
                    Icons.call,
                    size: 40,
                    color: Color.fromARGB(255, 4, 1, 74),
                  ),
                  onPressed: () {
                    final sBar = SnackBar(
                      content: const Text('Not available now'),
                      duration:const Duration(seconds: 1),
                      padding: const EdgeInsets.all(20),
                      backgroundColor: Colors.green,
                      dismissDirection: DismissDirection.up,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30),
                      ),
                    );
                    ScaffoldMessenger.of(context).showSnackBar(sBar);
                  })
            ]),
            
            
            );
  }

  // ContainerOfMember
  Container ContainerOfMember(BuildContext context,List Mylist) {
    return Container(
                    width: MediaQuery.of(context).size.width,
                    height: 500,
                    child: CarouselSlider(
                      options: CarouselOptions(
                        height: 450,
                        aspectRatio: 16 / 9,
                        viewportFraction: 0.70,
                        enlargeCenterPage: true,
                      ),
                      items: Mylist.map((member) {
                        return Builder(
                          builder: (context) {
                            return GestureDetector(
                              onTap: () {},
                              child: AnimatedContainer(
                                duration: const Duration(milliseconds: 300),
                                decoration: BoxDecoration(
                                    color: Colors.white,
                                    borderRadius: BorderRadius.circular(20),
                                    boxShadow: [
                                      BoxShadow(
                                          color: Colors.grey.withOpacity(0.2),
                                          blurRadius: 20,
                                          offset: const Offset(0, 5))
                                    ]),
                                child: SingleChildScrollView(
                                  child: Column(
                                    children: [
                                      Container(
                                        height: 310,
                                        clipBehavior: Clip.hardEdge,
                                        margin:
                                            const EdgeInsets.only(top: 10),
                                        decoration: BoxDecoration(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        child: Image.network(
                                          member['image'],
                                          fit: BoxFit.cover,
                                        ),
                                      ),
                                      const SizedBox(
                                        height: 20,
                                      ),
                                      Text(
                                        member['title'],
                                        style: const TextStyle(
                                          fontSize: 18,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                      const SizedBox(
                                        height: 1,
                                      ),
                                      Text(
                                          member['description'],
                                          textAlign: TextAlign.center,
                                          style: TextStyle(
                                              fontSize: 20,
                                              color: Colors.grey.shade600),
                                        ),
                                    ],
                                  ),
                                ),
                              ),
                            );
                          },
                        );
                      }).toList(),

                    ),
                  );
  }
}
