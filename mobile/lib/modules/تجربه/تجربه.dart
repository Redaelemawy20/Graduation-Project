// ignore_for_file: prefer_const_constructors, avoid_unnecessary_containers

import 'package:carousel_slider/carousel_slider.dart';
import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';
import 'package:graduation_project/modules/%D8%AA%D8%AC%D8%B1%D8%A8%D9%87/%D8%AA%D8%AC%D8%B1%D8%A8%D9%872.dart';

class Tagroba extends StatelessWidget {
  final List<String> imgList = [
    'http://mu.menofia.edu.eg/PrtlFiles/Faculties/fci/Portal/Images/140035365_1143245102776219_4624928904450132600_o(1).jpg',
    'https://smtcenter.net/wp-content/uploads/2019/09/systemic-evaluation.jpg ',
    'https://media.istockphoto.com/vectors/never-stop-learning-neon-sign-on-a-dark-background-vector-id1192842098?k=20&m=1192842098&s=612x612&w=0&h=JoELF6wU4STG-mgXFyIfHMbUhkboF5Zh_NyBdUB5QgA=',
    'https://elearningindustry.com/wp-content/uploads/2020/04/Kaila-Dwinell-Never-stop-learning.jpg',
    'https://www.soholearninghub.com/globalupdates/wp-content/uploads/2021/03/advantages-and-disadvantages-of-online-learning.jpg',
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      /* body: Expanded(
        child: Column(
          children: [
            appContainer(),
            Expanded(
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(20.0),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Builder(builder: (context) {
                          return Container(
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
                          );
                        }),
                        SizedBox(
                          height: 15,
                        ),
                        Container(
                          height: 40,
                          color: Colors.blue,
                          child: TextButton(
                            onPressed: () {},
                            child: Text(
                              'TAKE TOUR',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold),
                            ),
                          ),
                        ),
                        SizedBox(
                          height: 25,
                        ),
                        Row(
                          children: [
                            Expanded(
                              child: Column(
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  CircleAvatar(
                                    radius: 70,
                                    backgroundImage: NetworkImage(
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2Fadxc36HRMRfx3u6GZv61RJyp-lwVVrDZ9NnsW2xutTYzx-GKbWRECT66RrnXjYrVE&usqp=CAU'),
                                  ),
                                ],
                              ),
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
                            Expanded(
                              child: Column(
                                // ignore: prefer_const_literals_to_create_immutables
                                children: [
                                  CircleAvatar(
                                    radius: 70,
                                    backgroundImage: NetworkImage(
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-SFd6A2gV2Lzidtmfgt4RG0jKGvR_5srmg&usqp=CAU'),
                                  ),
                                ],
                              ),
                            ),
                            Spacer(),
                            CircleAvatar(
                              radius: 70,
                              backgroundImage: NetworkImage(
                                  'https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/262031904_1469693220083794_4872642996329985297_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DHENfi1wo8wAX-jM65q&tn=ma9OCkCnbLBFhxYr&_nc_ht=scontent.fcai20-3.fna&oh=00_AT_U-QlPmRZfBKL12thNDr6-YZI53leDN89uPFfoQIVq4Q&oe=61E2E408'),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),*/
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Center(
          child: Column(
            children: [
              Container(
                width: 100,
                height: 300,
                color: Colors.black,
              ),
              Container(
                width: 100,
                height: 300,
                color: Colors.amber,
              ),
              Container(
                width: 100,
                height: 300,
                color: Colors.blue,
              ),
              Container(
                child: ExpandableNotifier(
                  initialExpanded: true,
                  child: Expandable(
                    collapsed: ExpandableButton(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Row(
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Icon(Icons.access_alarm),
                              SizedBox(
                                width: 8,
                              ),
                              Text(
                                'Client Info.',
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                            ],
                          ),
                          Icon(
                            Icons.arrow_right,
                            color: Colors.black,
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
                                    Icons.access_alarm,
                                  )),
                                  const SizedBox(
                                    width: 8,
                                  ),
                                  Text(
                                    'Client Info.',
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ],
                              ),
                              SizedBox()
                            ],
                          ),
                          const SizedBox(
                            height: 15.0,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                'Client Name',
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              Text(
                                "yahya",
                                textAlign: TextAlign.end,
                                style: TextStyle(fontWeight: FontWeight.bold),
                              )
                            ],
                          ),
                          const SizedBox(
                            height: 15.0,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                'Phone',
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              Text(
                                "yahya",
                                textAlign: TextAlign.end,
                                style: TextStyle(fontWeight: FontWeight.bold),
                              )
                            ],
                          ),
                          const SizedBox(
                            height: 15.0,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            // ignore: prefer_const_literals_to_create_immutables
                            children: [
                              Text(
                                'Address',
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              SizedBox(
                                width: 10.0,
                                child: Text(
                                  "yahya",
                                  textAlign: TextAlign.end,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(fontWeight: FontWeight.bold),
                                ),
                              )
                            ],
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
    );
  }
}
