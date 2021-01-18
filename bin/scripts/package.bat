set VERSION=1.23
cd ..\..\
7z a -tzip dist\%VERSION%.zip * -x!.git -x!dist
pause