# Class exercises

## Exercise 1

We will use the homework repository and the branch `main`.

It will be your own individual repository or the central homework repository of your class - depending on which approach you are using in your class.

1. clone the homework repository into your computer.
2. when you are on `main` branch, create a branch named `git-week1/exercise_1/<yourname>`\* and move to it;
3. create a folder named `class_playground` in the `git` folder, under `/week1`;
4. create the following files inside the `class_playground` folder: `apples_file.txt`, `bananas_file.txt`, `oranges_file.txt`;
5. add some text to each of the files;
6. add and commit the `apples_file.txt`;
7. add and commit both the `oranges_file.txt` and the `bananas_file.txt`;
8. add more text to the `apples_file.txt`;
9. add and commit the changes in the `apples_file.txt`;
10. push your changes to Github.
11. go to the branch on github and look at the commits, analyze and discuss how it looks and how it connects with what you just did.

`*` `<yourname>` should be replace by your actual name, f.x. `git/week1/exercise_1/maria`

## Exercise 2

The goal of this exercise is to practice the homework workflow.
It will basically follow the second part of the class videos.

1. when you are on `main` branch, create a branch named `git-week1/exercise_2/<yourname>`\* and move to it;
2. create a file named `my_homework.txt` in the `git` folder, under `/week1/class_playground`;
3. add some text to the `my_homework.txt` file;
4. add and commit the changes in the `my_homework.txt` file;
5. add more text to the `my_homework.txt` file;
6. add and commit the changes in the `my_homework.txt` file;
7. push your changes to github;
8. on github, create a pull request from the exercis branch to `main`;
9. on your computer add some more text to the `my_homework.txt` file;
10. on your computer, add and commit the changes in the `my_homework.txt` file;
11. push the changes to github;
12. on github, check what happened to the pull request you created in step 8.
13. if you are on an individual homework repository approach, merge the PR and proceed to the next step. If you are on a central homework repository approach, DO NOT merge the PR, and skip the next step.
14. go to the `main` branch and update `main` by "downloading" the new commits from github: `git pull origin main`.

`*` `<yourname>` should be replace by your actual name, f.x. `git/week1/exercise_2/maria`

## Exercise 3

In this exercise, you will get an error when pushing to github and you will have to solve it.

1. on your homework repo go to the branch `main`, create a branch `git-week1/exercise_3/<yourname>`\* and move to it;
2. in the `git` folder, under `/week1/class_playground`, create a file named `colors.txt`;
3. add two colors to the file `colors.txt`, one per line;
4. add and commit the changes in the `colors.txt` file;
5. push the branch `git_exercise_3` to github.
6. **on github**, go to the branch `git_exercise_3` and add a color in the last line of the file `colors.txt`, commit your changes;
7. **on your computer**, add a color in the first line of the file `colors.txt`, add and commit your changes;
8. push the branch `git_exercise_3` to github. Discuss what is happening and how to solve it.

`*` `<yourname>` should be replace by your actual name, f.x. `git/week1/exercise_3/maria`

## Exercise 4

In this exercise you will get in trouble by checking out from the wrong branch you will have to solve it.

1. on your homework repo **DON'T** go to the main branch, make sure to stay on the branch from the previous exercise.
2. create a branch `git/week1/exercise_4/<yourname>`\* and move to it;
3. in the `git` folder, under `/week1/class_playground`, create a file named `movies.txt`;
4. add two movie names to the file `movies.txt`, one per line;
5. add and commit the changes in the `movies.txt` file;
6. push the branch `git_exercise_4` to github.
7. on github, create a pull request from your new branch to `main`.
8. see what commits you have there - do you only have commits from this exercise? Do you have commits that should not be here? Discuss why it happened and how to solve this situation.

`*` `<yourname>` should be replace by your actual name, f.x. `git/week1/exercise_4/maria`

## Exercise 5

The goal of this exercise is to get more familiar with branches.

Take notes of the answers to the questions in points 14, 15, 16, 17, 18, 19, 22, 23, 25, and 26. Discuss the answers in your breakout room.

1. create a new folder in your Desktop called `branch_exercise`;
2. using the command line go to that folder and create a new repository there (`git init`);
3. create a new file in that folder called `countries.txt`;
4. add two country names (one per line) to the `countries.txt` file;
5. commit your changes;
6. create a new branch named `add_countries`, move to that branch;
7. add two more country names (one per line) to the `countries.txt` file;
8. commit your changes;
9. go back to `main`;
10. create a new branch named `add_cities`, move to that branch;
11. create a new file named `cities.txt`;
12. add two city names (one per line) to the `cities.txt` file;
13. commit your changes;
14. go back to `main` and take a look around your folder. Which files do you see? What are their contents?
15. do `git log --oneline`. Which commits do you see?
16. go to the `add_countries` branch and take a look around your folder. Which files do you see? What are their contents?
17. do `git log --oneline`. Which commits do you see?
18. go to the `add_cities` branch and again take a look around your folder. Which files do you see? What are their contents?
19. do git `log --oneline`. Which commits do you see?
20. now go to `main`;
21. merge the branch `add_countries` with main (`git merge add_countries`);
22. take a look at your folder, which files do you see? What are their contents?
23. do `git log --oneline`. Which commits do you see?
24. now merge the branch `add_cities` with main (`git merge add_cities`)
25. take a look at your folder, which files do you see? What are their contents?
26. do `git log --oneline`. Which commits do you see?
