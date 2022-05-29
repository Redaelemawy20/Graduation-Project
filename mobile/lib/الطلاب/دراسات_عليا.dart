import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class drasat extends StatelessWidget {
  const drasat({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: double.infinity,
      width: double.infinity,
      decoration: BoxDecoration(
        color: Colors.white,
      ),
      child: Center(
        child: Padding(
          padding: const EdgeInsets.all(50.0),
          child: Container(
            height: 250,
            width: 600,
            decoration: BoxDecoration(
                color: Color.fromARGB(255, 174, 183, 183),
                borderRadius: BorderRadius.circular(20.0)),
            child: Center(
              child: Padding(
                padding: const EdgeInsets.all(70),
                child: Column(
                  children: [
                    Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          color: Color.fromARGB(255, 4, 1, 74)),
                      height: 45,
                      width: 200.0,
                      child: TextButton(
                        onPressed: () {},
                        child: Text(
                          'شروط القيد ',
                          style: TextStyle(
                              color: Colors.white, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 15.0,
                    ),
                    Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          color: Color.fromARGB(255, 4, 1, 74)),
                      height: 45,
                      width: 200.0,
                      child: TextButton(
                        onPressed: () {},
                        child: Text(
                          'خدمات الكترونية',
                          style: TextStyle(
                              color: Colors.white, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
