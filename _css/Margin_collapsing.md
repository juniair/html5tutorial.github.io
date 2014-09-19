---
title: 여백 겹침
---

바깥쪽 여백(``margin``)은 안쪽 여백(``padding``)이나 테두리(``border``)와 달리 특별한 성질이 있습니다. 몇몇 경우에 블럭 요소들 사이의 여백이 서로 겹쳐질 수 있습니다.


# 개요

예를 들어 아래와 같이 인접한 두 블럭 요소 사이의 여백은 서로 겹칩니다.

{% highlight css %}
p {
    padding: 10px 0px 10px 0px;
    margin: 10px;
}
{% endhighlight %}

{% highlight html %}
<p>Hello,</p>
<p>Good-bye.</p>
{% endhighlight %}

``@pp run``

``@pp boxmodel``

위 예시의 두 [p 요소](/docs/p.html) 사이의 여백은 20px 이어야 하지만(첫번째 p 요소의 아래쪽 여백과 두번째 p 요소의 위쪽 여백), 두 여백이 겹쳐지면서 여백이 10px로 줄었습니다.

그 이유는 "여백"이라는 말의 의미를 생각해보면 당연한데, 여백이 10px 이라는 것은 반드시 각 요소가 10px 씩의 영역을 확보해야 한다는 뜻이 아니라, 인접한 요소와의 사이에 빈 공간이 10px 이어야 한다는 의미이기 때문입니다.

만약 두 요소 사이의 여백 크기가 서로 다르다면 더 큰 쪽의 여백만큼 벌어집니다.

{% highlight css %}
.first {
    padding: 10px 0px 10px 0px;
    margin: 10px 0px 10p 0px;
}
.second {
    padding: 10px 0px 10px 0px;
    margin: 30px 0px 30px 0px;
}
{% endhighlight %}

{% highlight html %}
<p class="first">Hello,</p>
<p class="second">Good-bye.</p>
{% endhighlight %}

``@pp run``

``@pp boxmodel``

위 예시에서는 아래쪽 요소의 여백이 30px, 위쪽 요소의 여백이 10px 이므로 더 큰 여백에 맞춰 두 요소 사이의 간격은 30px 떨어지게 표현됩니다. 겹치진 10px 여백은 진한 주황색으로 표시하였습니다.


# 여백이 겹치는 상황들

## 인접한 두 요소 사이의 상/하 여백

서로 인접한 [형제 노드](/docs/DOM.html) 사이의 상/하 여백은 서로 겹쳐집니다. 위에서 설명한 사례에 해당하므로 별도의 예시는 생략합니다.

## 부모 요소와 첫번째 자식 요소, 마지막 자식 요소

부모 요소의 상단 여백과 첫번째 자식 요소의 상단 여백, 부모 요소의 하단 여백과 마지막 자식 요소의 하단 여백은 서로 겹칩니다.

{% highlight css %}
div.parent {
    margin: 10px;
}
p {
    margin: 20px;
}
{% endhighlight %}

{% highlight html %}
<div class="parent">
    <p>Hello,</p>
    <p>I'm in the middle.</p>
    <p>Good-bye.</p>
</div>
{% endhighlight %}

``@pp run``

``@pp boxmodel``

위 예시에서 ``<p>Hello,</p>``의 상단 여백은 20px, ``<div>``의 상단 여백은 10px 인데, 이 두 여백이 겹쳐서 결과적으로 20px 의 상단 여백을 갖게 되었습니다. 마찬가지로 하단의 ``p`` 또한 여백이 겹쳐졌다는 사실을 확인할 수 있습니다.

단 이들 사이에 테두리(border)나 안쪽 여백(padding) 등이 있어서 두 바깥 여백(margin) 사이를 구분해줄 수 있는 무언가가 있다면 여백이 겹치지 않습니다:

{% highlight css %}
div.parent {
    margin: 10px;
    border: 1px solid black;
}
p {
    margin: 20px;
}
{% endhighlight %}

{% highlight html %}
<div class="parent">
    <p>Hello,</p>
    <p>I'm in the middle.</p>
    <p>Good-bye.</p>
</div>
{% endhighlight %}

``@pp run``

``@pp boxmodel``

위 예시에서는 ``div``에 1px 테두리가 있기 때문에 여백이 서로 겹쳐지지 않았습니다.


## 빈 블럭

만약 어떤 블럭이 테두리도 없고 안쪽 여백도 없고, 컨텐츠도 없어서 완전히 비어 있으면, 해당 요소의 상단 여백과 하단 여백이 겹쳐집니다.


# 요약

여백이 겹치는 다양한 규칙들이 직관적이지 않게 느껴질 수 있으나 "여백"의 의미를 잘 생각해보면 이 규칙들이 여백을 여백답게 만들어준다는 점을 쉽게 이해할 수 있습니다.

여백이 10px 이라는 것은 반드시 각 요소가 10px 씩의 영역을 확보해야 한다는 뜻이 아니라, 인접한 요소와의 사이에 빈 공간이 최소한 10px 이어야 한다는 의미이기 때문입니다. 만약 여백 겹침이라는 규칙이 존재하지 않는다면 어떠 요소의 여백을 지정할 때 이 요소의 주변에 어떤 요소가 배치될 것인지에 따라 일관성 없이 여백을 수정해주어야 할 것입니다. 하지만 여백 겹침 규칙 덕분에 단순하고 규칙적인 상/하 여백을 지정할 수 있게 되는 것입니다.