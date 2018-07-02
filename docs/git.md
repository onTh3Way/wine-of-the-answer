# git更新与同步
## 将本地配置与master分支同步
```
  git checkout yourBranch // 切换至自己的分支 <br>
  git commit -a // 提交全部修改 <br>
  git push origin yourBranch // 更新远程仓库 <br>
	git fetch origin master // 更新本地master分支 <br>
	git reset --hard origin/master // 切换 <br>
	git fetch origin yourBranch <br>
	git merge origin/yourBranch <br>
```

## 更新自己分支代码
```
	// ... 代码编辑中 ... 
	// 代码编辑完毕,开始提交
	git add .
	git commit -m '更新信息'
	git push origin yourBranch
````

## next todo
使用node command简化同步与更新流程

