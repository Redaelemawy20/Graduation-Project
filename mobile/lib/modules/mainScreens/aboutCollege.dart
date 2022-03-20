// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:flutter_staggered_animations/flutter_staggered_animations.dart';
import 'package:graduation_project/cubit/cubit.dart';

class AboutCollege extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: AnimationLimiter(
        child: GridView.count(
          shrinkWrap: true,
          crossAxisCount: 2,
          children: List.generate(
            10,
            (int index) {
              return AnimationConfiguration.staggeredGrid(
                position: index,
                duration: const Duration(milliseconds: 900),
                columnCount: 1,
                child: ScaleAnimation(
                  child: FadeInAnimation(
                    child: NewsCubit.get(context).yourListChild(),
                  ),
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
