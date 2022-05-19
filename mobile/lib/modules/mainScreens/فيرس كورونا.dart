// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'dart:math';

import 'package:flutter/material.dart';
import 'package:graduation_project/shared/components/network/styles/icon-broken.dart';
import 'package:lottie/lottie.dart';

class CoronaVirus extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
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
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Card(
              elevation: 10,
              clipBehavior: Clip.antiAliasWithSaveLayer,
              margin: EdgeInsets.all(8),
              child: Stack(
                alignment: AlignmentDirectional.bottomEnd,
                // ignore: prefer_const_literals_to_create_immutables
                children: [
                  Image(
                    image: NetworkImage(
                      'https://img.freepik.com/free-photo/covid-virus-3d-modeling_23-2149072254.jpg?size=626&ext=jpg',
                    ),
                    fit: BoxFit.cover,
                    height: 200,
                    width: double.infinity,
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      'الجامعة فى مواجهة فيرس كورونا',
                      style: Theme.of(context).textTheme.subtitle1!.copyWith(
                            color: Colors.black,
                          ),
                    ),
                  ),
                ],
              ),
            ),
            Container(
              alignment: AlignmentDirectional.bottomCenter,
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Text(
                  'اجراءات جامعة المنوفيه فى مواجهة فيرس كورونا',
                  style: TextStyle(
                    color: Colors.red,
                    fontSize: 20,
                    fontFamily: 'jannah',
                  ),
                ),
              ),
            ),
            Row(
              children: [
                Expanded(
                  flex: 0,
                  child: Lottie.network(
                    'https://assets8.lottiefiles.com/private_files/lf30_UChCq9.json',
                    height: 160,
                    width: 160,
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Text(
                      'في إطار حرص جامعة المنوفية على تطبيق سياسة الدولة بشأن التيسير على المواطنين ومراعاة لخطة الدولة في اتخاذ الإجراءات الوقائية للحد من انتشار فيروس كورونا المُستجد ، فقد أخذت جامعة النوفية على عاتقها عدة إجراءات من شأنها مساعدة أعضاء هيئة التدريس والعاملين والطلاب على تخطى تلك المشكلة التي انتشرت في أغلب دول العالم وتوقفت الحياة بها ، وكان لجامعة السبق كعادتها دائماً لتوكد لجميع متابعيها من مختلف أرجاء العالم أنها أول جامعة الكترونية في مصر وأنها استحقت عن جداره المركز الأول على مستوى الجامعات المصرية في التحول الرقمى:',
                      textDirection: TextDirection.rtl,
                      maxLines: 15,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 10,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Text(
                ' : فأخذت الجامعة عدة اجرائات منها ',
                style: TextStyle(fontSize: 20),
              ),
            ),
            Row(
              children: [
                Expanded(
                  flex: 0,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 3),
                    child: OutlinedButton(
                      onPressed: () {},
                      child: Text('اذهب'),
                    ),
                  ),
                ),
                Expanded(
                  child: Align(
                    alignment: AlignmentDirectional.centerEnd,
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 5),
                      child: Text(
                        'تم إنشاء بوابة جامعة المنصورة للمحتوى التعليمى',
                        style: TextStyle(fontSize: 15, color: Colors.red),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 10,
            ),
            Row(
              children: [
                Expanded(
                  flex: 0,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 3),
                    child: OutlinedButton(
                      onPressed: () {},
                      child: Text('اذهب'),
                    ),
                  ),
                ),
                Expanded(
                  child: Align(
                    alignment: AlignmentDirectional.centerEnd,
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 15),
                      child: Text(
                        'وكذلك انشاء بوابه لمحاضرات الدراسات العليا',
                        style: TextStyle(fontSize: 15, color: Colors.red),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 10,
            ),
            Row(
              children: [
                Expanded(
                  flex: 0,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 3),
                    child: OutlinedButton(
                      onPressed: () {},
                      child: Text('اذهب'),
                    ),
                  ),
                ),
                Expanded(
                  child: Text(
                    'تم انشاء بوابة جامعة المنوفية للتعليم الالكترونى  ',
                    style: TextStyle(fontSize: 15, color: Colors.red),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 10,
            ),
            Row(
              children: [
                Expanded(
                  flex: 0,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 3),
                    child: OutlinedButton(
                      onPressed: () {},
                      child: Text('اذهب'),
                    ),
                  ),
                ),
                Expanded(
                  child: Text(
                    'تم انشاء بوابة جامعة المنوفية للتعليم الالكترونى  ',
                    style: TextStyle(fontSize: 15, color: Colors.red),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 10,
            ),
          ],
        ),
      ),
    );
  }
}
