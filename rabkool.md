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

## 启用默认的颜色设置可以使用如下命令

```shell
git config --global color.ui true
```
