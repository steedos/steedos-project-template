::此脚本目的是为了将node、npm、yarn、mongodb等执行程序添加至PATH，以便于开发人员在控制台执行相关命令
@ECHO off

%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit

setx -m PATH "%~dp0nodejs-12.20.1\;%~dp0mongodb\4.2.11\bin;%PATH%"

pause