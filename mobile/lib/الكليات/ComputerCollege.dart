
import 'package:flutter/material.dart';

import '../modules/HomePage/HomeLayOut.dart';
import '../shared/components/components/components.dart';
String ComputerCollegeName="كلية الحاسبات والمعلومات";

List <String>ComputerCollegeList = [
'http://mu.menofia.edu.eg/PrtlFiles/Faculties/fci/Portal/Images/140035365_1143245102776219_4624928904450132600_o(1).jpg',
'https://smtcenter.net/wp-content/uploads/2019/09/systemic-evaluation.jpg ',
'https://media.istockphoto.com/vectors/never-stop-learning-neon-sign-on-a-dark-background-vector-id1192842098?k=20&m=1192842098&s=612x612&w=0&h=JoELF6wU4STG-mgXFyIfHMbUhkboF5Zh_NyBdUB5QgA=',
'https://elearningindustry.com/wp-content/uploads/2020/04/Kaila-Dwinell-Never-stop-learning.jpg',
'https://www.soholearninghub.com/globalupdates/wp-content/uploads/2021/03/advantages-and-disadvantages-of-online-learning.jpg',
];

List<dynamic> memberOfComputer = [
  {
    'title': 'الدكتور حاتم محمد',
    'image':
    'http://mu.menofia.edu.eg/PrtlFiles/Faculties/FCI/Portal/Images/1_1_Untitled(8).png',
    'description': 'عميد الكلية'
  },
  {
    'title': 'الدكتور حمدى موسى',
    'image':
    'http://mu.menofia.edu.eg/PrtlFiles/Faculties/fci/Portal/Images/1_1_Untitled(7).png',
    'description': 'وكيل الكلية لشؤن التعليم والطلاب'
  },
  {
    'title': 'أ.د/ أشرف السيسى',
    'image':
    'http://mu.menofia.edu.eg/PrtlFiles/Faculties/fci/Portal/Images/%D8%A7%D8%B4%D8%B1%D9%81%20%D8%A7%D9%84%D8%B3%D9%8A%D8%B3%D9%89(2).png',
    'description': 'وكيل الكلية لخدمة المجتمع و شئون البيئة'
  }
];

String WelcomComputer ="مرحبا بكم فى كلية الحاسبات والمعلومات جامعة المنوفية";



