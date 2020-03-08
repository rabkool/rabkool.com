# rabkool


## github

#### 1.本地生成密钥

```
ssh-keygen -t rsa -C "注册Github用的邮箱"
```

生成完以后

```
cd ~/.ssh 

cat id_rsa.pub
```

获得一串密钥后 然后拿着这一串密钥到GitHub主页 SSH and GPG keys 添加New Key

#### 2.登陆并git init 初始化

使用命令登陆：

```
ssh -v git@github.com 

ssh -T git@github.com
```


初始化一个git 仓库

```
git init
```


#### 3.git clone / git remote add

git clone 一个project，远程仓库是配置好的。

```
git clone https://github.com/...
```

 也可以自己使用命令

```
git remote add origin https://github.com/frankchen121212/项目名
```

#### 4.项目完成后执行git add . 添加要上传的文件

例：

添加全部文件

```
git add .
```

 添加一个文件

```
git add helloworld.py
```

 

#### 5.提交 git commit -m "描述信息"

例：

```
git commit -m "hello world"
```

 

#### 6.git push 上传到 branch (默认为master)

```
git push origin master
```

#### 7. 其他

#####  启用默认的颜色设置可以使用如下命令

```shell
git config --global color.ui true
```

##### 不用再次填 账号密码
```
git config --global credential.helper store
```


## docker
#### docker启动
```
systemctl start docker
service docker start
```

#### 重启docker服务
```
systemctl restart  docker
sudo service docker restart
```
#### 关闭docker    
```
systemctl stop docker
service docker stop
```

#### 查看是否启动成功
```
docker ps -a
```

##  Python

1. 安装相应的编译工具
``` 
在root用户下(不要用普通用户,麻烦),全部复制粘贴过去,一次性安装即可.

yum -y groupinstall "Development tools"
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel
yum install -y libffi-devel zlib1g-dev
yum install zlib* -y
```
2. 下载安装包
```
wget wget https://www.python.org/ftp/python/3.7.2/Python-3.7.2.tar.xz
```

3. 解压
```
tar -xvJf  Python-3.7.2.tar.xz
```

4. 创建编译安装目录
```
mkdir /usr/local/python3 
```

5. 安装
```
cd Python-3.7.2
./configure --prefix=/usr/local/python3 --enable-optimizations --with-ssl 
```
第一个指定安装的路径,不指定的话,安装过程中可能软件所需要的文件复制到其他不同目录,删除软件很不方便,复制软件也不方便.
第二个可以提高python10%-20%代码运行速度.
第三个是为了安装pip需要用到ssl,后面报错会有提到.
```
make && make install
what-does-enable-optimizations-do-while-compiling-python
```

6. 创建软链接
```
ln -s /usr/local/python3/bin/python3 /usr/local/bin/python3
ln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip3
```
7. 验证是否成功
```
python3 -V
pip3 -V
```
```
 参考
https://www.cnblogs.com/xiujin/p/11477419.html
```

## CentOS7下部署Django

```
https://blog.csdn.net/u012516524/article/details/82154053
```

## SQLite
Django部署阿里云服务时候报错：SQLite 3.8.3 or later is required (found 3.7.17)
```
https://blog.csdn.net/qq_39969226/article/details/92218635
```