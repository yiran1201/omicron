## EADDRINUSE
- 这是一个僵尸问题，具体是指进程里面原来的SERVER存在但是没有被kill,然后重新去开这个server出现冲突
- 解决办法：输入 lsof -i tcp:7777 去检测这个server的进程，如果存在就将其kill掉
- 杀死进程：kill -9 <进程编号PID>