Drawer comDrawer (BuildContext _context){
    return Drawer(
        child: Container(
          child: Directionality(
            textDirection: TextDirection.rtl,
            child: ListView(
              children: [
                 UserAccountsDrawerHeader(
                  decoration: BoxDecoration(
                    color: Colors.teal[600],
                    borderRadius:const BorderRadiusDirectional.only(
                        bottomEnd: Radius.circular(20.0),
                        bottomStart: Radius.circular(20.0)),
                  ),
                  accountName:const Text(
                    'الحاسبات والمعلومات',
                    style: TextStyle(
                      fontFamily: 'jannah',
                    ),
                  ),
                  accountEmail:const Text(
                    'تتمنا لكم التوفيق جميعا',
                    style: TextStyle(
                      fontFamily: 'jannah',
                    ),
                  ),
                  currentAccountPicture:const CircleAvatar(
                    backgroundColor: Colors.white,
                    child: Image(
                      image: NetworkImage(
                          'https://1.bp.blogspot.com/-ScCYiDo55G4/XykN2RL8KZI/AAAAAAAARZU/cxxLp3OSiQc-EwtwKBzPuNP4WFaeKB1OwCLcBGAsYHQ/s1600/%25D8%25AC%25D8%25A7%25D9%2585%25D8%25B9%25D8%25A9%2B%25D8%25A7%25D9%2584%25D9%2585%25D9%2586%25D9%2588%25D9%2581%25D9%258A%25D8%25A9.png'),
                    ),
                  ),
                ),
                /*IconButton(
                    onPressed: (){navigateTo(_context, HomePage());},
                    icon: Icon(
                      Icons.home,
                      size: 100,
                      color: Color.fromARGB(255, 4, 1, 74),)),*/
                const SizedBox(height: 10,),
                ExpansionTile(
                    title: Text('عن الكلية',style: TextStyle(fontSize: 25),),
                  children: [
                    TextButton(onPressed: (){}, child: Text('نبذة تاريخية',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('الرؤية',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('الرسالة',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('الأهداف',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('استراتيجية الكلية',style: TextStyle(fontSize: 20),)),
                  ],
                ),
                const Divider(
                  color: Colors.blueGrey,
                ),
                ExpansionTile(
                  title: Text('المجالس',style: TextStyle(fontSize: 25),),
                  children: [
                    TextButton(onPressed: (){}, child: Text('مجلس الكلية',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('مجلس شئون الطلاب',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('مجلس الدراسات العليا',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('مجلس خدمة المجتمع وشئون البيئة',style: TextStyle(fontSize: 20),)),

                  ],
                ),
                const Divider(
                  color: Colors.blueGrey,
                ),
                ExpansionTile(
                  title: Text('ادارة الكلية',style: TextStyle(fontSize: 25),),
                  children: [
                    TextButton(onPressed: (){}, child: Text('عميد الكلية',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('وكيل لشئون التعليم والطلاب',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('وكيل لشئون الدراسات العلياوالبحوث',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('وكيل الكلية لخدمة المجتمع وشئون البيئة',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('رؤساء الاقسام',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('أمين الكلية',style: TextStyle(fontSize: 20),)),
                  ],
                ),
                const Divider(
                  color: Colors.blueGrey,
                ),
                ExpansionTile(
                  title: Text('أعضاء هيئة التدريس',style: TextStyle(fontSize: 25),),
                  children: [
                    TextButton(onPressed: (){}, child: Text('بحث عن عضو',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('بيانات الموقع الشخصى',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('تسجيل البيانات',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('مستلخصات الابحاث',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('السيرة الذاتية',style: TextStyle(fontSize: 20),)),
                  ],
                ),
                const Divider(
                  color: Colors.blueGrey,
                ),
                ExpansionTile(
                  title: Text('اقسام الكلية',style: TextStyle(fontSize: 25),),
                  children: [
                    TextButton(onPressed: (){}, child: Text('قسم تكنولوجيا المعلومات',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('قسم علوم حاسب',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('قسم نظم المعلومات',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('قسم بحوث العمليات ودعم القرارات',style: TextStyle(fontSize: 20),)),
                  ],
                ),
                const Divider(
                  color: Colors.blueGrey,
                ),
                ExpansionTile(
                  title: Text('البرامج الدراسية',style: TextStyle(fontSize: 25),),
                  children: [
                    TextButton(onPressed: (){}, child: Text('تكنولوجيا المعلومات',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('بحوث العمليات ودعم القرارات',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('علوم الحاسب',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('نظم المعلومات',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('برامج الدراسات العليا',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('برنامج الحسوبة والمعلومات الحيوية',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('برنامج هندسة البرمجيات',style: TextStyle(fontSize: 20),)),
                  ],
                ),
                const Divider(
                  color: Colors.blueGrey,
                ),
                ExpansionTile(
                  title: Text('القطاعات',style: TextStyle(fontSize: 25),),
                  children: [
                    TextButton(onPressed: (){}, child: Text('مرحلة الدراسات العليا',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('سياسات ولوائح',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('مرحلة البكالوريوس',style: TextStyle(fontSize: 20),)),
                  ],
                ),
                const Divider(
                  color: Colors.blueGrey,
                ),
                ExpansionTile(
                  title: Text('الأبحاث العلمية',style: TextStyle(fontSize: 25),),
                  children: [
                    TextButton(onPressed: (){}, child: Text('الابحاث المتميزة',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('الخطة البحثية',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('النشر العلمى',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('الرسائل العلمية',style: TextStyle(fontSize: 20),)),
                    TextButton(onPressed: (){}, child: Text('تقارير المجالات البحثية',style: TextStyle(fontSize: 20),)),
                  ],
                ),
                const Divider(
                  color: Colors.blueGrey,
                ),
                ExpansionTile(
                  title: Text('المجلة العلمية',style: TextStyle(fontSize: 25),),

                ),

              ],
            ),
          ),
        )
      );
  }
  

