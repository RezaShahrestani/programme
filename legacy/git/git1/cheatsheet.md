# Cheat sheet

Here are the commands we used in the class (and a few more) and their meaning.

## Command line

- `pwd` - stands for 'print working directory' and you use it to know in which directory you are.
- `cd <folder_name>` - stands for 'change directory', and you use it to go inside `folder_name`.
- `cd ..` - to go to the parent folder of your current folder.
- `mkdir <folder_name>` - stands for 'make directory' and you use it to create a new folder with `folder name`.
- `ls` - stands for 'list' and you use it list all the folder contents.
- `ls .*` - list all the folder contents, also invisible folders/files (e.g. the .git folder).
- `rm <file_name>` - THIS IS DANGEROUS!!! It removes the file named `file_name` FOREVER, you can NEVER recover it.

To remove a git repository but still keep your files do `rm -rf .git` in the folder where you have the repository. All the git information is lost when you do this.

## Git

### Part 1

We used these commands in the first part of the class to work with a local git repository on our own computers.

- `git add <file_name>` - tells git to start tracking a file or to update what will be commited. Always do that before `git commit`.
- `git commit -m "commit_message"` - commit your changes.
- `git push origin <branch_name>` - push (upload) your changes in your current branch to your github repository into the branch named `<branch_name>`.
- `git status` - shows you which files are ready to be commited, or not tracked by git. Often tells you what to do as well. It is your best friend when using git :)
- `git log` - shows the history of commits in the current branch.
- `git log --oneline` - shows the history of commits in the current branch in a single line per commit.
- `git diff <file_name>` - to see the difference between the file contents now and in the latest commit.

Note: if you do `git add .` instead of `git add <file_name>` you will add all files in your current folder.

### Part 2

We used these commands in the second part of the class to create a branch, go to it, commit our changes on that branch, and then push it to Github.

- `git branch <branch_name>` - create a new branch `<branch_name>`.
- `git checkout <branch_name>` - go to branch `<branch_name>`.
- `git branch` - check which local branches you have and where you are (in green).
- `git push origin <branch_name>` - push (upload) your local changes in your current branch into the branch named `branch_name` in your github repository.

### Extras

Commands we didn't use in class but that might be useful for you:

- `git pull origin <branch_name>` - pull (download) your changes from your github repository in the branch named `<branch_name>`, into your current local branch.
- `git checkout --file <file_name>` - use if you changed the file named `file_name` and want to revert the changes, i.e. to get back the version you had in the last commit
- git

  **_Notes_**

  For the sake of consistency (and to avoid mistakes), make sure that when you push you do it to a branch with the same name as the branch where you are, e.g. if you are on a branch named `my_homework` then push to a branch named `my_homework` by typing `git push origin my_homework`.

  When pulling, if you want to pull from a branch named, for instance `git_homework`, make sure that you are in a branch with the same name (`git_homework`) on your computer as well, and only then do `git pull origin <branch_name>`.
