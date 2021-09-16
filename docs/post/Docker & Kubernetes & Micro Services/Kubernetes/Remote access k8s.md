# kubectl远程连接k8s

## 通过安全上下文访问本地网络k8s

### 基本流程操作

首先要确保k8s的`apiServer`可以被当前网络访问，确保网段在其监听的范围之内。（重要）

登录到`master`主机上：

```bash
$ kubectl cluster-info
Kubernetes control plane is running at https://0.0.0.0:6443 
CoreDNS is running at https://0.0.0.0:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy 

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

:warning:极不推荐使用`0.0.0.0`，这里我只是图方便进行测试使用。

获取当前集群的配置文件：

```bash
$ cat ~/.kube/config
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: LS0tLS1CRUdJTiB【此处省略。。。】==
    server: https://0.0.0.0:6443
  name: kind-my-cluster
contexts:
- context:
    cluster: kind-my-cluster
    user: kind-my-cluster
  name: kind-my-cluster
current-context: kind-my-cluster
kind: Config
preferences: {}
users:
- name: kind-my-cluster
  user:
    client-certificate-data: LS0tLS1【此处省略。。。】==
    client-key-data: LS0t【此处省略。。。】=
```

配置文件中的`certificate-authority-data【服务器端CA】`、`client-certificate-data【客户端证书】`和`client-key-data【客户端私钥】`都是`base64`简单加密过的，所以在引入上下文之前先将其解密。

- 使用`base64`命令进行解密：`echo <data> | base64 -d`
- 使用在线网站进行解密：https://www.base64decode.org/

将解密之后的文件保存在当前主机的`~/.kube/`目录之下，分别命名为（名字随意，记住就好）：

- my-cluster.ca
- k8s.crt
- k8s.key

> 当前主机还没有`kubectl`？三条命令快速安装。
>
> ```bash
> curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
> ```
>
> ```bash
> sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
> ```
>
> ```bash
> kubectl version --client
> ```

打开终端，确保`kubectl`已正确安装后运行以下几条命令来添加安全上下文：

```bash
# 添加集群地址，并设置集群ca
kubectl config set-cluster my-k8s --server https://10.0.0.18:6443  --certificate-authority=/home/agou-ops/.kube/my-cluster.ca	

# 添加用户，以及设置客户端证书及私钥
kubectl config set-credentials kubernetes-admin     --client-certificate=/home/agou-ops/.kube/k8s.crt     --client-key=/home/agou-ops/.kube/k8s.key

# 指定上下文，set-context名称可随便取
kubectl config set-context ubuntu --cluster=my-k8s  --namespace=default --user=kubernetes-admin 

# 激活上下文
kubectl config use-context ubuntu 
```

使用`kubectl config view`命令检查配置文件。

最后使用`kubectl cluster info`进行查看即可：

```bash
> kubectl --insecure-skip-tls-verify cluster-info
Kubernetes control plane is running at https://10.0.0.18:6443
CoreDNS is running at https://10.0.0.18:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

Done. :smile:

### 问题及解决方案

1. `Unable to connect to the server: x509: certificate is valid for 10.96.0.1, 172.18.0.4, 0.0.0.0, not 10.0.0.18`

>One option is to tell `kubectl` that you don't want the certificate to be validated. Obviously this brings up security issues but I guess you are only testing so here you go:
>
>```bash
>kubectl --insecure-skip-tls-verify --context=employee-context get pods
>```
>
>或者将其写入配置文件：
>
>```bash
>kubectl config set-cluster my-k8s --insecure-skip-tls-verify=true
>```
>
>The better option is to fix the certificate. Easiest if you reinitialize the cluster by running `kubeadm reset` on all nodes including the master and then do
>
>```bash
>kubeadm init --apiserver-cert-extra-sans=114.215.201.87
>```
>
>It's also possible to fix that certificate without wiping everything, but that's a bit more tricky. Execute something like this on the master as root:
>
>```bash
>rm /etc/kubernetes/pki/apiserver.*
>kubeadm init phase certs all --apiserver-advertise-address=0.0.0.0 --apiserver-cert-extra-sans=10.161.233.80,114.215.201.87
>docker rm `docker ps -q -f 'name=k8s_kube-apiserver*'`
>systemctl restart kubelet
>```
>
>来自：https://stackoverflow.com/a/46360852

## 访问云端k8s

## 访问云端k8s

未完。
